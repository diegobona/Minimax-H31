import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';
import { MAX_UPDATED, maxContent as c, maxSources as sources } from '@/content/max';
import { DEFAULT_OG_IMAGE, OFFICIAL_UNKNOWN } from '@/content/home';

export const metadata: Metadata = {
  title: { absolute: c.metadata.title },
  description: c.metadata.description,
  alternates: { canonical: '/minimax-h3.1-max' },
  openGraph: { title: c.metadata.title, description: c.metadata.description, url: '/minimax-h3.1-max', type: 'article', images: [DEFAULT_OG_IMAGE] },
};

function UpdatedTime() {
  return <time className="minimax-inline-time" dateTime={MAX_UPDATED}>{MAX_UPDATED}</time>;
}

function RecordedText({ text }: { text: string }) {
  if (!text.includes(OFFICIAL_UNKNOWN)) return <>{text}</>;
  const [before, after] = text.split(OFFICIAL_UNKNOWN);
  return <>{before}{OFFICIAL_UNKNOWN} <UpdatedTime />{after}</>;
}

function Source({ href, children = c.closing.source }: { href: string; children?: React.ReactNode }) {
  return <a className="minimax-guide-source" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={12} aria-hidden="true" /></a>;
}

function PricingLink() {
  return c.pricing.published ? <Link href={c.pricing.href}>{c.pricing.label}</Link> : <span className="minimax-pending-link" role="link" aria-disabled="true" data-planned-href={c.pricing.href}>{c.pricing.label}<span>{c.pricing.status}</span></span>;
}

export default function MaxPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer.replace(OFFICIAL_UNKNOWN, `${OFFICIAL_UNKNOWN} ${MAX_UPDATED}`) } })),
  };

  return (
    <article className="minimax-home minimax-guide minimax-max-guide">
      <div className="minimax-container minimax-editorial minimax-max-intro">
        <p className="minimax-eyebrow">{c.hero.label}</p>
        <h1>{c.hero.heading}</h1>
        <p className="minimax-guide-lead">{c.hero.introduction}</p>
        <p className="minimax-guide-tool-link">{c.hero.linkLead} <Link href="/#generator">{c.hero.link}</Link> {c.hero.linkTail}</p>
        <div className="minimax-guide-actions"><a href="#comparison" className="minimax-guide-primary">{c.hero.compare}<ArrowDown size={15} aria-hidden="true" /></a><span className="minimax-max-status">{c.hero.status}</span></div>
        <p className="minimax-max-reviewed">{c.hero.checked} <UpdatedTime /></p>
      </div>

      <div className="minimax-container minimax-editorial">
        <section className="minimax-section" id="what-max-means">
          <h2>{c.meaning.heading}</h2>
          {c.meaning.paragraphs.map((text) => <p className="minimax-section-intro" key={text}>{text}</p>)}
          <div className="minimax-max-sources"><Source href={sources.falLaunch}>{c.meaning.sourceLabel}</Source><Source href={sources.minimax} /></div>
          <p className="minimax-guide-note"><strong>{c.meaning.pendingLead}</strong> <RecordedText text={c.meaning.pending} /></p>
        </section>

        <section className="minimax-section" id="comparison">
          <h2>{c.comparison.heading}</h2>
          <p className="minimax-section-intro">{c.comparison.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table minimax-max-comparison">
            <thead><tr>{c.comparison.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.comparison.rows.map((row) => <tr key={row.item}><th scope="row">{row.item}</th><td><RecordedText text={row.max.text} /><Source href={row.max.source} /></td><td><RecordedText text={row.h3.text} /><Source href={row.h3.source} /></td></tr>)}</tbody>
          </table></div>
          <p className="minimax-guide-note">{c.comparison.note}</p>
          <p className="minimax-guide-note">{c.comparison.pricingLead} <PricingLink /> {c.comparison.pricingTail}</p>
        </section>

        <section className="minimax-section" id="h31-max-status">
          <h2>{c.availability.heading}</h2>
          <p className="minimax-guide-availability"><RecordedText text={c.availability.status} /></p>
          <p className="minimax-section-intro">{c.availability.text}</p>
          <Source href={sources.updates}>{c.availability.sourceLabel}</Source>
        </section>

        <section className="minimax-section" id="when-max-is-worth-it">
          <h2>{c.scenarios.heading}</h2>
          <p className="minimax-section-intro">{c.scenarios.introduction}</p>
          <div className="minimax-max-scenarios">{c.scenarios.items.map((item, index) => <div className="minimax-use-case" key={item.title}><span className="minimax-case-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
        </section>

        <section className="minimax-section" id="cost-per-video">
          <h2>{c.costs.heading}</h2>
          <p className="minimax-section-intro">{c.costs.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table">
            <thead><tr>{c.costs.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.costs.rows.map((row) => <tr key={row.model}><th scope="row">{row.model}</th><td><RecordedText text={row.inputs} /></td><td><code>{row.price}</code></td></tr>)}</tbody>
          </table></div>
          <p className="minimax-guide-note">{c.costs.explanation}</p>
          <p className="minimax-guide-note">{c.costs.pricingLead} <PricingLink /> {c.costs.pricingTail}</p>
          <Source href={sources.falPricing}>{c.costs.quoteSource}</Source>
        </section>

        <section className="minimax-section" id="alternatives">
          <h2>{c.alternatives.heading}</h2>
          <p className="minimax-section-intro">{c.alternatives.introduction}</p>
          <div className="minimax-max-alternatives">{c.alternatives.items.map((item) => <div className="minimax-resource-card" key={item.name}><h3><a href={item.href} target="_blank" rel="nofollow noopener">{item.name}<ArrowUpRight size={15} aria-hidden="true" /></a></h3><p>{item.text}</p></div>)}</div>
        </section>

        <section className="minimax-section minimax-faq-section" id="faq">
          <h2>{c.faq.heading}</h2>
          <div className="minimax-faq-list">{c.faq.items.map((faq, index) => <details className="minimax-faq" key={faq.question} open={index === 0}><summary><h3>{faq.question}</h3><ChevronDown size={17} aria-hidden="true" /></summary><div><p><RecordedText text={faq.answer} /></p></div></details>)}</div>
        </section>
        <p className="minimax-return-link">{c.closing.lead} <Link href="/#generator">{c.closing.link}</Link> {c.closing.tail}</p>
        <p className="minimax-last-updated">{c.closing.updated} <UpdatedTime /></p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </article>
  );
}
