import type { MetadataRoute } from 'next';
import { HOME_UPDATED } from '@/content/home';
import { RELEASE_UPDATED } from '@/content/release-date';

export const sitemapAllowlist = [
  '/',
  '/minimax-h3.1-comfyui',
  '/minimax-h3.1-max',
  '/minimax-h3.1-pricing',
  '/minimax-h3.1-release-date',
] as const;

const publishedPaths: ReadonlySet<string> = new Set(sitemapAllowlist);

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapAllowlist.filter((path) => publishedPaths.has(path)).map((path) => ({
    url: `https://minimax-h31.com${path === '/' ? '/' : path}`,
    lastModified: new Date(`${path === '/minimax-h3.1-release-date' ? RELEASE_UPDATED : HOME_UPDATED}T00:00:00Z`),
  }));
}
