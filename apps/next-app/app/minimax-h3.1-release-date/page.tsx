import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';
import { RELEASE_UPDATED, releaseContent as c } from '@/content/release-date';
import { DEFAULT_OG_IMAGE } from '@/content/home';

export const metadata: Metadata = {
  title: { absolute: c.metadata.title },
  description: c.metadata.description,
  alternates: { canonical: '/minimax-h3.1-release-date' },
  openGraph: { title: c.metadata.title, description: c.metadata.description, url: '/minimax-h3.1-release-date', type: 'article', publishedTime: '2026-10-22', modifiedTime: RELEASE_UPDATED, images: [DEFAULT_OG_IMAGE] },
};

type Reference = { label: string; href: string; unavailable?: boolean };

function sourceCheckLabel(references: readonly Reference[]) {
  return references.some((reference) => reference.unavailable) ? c.evidence.partial : c.evidence.checked;
}

function UpdatedTime() {
  return <time className="minimax-inline-time" dateTime={RELEASE_UPDATED}>{RELEASE_UPDATED}</time>;
}

function RecordedText({ text }: { text: string }) {
  return <>{text}</>;
}

function Evidence({ references }: { references: readonly Reference[] }) {
  return <div className="minimax-release-evidence">{references.map((reference) => reference.href.startsWith('https:') ? <a className="minimax-guide-source" key={reference.href} href={reference.href} target="_blank" rel="noreferrer">{reference.label}{reference.unavailable && <> · {c.evidence.unavailable}</>}<ArrowUpRight size={12} aria-hidden="true" /></a> : <Link className="minimax-guide-source" key={reference.href} href={reference.href}>{reference.label}</Link>)}<span>{sourceCheckLabel(references)} <UpdatedTime /></span></div>;
}

export default function ReleaseDatePage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map(({ question, answer, references }) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: `${answer} ${sourceCheckLabel(references)}: ${RELEASE_UPDATED}. ${c.evidence.source}: ${references.map((reference: Reference) => `${reference.href.startsWith('https:') ? reference.href : `https://minimax-h31.com${reference.href.startsWith('#') ? '/minimax-h3.1-release-date' : ''}${reference.href}`}${reference.unavailable ? ` (${c.evidence.unavailable})` : ''}`).join(', ')}` },
    })),
  };

  return (
    <article className="minimax-home minimax-guide minimax-release-guide">
      <div className="minimax-container minimax-editorial minimax-release-intro">
        <p className="minimax-eyebrow">{c.hero.label}</p>
        <h1>{c.hero.heading}</h1>
        <p className="minimax-guide-lead">{c.hero.introduction}</p>
        <Evidence references={c.hero.references} />
        <div className="minimax-release-status"><span>{c.hero.statusLabel}</span><p><RecordedText text={c.hero.status} /></p></div>
        <p className="minimax-guide-tool-link">{c.hero.linkLead} <Link href="/#generator">{c.hero.link}</Link> {c.hero.linkTail}</p>
        <div className="minimax-guide-actions"><a href="#release-history" className="minimax-guide-primary">{c.hero.historyLink}<ArrowDown size={15} aria-hidden="true" /></a><p className="minimax-release-updated">{c.evidence.updated} <UpdatedTime /></p></div>
      </div>

      <div className="minimax-container minimax-editorial">
        <section className="minimax-section" id="release-history">
          <h2>{c.history.heading}</h2>
          <p className="minimax-section-intro">{c.history.introduction}</p>
          <Evidence references={c.history.references} />
          <div className="minimax-table-scroll"><table className="minimax-table minimax-release-history">
            <thead><tr>{c.history.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.history.rows.map((row) => <tr key={row.model}><th scope="row">{row.model}</th><td><time dateTime={row.date}>{row.date}</time></td><td>{row.line}</td><td><Evidence references={[row.reference]} /></td></tr>)}</tbody>
          </table></div>
        </section>

        <section className="minimax-section" id="confirmed-context">
          <h2>{c.context.heading}</h2>
          <p className="minimax-section-intro">{c.context.introduction}</p>
          <Evidence references={c.context.references} />
          <div className="minimax-release-facts">{c.context.facts.map((fact) => <div className="minimax-release-fact" key={fact.title}><h3>{fact.title}</h3><p><RecordedText text={fact.text} /></p><Evidence references={fact.references} /></div>)}</div>
        </section>

        <section className="minimax-section" id="announcement-channels">
          <h2>{c.channels.heading}</h2>
          <p className="minimax-section-intro"><RecordedText text={c.channels.introduction} /></p>
          <Evidence references={c.channels.references} />
          <div className="minimax-release-channels">{c.channels.items.map((channel) => <div className="minimax-release-channel" key={channel.title}><h3>{channel.title}</h3><p>{channel.text}</p><Evidence references={[channel.reference]} /></div>)}</div>
        </section>

        <section className="minimax-section" id="site-updates">
          <h2>{c.changes.heading}</h2>
          {c.changes.paragraphs.map((paragraph) => <p className="minimax-section-intro" key={paragraph}>{paragraph}</p>)}
          <p className="minimax-guide-note">{c.changes.target}</p>
        </section>

        <section className="minimax-section minimax-faq-section" id="faq">
          <h2>{c.faq.heading}</h2>
          <div className="minimax-faq-list">{c.faq.items.map((faq, index) => <details className="minimax-faq" key={faq.question} open={index === 0}><summary><h3>{faq.question}</h3><ChevronDown size={17} aria-hidden="true" /></summary><div><p><RecordedText text={faq.answer} /></p><Evidence references={faq.references} /></div></details>)}</div>
        </section>
        <p className="minimax-return-link">{c.closing.lead} <Link href="/#generator">{c.closing.link}</Link> {c.closing.tail}</p>
        <p className="minimax-last-updated">{c.evidence.updated} <UpdatedTime /></p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </article>
  );
}
