"use client";

import { useEffect, useRef, useState, type DragEvent, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, AudioLines, Check, Film, LoaderCircle, Plus, Upload, X } from 'lucide-react';
import { Button } from '@libs/react-shared/ui/button';
import { Textarea } from '@libs/react-shared/ui/textarea';
import { Label } from '@libs/react-shared/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@libs/react-shared/ui/select';
import type { homeContent } from '@/content/home';

type Copy = typeof homeContent.tool;
type Reference = { id: string; file: File; kind: 'image' | 'video' | 'audio'; url: string; duration: number };
type MediaInfo = { width: number; height: number; duration: number };

function inspectMedia(file: File, url: string, kind: Reference['kind']): Promise<MediaInfo> {
  return new Promise((resolve, reject) => {
    const element = document.createElement(kind === 'image' ? 'img' : kind);
    const finish = (error?: Error) => {
      clearTimeout(timer);
      element.onerror = null;
      if (element instanceof HTMLImageElement) {
        element.onload = null;
        if (error) reject(error);
        else resolve({ width: element.naturalWidth, height: element.naturalHeight, duration: 0 });
      } else {
        element.onloadedmetadata = null;
        const info = { width: element instanceof HTMLVideoElement ? element.videoWidth : 0, height: element instanceof HTMLVideoElement ? element.videoHeight : 0, duration: element.duration };
        element.removeAttribute('src');
        element.load();
        if (error) reject(error);
        else resolve(info);
      }
    };
    const timer = window.setTimeout(() => finish(new Error(file.name)), 8000);
    element.onerror = () => finish(new Error(file.name));
    if (element instanceof HTMLImageElement) element.onload = () => finish();
    else { element.preload = 'metadata'; element.onloadedmetadata = () => finish(); }
    element.src = url;
  });
}

function referenceError(references: Reference[], copy: Copy): string | null {
  const images = references.filter((ref) => ref.kind === 'image');
  const videos = references.filter((ref) => ref.kind === 'video');
  const audio = references.filter((ref) => ref.kind === 'audio');
  if (references.length > 12 || images.length > 9 || videos.length > 3 || audio.length > 3) return copy.countError;
  if (videos.reduce((total, ref) => total + ref.duration, 0) > 15.001 || audio.reduce((total, ref) => total + ref.duration, 0) > 15.001) return copy.durationError;
  if (audio.length && !images.length && !videos.length) return copy.audioOnlyError;
  return null;
}

