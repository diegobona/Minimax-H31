import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Button } from '@libs/react-shared/ui/button';
import { pricingContent as c } from '@/content/pricing';
import { DEFAULT_OG_IMAGE } from '@/content/home';

export const metadata: Metadata = {
  title: { absolute: c.metadata.title },
  description: c.metadata.description,
  alternates: { canonical: '/minimax-h3.1-pricing' },
  openGraph: { title: c.metadata.title, description: c.metadata.description, url: '/minimax-h3.1-pricing', type: 'website', images: [DEFAULT_OG_IMAGE] },
};

function RecordedText({ text }: { text: string }) {
  return <>{text}</>;
}

export default function PricingPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  };

  return (
    <article className="minimax-home minimax-guide minimax-pricing-guide">
      <div className="minimax-container minimax-editorial minimax-pricing-intro">
        <p className="minimax-eyebrow">{c.hero.label}</p>
        <h1>{c.hero.heading}</h1>
        <p className="minimax-guide-lead">{c.hero.introduction}</p>
        <p className="minimax-guide-tool-link">{c.hero.linkLead} <Link href="/#generator">{c.hero.link}</Link> {c.hero.linkTail}</p>
        <div className="minimax-guide-actions"><a href="#credit-packs" className="minimax-guide-primary">{c.hero.compare}<ArrowDown size={15} aria-hidden="true" /></a><span className="minimax-pricing-status">{c.hero.status}</span></div>
      </div>

      <div className="minimax-container minimax-editorial">
        <section className="minimax-section" id="credit-packs">
          <h2>{c.packs.heading}</h2>
          <p className="minimax-section-intro">{c.packs.introduction}</p>
          <div className="minimax-credit-packs">{c.packs.items.map((pack) => <div className={`minimax-credit-pack${pack.featured ? ' minimax-credit-pack-featured' : ''}`} id={`pack-${pack.id}`} key={pack.id}>
            <div className="minimax-pack-heading"><h3>{pack.name}</h3>{pack.badge && <span className="minimax-pack-badge">{pack.badge}</span>}</div>
            <p className="minimax-pack-price"><code>{pack.price}</code></p>
            <p className="minimax-pack-unit">{c.packs.priceUnit}</p>
            <p className="minimax-pack-balance"><strong>{pack.credits}</strong> {c.packs.creditsLabel}</p>
            <p className="minimax-pack-description">{pack.description}</p>
            <Button className="minimax-pack-button" disabled title={c.packs.buttonExplanation}>{c.packs.button}</Button>
          </div>)}</div>
          <div className="minimax-table-scroll"><table className="minimax-table minimax-pack-table">
            <thead><tr>{c.packs.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.packs.rows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody>
          </table></div>
          <p className="minimax-guide-note">{c.packs.policy}</p>
          <p className="minimax-guide-note">{c.packs.estimate}</p>
        </section>

        <section className="minimax-section" id="cost-per-video">
          <h2>{c.costs.heading}</h2>
          <p className="minimax-section-intro">{c.costs.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table minimax-cost-table">
            <thead><tr>{c.costs.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.costs.rows.map((row) => <tr key={`${row.resolution}-${row.duration}`}><th scope="row">{row.resolution}</th><td>{row.duration}</td><td><code>{row.duration} {c.costs.creditFormula}</code></td><td><code>{c.costs.cashFormula}</code></td></tr>)}</tbody>
          </table></div>
          <p className="minimax-guide-note">{c.costs.explanation}</p>
          <a className="minimax-guide-source" href={c.costs.sourceHref} target="_blank" rel="noreferrer">{c.costs.source}<ArrowUpRight size={12} aria-hidden="true" /></a>
          <p className="minimax-guide-note">{c.costs.comparisonLead} <Link href="/minimax-h3.1-max">{c.costs.comparisonLink}</Link> {c.costs.comparisonTail}</p>
        </section>

        <section className="minimax-section" id="free-credits">
          <h2>{c.free.heading}</h2>
          <p className="minimax-section-intro">{c.free.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table">
            <thead><tr>{c.free.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.free.rows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.credits}</td><td>{row.videos}</td><td>{row.status}</td></tr>)}</tbody>
          </table></div>
          <p className="minimax-guide-note">{c.free.note}</p>
          <p className="minimax-guide-note">{c.free.detailLead} {c.free.published ? <Link href={c.free.href}>{c.free.detailLink}</Link> : <span className="minimax-pending-link" role="link" aria-disabled="true" data-planned-href={c.free.href}>{c.free.detailLink}<span>{c.free.status}</span></span>} {c.free.detailTail}</p>
        </section>

        <section className="minimax-section" id="official-pricing">
          <h2>{c.comparison.heading}</h2>
          <p className="minimax-section-intro">{c.comparison.introduction}</p>
          <div className="minimax-table-scroll"><table className="minimax-table minimax-pricing-comparison">
            <thead><tr>{c.comparison.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>{c.comparison.rows.map((row) => <tr key={row.service}><th scope="row">{row.service}</th><td>{row.model}</td><td>{row.compare}<a className="minimax-guide-source" href={row.href} {...(row.href.startsWith('https:') ? { target: '_blank', rel: 'nofollow noopener' } : {})}>{row.source}<ArrowUpRight size={12} aria-hidden="true" /></a></td><td><code>{row.price}</code></td></tr>)}</tbody>
          </table></div>
          <p className="minimax-guide-note">{c.comparison.explanation}</p>
        </section>

        <section className="minimax-section minimax-faq-section" id="faq">
          <h2>{c.faq.heading}</h2>
          <div className="minimax-faq-list">{c.faq.items.map((faq, index) => <details className="minimax-faq" key={faq.question} open={index === 0}><summary><h3>{faq.question}</h3><ChevronDown size={17} aria-hidden="true" /></summary><div><p><RecordedText text={faq.answer} /></p></div></details>)}</div>
        </section>
        <p className="minimax-return-link">{c.closing.lead} <Link href="/#generator">{c.closing.link}</Link> {c.closing.tail}</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </article>
  );
}
