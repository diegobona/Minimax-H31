import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
import { ArrowUpRight } from 'lucide-react';
import { homeContent, homeSources } from '@/content/home';
import './globals.css';

const sans = localFont({
  src: '../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});
const mono = localFont({
  src: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://minimax-h31.com'),
  icons: { icon: '/brand/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const site = homeContent.site;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased`}>
        <div className="minimax-site">
          <a href="#main-content" className="minimax-skip-link">{site.skip}</a>
          <header className="minimax-header">
            <div className="minimax-container minimax-header-inner">
              <Link href="/" className="minimax-wordmark" aria-label={site.name}>
                <Image className="minimax-mark" src="/brand/video-mark.svg" alt="" width={44} height={44} priority />
                <span className="minimax-wordmark-copy"><strong>{site.wordmark}</strong><span>{site.name}.com</span></span>
              </Link>
              <nav aria-label={site.navigationLabel}>
                {site.navigation.filter((entry) => entry.published).map((entry) => (
                  <Link key={entry.href} href={entry.href}>{entry.label}</Link>
                ))}
              </nav>
              <a className="minimax-docs-link" href={homeSources.api} target="_blank" rel="noreferrer">
                {site.documentation}<ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </header>
          <main id="main-content">{children}</main>
          <footer className="minimax-footer">
            <div className="minimax-container minimax-footer-inner">
              <div><Link className="minimax-footer-brand" href="/">{site.name}.com</Link><p>{site.footerNote}</p></div>
              <p className="minimax-disclaimer">{site.disclaimer}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