export function VideoWorkspace({ copy }: { copy: Copy }) {
  const searchParams = useSearchParams();
  const initialExample = copy.examples.find((example) => example.id === searchParams.get('example'));
  const [prompt, setPrompt] = useState(initialExample?.prompt ?? '');
  const [ratio, setRatio] = useState<string>(initialExample?.ratio ?? '16:9');
  const [duration, setDuration] = useState(String(initialExample?.duration ?? 6));
  const [resolution, setResolution] = useState('768P');
  const [references, setReferences] = useState<Reference[]>([]);
  const referencesRef = useRef<Reference[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);
  const promptInput = useRef<HTMLTextAreaElement>(null);
  const busyRef = useRef(false);
  const mountedRef = useRef(true);
  const [reading, setReading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(initialExample ? copy.exampleApplied : null);

  useEffect(() => {
    if (initialExample) {
      setPrompt(initialExample.prompt); setRatio(initialExample.ratio); setDuration(String(initialExample.duration));
      setNotice(copy.exampleApplied); setError(null);
    }
  }, [initialExample, copy.exampleApplied]);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; referencesRef.current.forEach((ref) => URL.revokeObjectURL(ref.url)); };
  }, []);

  function updateReferences(next: Reference[]) { referencesRef.current = next; setReferences(next); }

  async function selectFiles(files: FileList | File[]) {
    if (busyRef.current) return;
    const chosen = Array.from(files);
    if (!chosen.length) return;
    setError(null); setNotice(null);
    if (chosen.length + referencesRef.current.length > 12) { setError(copy.countError); return; }
    busyRef.current = true; setReading(true);
    const added: Reference[] = [];
    let pendingUrl: string | undefined;
    try {
      for (const file of chosen) {
        const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
        const kind: Reference['kind'] | null = ['jpg', 'jpeg', 'png', 'webp'].includes(extension) ? 'image' : ['mp4', 'mov'].includes(extension) ? 'video' : ['mp3', 'wav'].includes(extension) ? 'audio' : null;
        if (!kind) throw new Error(copy.formatError);
        const maxBytes = { image: 30, video: 50, audio: 15 }[kind] * 1_000_000;
        if (file.size > maxBytes || file.size === 0) throw new Error(copy.sizeError);
        pendingUrl = URL.createObjectURL(file);
        let info: MediaInfo;
        try { info = await inspectMedia(file, pendingUrl, kind); }
        catch { throw new Error(copy.metadataError); }
        if (kind !== 'audio' && (info.width < 256 || info.height < 256 || info.width > 5760 || info.height > 5760 || info.width / info.height < 0.4 || info.width / info.height > 2.5)) throw new Error(copy.dimensionsError);
        if (kind !== 'image' && (!Number.isFinite(info.duration) || info.duration < 2 || info.duration > 15.001)) throw new Error(copy.durationError);
        added.push({ id: crypto.randomUUID(), file, kind, url: pendingUrl, duration: info.duration });
        pendingUrl = undefined;
      }
      const next = [...referencesRef.current, ...added];
      const invalid = referenceError(next, copy);
      if (invalid) throw new Error(invalid);
      if (!mountedRef.current) { added.forEach((ref) => URL.revokeObjectURL(ref.url)); return; }
      updateReferences(next);
    } catch (caught) {
      if (pendingUrl) URL.revokeObjectURL(pendingUrl);
      added.forEach((ref) => URL.revokeObjectURL(ref.url));
      if (mountedRef.current) setError(caught instanceof Error ? caught.message : copy.metadataError);
    } finally {
      busyRef.current = false;
      if (mountedRef.current) setReading(false);
      if (fileInput.current) fileInput.current.value = '';
    }
  }

  function removeReference(id: string) {
    const removed = referencesRef.current.find((ref) => ref.id === id);
    if (removed) URL.revokeObjectURL(removed.url);
    updateReferences(referencesRef.current.filter((ref) => ref.id !== id));
    setError(null); setNotice(null);
  }

  function clearForm() {
    referencesRef.current.forEach((ref) => URL.revokeObjectURL(ref.url));
    updateReferences([]); setPrompt(''); setRatio('16:9'); setDuration('6'); setResolution('768P'); setError(null); setNotice(null);
    promptInput.current?.focus();
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busyRef.current) return;
    setNotice(null);
    if (!prompt.trim()) { setError(copy.promptError); promptInput.current?.focus(); return; }
    const invalid = referenceError(referencesRef.current, copy);
    if (invalid) { setError(invalid); return; }
    setError(null); setNotice(copy.readyMessage);
  }

  function drop(event: DragEvent<HTMLButtonElement>) { event.preventDefault(); setDragging(false); void selectFiles(event.dataTransfer.files); }

  return (
    <form className="minimax-tool-form" onSubmit={submit} noValidate aria-label={copy.title}>
      <div className="minimax-tool-heading"><p><Film size={17} aria-hidden="true" />{copy.title}</p><span>{copy.model}</span></div>
      <div className="minimax-prompt-label"><Label htmlFor="h3-prompt">{copy.promptLabel}</Label><Button type="button" variant="ghost" size="sm" onClick={clearForm} disabled={reading} className="minimax-clear">{copy.clear}</Button></div>
      <Textarea id="h3-prompt" ref={promptInput} value={prompt} maxLength={copy.promptMax} placeholder={copy.promptPlaceholder} aria-describedby="h3-prompt-hint h3-prompt-count" aria-invalid={Boolean(error && !prompt.trim())} onChange={(event) => { setPrompt(event.target.value); setNotice(null); setError(null); }} className="minimax-prompt-input" />
      <div className="minimax-prompt-meta"><p id="h3-prompt-hint">{copy.promptHint}</p><span id="h3-prompt-count" aria-label={copy.characterUnit}>{prompt.length}/{copy.promptMax}</span></div>
      <div className="minimax-setting-grid">
        <div><Label htmlFor="h3-ratio">{copy.ratioLabel}</Label><Select value={ratio} onValueChange={(value) => { setRatio(value); setNotice(null); }}><SelectTrigger id="h3-ratio"><SelectValue /></SelectTrigger><SelectContent className="minimax-select-popover">{copy.ratios.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent></Select></div>
        <div><Label htmlFor="h3-duration">{copy.durationLabel}</Label><Select value={duration} onValueChange={(value) => { setDuration(value); setNotice(null); }}><SelectTrigger id="h3-duration"><SelectValue /></SelectTrigger><SelectContent className="minimax-select-popover">{copy.durations.map((value) => <SelectItem key={value} value={String(value)}>{value} {copy.durationUnit}</SelectItem>)}</SelectContent></Select></div>
        <div><Label htmlFor="h3-resolution">{copy.resolutionLabel}</Label><Select value={resolution} onValueChange={(value) => { setResolution(value); setNotice(null); }}><SelectTrigger id="h3-resolution"><SelectValue /></SelectTrigger><SelectContent className="minimax-select-popover">{copy.resolutions.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent></Select></div>
      </div>
      <div className="minimax-reference-label"><Label htmlFor="h3-references">{copy.referenceLabel}</Label><span>{copy.referenceOptional}</span></div>
      <input ref={fileInput} type="file" id="h3-references" className="sr-only" multiple disabled={reading} accept=".jpg,.jpeg,.png,.webp,.mp4,.mov,.wav,.mp3" onChange={(event) => { if (event.target.files) void selectFiles(event.target.files); }} aria-describedby="h3-reference-help" />
      <button type="button" className={`minimax-dropzone${dragging ? ' is-dragging' : ''}`} disabled={reading} onClick={() => fileInput.current?.click()} onDragOver={(event) => { event.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={drop}>
        {reading ? <LoaderCircle className="minimax-spinner" size={20} aria-hidden="true" /> : <span className="minimax-upload-icon"><Upload size={17} aria-hidden="true" /><Plus size={11} aria-hidden="true" /></span>}
        <strong>{reading ? copy.reading : copy.referenceAction}</strong><span>{copy.referenceHint}</span>
      </button>
      <p id="h3-reference-help" className="minimax-reference-help">{copy.referenceHelp}</p>
      {references.length > 0 && <ul className="minimax-reference-list">{references.map((ref) => <li key={ref.id}>{ref.kind === 'image' ? <Image src={ref.url} alt={ref.file.name} width={36} height={36} unoptimized /> : ref.kind === 'video' ? <Film size={17} aria-hidden="true" /> : <AudioLines size={17} aria-hidden="true" />}<span>{ref.file.name}</span><Button type="button" variant="ghost" size="icon" disabled={reading} onClick={() => removeReference(ref.id)} aria-label={`${copy.removeReference}: ${ref.file.name}`}><X size={14} /></Button></li>)}</ul>}
      <div className="minimax-credit-row"><span>{copy.creditLabel}</span><strong>{copy.creditValue}</strong></div>
      <Button type="submit" className="minimax-generate-button" size="lg" disabled={reading}>{copy.generate}<ArrowRight size={17} aria-hidden="true" /></Button>
      <p className="minimax-credit-hint"><Check size={12} aria-hidden="true" />{copy.creditHint}<span aria-hidden="true">·</span>{copy.localNotice}</p>
      {error && <p className="minimax-form-error" role="alert">{error}</p>}
      {notice && <div className="minimax-form-notice" role="status"><Check size={16} aria-hidden="true" /><p>{notice}</p></div>}
      <details className="minimax-validation-note"><summary>{copy.validationLabel}</summary><p>{copy.validationHelp}</p></details>
    </form>
  );
}
