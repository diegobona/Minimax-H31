import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine, ArrowUpRight, ChevronDown, Info } from 'lucide-react';
import { comfyuiContent as c, comfyuiSources as sources } from '@/content/comfyui';
import { DEFAULT_OG_IMAGE } from '@/content/home';

export const metadata: Metadata = {
  title: { absolute: c.metadata.title },
  description: c.metadata.description,
  alternates: { canonical: '/minimax-h3.1-comfyui' },
  openGraph: { title: c.metadata.title, description: c.metadata.description, url: '/minimax-h3.1-comfyui', type: 'article', images: [DEFAULT_OG_IMAGE] },
};

function RecordedText({ text }: { text: string }) {
  return <>{text}</>;
}

function Source({ href, children = c.closing.source }: { href: string; children?: React.ReactNode }) {
  return <a className="minimax-guide-source" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={13} aria-hidden="true" /></a>;
}

export default function ComfyUIPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  };

  return (
    <article className="minimax-home minimax-guide">
      <div className="minimax-container minimax-guide-intro">
        <div className="minimax-guide-intro-copy">
          <p className="minimax-eyebrow">{c.hero.label}</p>
          <h1>{c.hero.heading}</h1>
          <p className="minimax-guide-lead">{c.hero.introduction}</p>
          <p className="minimax-guide-tool-link">{c.hero.linkLead} <Link href="/#generator">{c.hero.linkText}</Link> {c.hero.linkTail}</p>
          <div className="minimax-guide-actions">
            <a className="minimax-guide-primary" href={sources.workflowDownload} target="_blank" rel="noreferrer"><ArrowDownToLine size={16} aria-hidden="true" />{c.hero.download}</a>
            <Source href={sources.cloud}>{c.hero.hosted}</Source>
          </div>
          <div className="minimax-guide-review"><span>{c.hero.model}</span></div>
        </div>
        <figure className="minimax-guide-preview">
          <p className="minimax-eyebrow">{c.hero.previewLabel}</p>
          <Image src="/comfyui/h3-t2v-preview.webp" alt={c.hero.previewAlt} width={350} height={350} priority unoptimized />
          <figcaption>{c.hero.previewCaption} <Source href={sources.workflow}>{c.hero.previewSource}</Source></figcaption>
        </figure>
        <p className="minimax-guide-scope"><Info size={16} aria-hidden="true" />{c.hero.scope}</p>
      </div>

      <div className="minimax-container minimax-editorial">
        <section className="minimax-section" id="requirements">
          <h2>{c.requirements.heading}</h2>
          <p className="minimax-section-intro">{c.requirements.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table">
            <thead><tr>{c.requirements.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.requirements.rows.map((row) => <tr key={row.item}><th scope="row">{row.item}</th><td><RecordedText text={row.value} /></td><td><Source href={row.source} /></td></tr>)}</tbody>
          </table></div>
          <p className="minimax-guide-note">{c.requirements.note}</p>
        </section>

        <section className="minimax-section" id="download-weights">
          <h2>{c.downloads.heading}</h2>
          <p className="minimax-section-intro">{c.downloads.introduction}</p>
          <div className="minimax-guide-routes">{c.downloads.routes.map((route) => <div key={route.href}><h3>{route.title}</h3><p>{route.text}</p><Source href={route.href}>{route.label}</Source></div>)}</div>
          <div className="minimax-table-scroll"><table className="minimax-table minimax-guide-downloads">
            <thead><tr>{c.downloads.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.downloads.files.map((file) => <tr key={file.name}><th scope="row"><span>{file.role}</span><code>{file.name}</code></th><td><code>{file.directory}</code></td><td>{file.size}</td><td><Source href={file.href}>{c.downloads.downloadLabel}</Source><Source href={file.info}>{c.downloads.infoLabel}</Source></td></tr>)}</tbody>
          </table></div>
          <p className="minimax-guide-note">{c.downloads.note}</p>
        </section>

        <section className="minimax-section" id="install-nodes">
          <h2>{c.nodes.heading}</h2>
          <p className="minimax-section-intro">{c.nodes.introduction}</p>
          <ol className="minimax-guide-steps">{c.nodes.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p><Source href={step.source} /></li>)}</ol>
        </section>

        <section className="minimax-section" id="import-workflow">
          <h2>{c.importing.heading}</h2>
          <p className="minimax-section-intro">{c.importing.introduction}</p>
          <ol className="minimax-guide-steps minimax-guide-compact-steps">{c.importing.steps.map((step) => <li key={step}><p>{step}</p></li>)}</ol>
          <Source href={sources.workflow}>{c.importing.sourceLabel}</Source>
          <p className="minimax-guide-note">{c.importing.note}</p>
        </section>

        <section className="minimax-section" id="key-parameters">
          <h2>{c.parameters.heading}</h2>
          <p className="minimax-section-intro">{c.parameters.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table">
            <thead><tr>{c.parameters.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.parameters.rows.map((row) => <tr key={row.item}><th scope="row">{row.item}</th><td>{row.value}</td><td>{row.effect}</td></tr>)}</tbody>
          </table></div>
          <Source href={sources.overview}>{c.parameters.sourceLabel}</Source>
        </section>

        <section className="minimax-section" id="troubleshooting">
          <h2>{c.troubleshooting.heading}</h2>
          <p className="minimax-section-intro">{c.troubleshooting.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table minimax-guide-troubleshooting">
            <thead><tr>{c.troubleshooting.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.troubleshooting.rows.map((row) => <tr key={row.symptom}><th scope="row">{row.symptom}</th><td>{row.check}</td><td>{row.action}<Source href={row.source}>{c.troubleshooting.sourceLabel}</Source></td></tr>)}</tbody>
          </table></div>
        </section>

        <section className="minimax-section" id="h31-availability">
          <h2>{c.availability.heading}</h2>
          <p className="minimax-section-intro">{c.availability.text}</p>
          <Source href={sources.officialUpdates}>{c.availability.sourceLabel}</Source>
        </section>

        <section className="minimax-section minimax-faq-section" id="faq">
          <h2>{c.faq.heading}</h2>
          <div className="minimax-faq-list">{c.faq.items.map((faq, index) => <details key={faq.question} className="minimax-faq" open={index === 0}><summary><h3>{faq.question}</h3><ChevronDown size={17} aria-hidden="true" /></summary><div><p>{faq.answer}</p></div></details>)}</div>
        </section>
        <p className="minimax-return-link">{c.closing.lead} <Link href="/#generator">{c.closing.link}</Link> {c.closing.tail}</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </article>
  );
}
