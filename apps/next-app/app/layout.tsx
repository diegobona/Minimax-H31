import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
import { DEFAULT_OG_IMAGE, homeContent } from '@/content/home';
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
  openGraph: { images: [DEFAULT_OG_IMAGE] },
  icons: {
    icon: [
      { url: '/brand/favicon.svg?v=3ebd36e3', type: 'image/svg+xml', sizes: 'any' },
      { url: '/favicon-32x32.png?v=3ebd36e3', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png?v=3ebd36e3', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico?v=3ebd36e3',
  },
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
                <span className="minimax-wordmark-copy"><strong>{site.wordmark}</strong></span>
              </Link>
              <nav aria-label={site.navigationLabel}>
                {site.navigation.filter((entry) => entry.published).map((entry) => (
                  <Link key={entry.href} href={entry.href}>{entry.label}</Link>
                ))}
              </nav>
            </div>
          </header>
          <main id="main-content">{children}</main>
          <footer className="minimax-footer">
            <div className="minimax-container minimax-footer-inner">
              <p className="minimax-disclaimer">{site.disclaimer}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
