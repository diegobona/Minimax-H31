import type { MetadataRoute } from 'next';
import { HOME_UPDATED } from '@/content/home';

export const sitemapAllowlist = [
  '/',
  '/minimax-h3.1-comfyui',
  '/minimax-h3.1-max',
  '/minimax-h3.1-pricing',
  '/minimax-h3.1-release-date',
] as const;

const publishedPaths: ReadonlySet<string> = new Set(['/', '/minimax-h3.1-comfyui', '/minimax-h3.1-max', '/minimax-h3.1-pricing']);

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapAllowlist.filter((path) => publishedPaths.has(path)).map((path) => ({
    url: `https://minimax-h31.com${path === '/' ? '/' : path}`,
    lastModified: new Date(`${HOME_UPDATED}T00:00:00Z`),
  }));
}
