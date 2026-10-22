import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Info } from 'lucide-react';
import { VideoWorkspace } from '@/components/tool/video-workspace';
import { HOME_UPDATED, OFFICIAL_UNKNOWN, homeContent as c, homeSources } from '@/content/home';

export const metadata: Metadata = {
  title: { absolute: c.metadata.title },
  description: c.metadata.description,
  alternates: { canonical: '/' },
  openGraph: { title: c.metadata.title, description: c.metadata.description, url: '/', type: 'website' },
};

function UpdatedTime() {
  return <time className="minimax-inline-time" dateTime={HOME_UPDATED}>{HOME_UPDATED}</time>;
}

function RecordedText({ text }: { text: string }) {
  if (!text.includes(OFFICIAL_UNKNOWN)) return <>{text}</>;
  const [before, after] = text.split(OFFICIAL_UNKNOWN);
  return <>{before}{OFFICIAL_UNKNOWN} <UpdatedTime />{after}</>;
}

function SectionHeading({ label, heading }: { label: string; heading: string }) {
  return <div className="minimax-section-heading"><p className="minimax-eyebrow">{label}</p><h2>{heading}</h2></div>;
}

export default async function HomePage({ searchParams }: { searchParams: Promise<{ example?: string }> }) {
  const query = await searchParams;
  const selectedExample = c.tool.examples.find((example) => example.id === query.example);
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map(({ question, answer }) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer.replace(OFFICIAL_UNKNOWN, `${OFFICIAL_UNKNOWN} ${HOME_UPDATED}`),
      },
    })),
  };

  return (
    <article className="minimax-home">
      <div className="minimax-container minimax-hero">
        <div className="minimax-hero-topline"><p className="minimax-eyebrow">{c.hero.eyebrow}</p></div>
        <h1>{c.hero.heading}</h1>
        <p className="minimax-hero-description">{c.hero.introduction}</p>
        <span className="minimax-model-badge"><span aria-hidden="true" />{c.hero.badge}</span>
        <div id="generator" className="minimax-generator-anchor">
          <div className="minimax-workspace">
            <VideoWorkspace copy={c.tool} initialExample={selectedExample} />
            <section className="minimax-examples" aria-label={c.tool.previewHeading}>
              <div className="minimax-examples-heading"><p>{c.tool.previewHeading}</p></div>
              <div className="minimax-example-grid">{c.tool.examples.map((example) => <div className="minimax-example-card" key={example.id}>
                <div className="minimax-example-art"><Image src={example.image} alt={example.alt} width={640} height={760} priority /><span>{example.category}</span><span className="minimax-example-time">{example.duration}s</span></div>
                <div className="minimax-example-caption"><span className="minimax-eyebrow">{c.tool.previewLabel}</span><h3>{example.title}</h3><Link href={`/?example=${example.id}#generator`} scroll={false}>{c.tool.usePrompt}<ArrowUpRight size={14} aria-hidden="true" /></Link></div>
              </div>)}</div>
              <p className="minimax-example-disclosure">{c.tool.previewDisclosure}</p>
            </section>
          </div>
          <p className="minimax-model-explanation"><Info size={16} aria-hidden="true" /><span>{c.hero.explanation}</span></p>
        </div>
      </div>

      <div className="minimax-container minimax-editorial">
        <section id="what-this-tool-does" className="minimax-section minimax-overview">
          <SectionHeading label={c.overview.label} heading={c.overview.heading} />
          <div className="minimax-prose"><p>{c.overview.text}</p><p>{c.overview.linkLead} <Link href="/#generator">{c.overview.linkText}</Link> {c.overview.linkTail}</p></div>
        </section>

        <section className="minimax-section" id="capabilities">
          <SectionHeading label={c.capabilities.label} heading={c.capabilities.heading} />
          <p className="minimax-section-intro">{c.capabilities.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table"><caption className="sr-only">{c.capabilities.heading}</caption>
            <thead><tr>{c.capabilities.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
            <tbody>{c.capabilities.rows.map((row) => <tr key={row.item}><th scope="row">{row.item}</th><td>{row.value}</td><td><a href={row.source} target="_blank" rel="noreferrer">{c.capabilities.sourceLabel}<ArrowUpRight size={12} aria-hidden="true" /></a></td></tr>)}</tbody>
          </table></div>
          <p className="minimax-table-note"><Info size={15} aria-hidden="true" /><span>{c.capabilities.note}</span></p>
        </section>

        <section className="minimax-section" id="availability">
          <SectionHeading label={c.availability.label} heading={c.availability.heading} />
          <p className="minimax-section-intro">{c.availability.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table"><caption className="sr-only">{c.availability.heading}</caption>
            <thead><tr>{c.availability.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
            <tbody>{c.availability.rows.map((row) => <tr key={row.version}><th scope="row">{row.version}</th><td><RecordedText text={row.release} /></td><td><a href={row.source} target="_blank" rel="noreferrer">{row.label}<ArrowUpRight size={12} aria-hidden="true" /></a></td></tr>)}</tbody>
          </table></div>
          <div className="minimax-availability-note"><div className="minimax-availability-check"><Check size={16} aria-hidden="true" /><p>{c.availability.updatedLabel} <UpdatedTime /></p></div><p><strong>{c.availability.differenceLabel}:</strong> {OFFICIAL_UNKNOWN} <UpdatedTime /></p><p>{c.availability.note}</p><a href={homeSources.official} target="_blank" rel="noreferrer">{c.availability.officialLink}<ArrowUpRight size={14} aria-hidden="true" /></a></div>
        </section>

        <section className="minimax-section" id="prompt-guide">
          <SectionHeading label={c.prompting.label} heading={c.prompting.heading} />
          <p className="minimax-section-intro">{c.prompting.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table minimax-prompt-table"><caption className="sr-only">{c.prompting.heading}</caption>
            <thead><tr>{c.prompting.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
            <tbody>{c.prompting.examples.map((example) => <tr key={example.intent}><th scope="row">{example.intent}</th><td>{example.weak}</td><td>{example.strong}</td></tr>)}</tbody>
          </table></div>
          <p className="minimax-section-intro minimax-after-table">{c.prompting.conclusion}</p>
        </section>

        <section className="minimax-section" id="use-cases">
          <SectionHeading label={c.useCases.label} heading={c.useCases.heading} />
          <p className="minimax-section-intro">{c.useCases.introduction}</p>
          <div className="minimax-use-case-grid">{c.useCases.items.map((item) => <div className="minimax-use-case" key={item.number}><span className="minimax-case-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
        </section>

        <section className="minimax-section minimax-faq-section" id="faq">
          <SectionHeading label={c.faq.label} heading={c.faq.heading} />
          <p className="minimax-section-intro">{c.faq.introduction}</p>
          <div className="minimax-faq-list">{c.faq.items.map((faq, index) => <details key={faq.question} className="minimax-faq" open={index === 0}><summary><h3>{faq.question}</h3><ChevronDown size={17} aria-hidden="true" /></summary><div><p><RecordedText text={faq.answer} /></p>{'source' in faq && <a className="minimax-faq-source" href={faq.source} target="_blank" rel="noreferrer">{c.site.sourceLabel}<ArrowUpRight size={12} aria-hidden="true" /></a>}</div></details>)}</div>
        </section>

        <section className="minimax-section minimax-resources" id="resources">
          <SectionHeading label={c.resources.label} heading={c.resources.heading} />
          <p className="minimax-section-intro">{c.resources.description}</p>
          <div className="minimax-resource-grid">{c.resources.items.map((item) => {
            const card = <><div><h3>{item.title}</h3><ArrowUpRight size={17} aria-hidden="true" /></div><p>{item.description}</p><span>{item.published ? c.resources.openLabel : c.resources.status}</span></>;
            return item.published ? <Link key={item.href} href={item.href} className="minimax-resource-card minimax-resource-card-link">{card}</Link> : <div key={item.href} className="minimax-resource-card">{card}</div>;
          })}</div>
          <p className="minimax-return-link">{c.resources.returnLead} <Link href="/#generator">{c.resources.returnLink}<ArrowRight size={14} aria-hidden="true" /></Link> {c.resources.returnTail}</p>
        </section>
        <p className="minimax-last-updated">{c.lastUpdatedLabel} <time dateTime={HOME_UPDATED}>{HOME_UPDATED}</time></p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </article>
  );
}
