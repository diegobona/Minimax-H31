import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/result/', '/api/', '/en/admin/', '/zh-CN/admin/'] },
    sitemap: 'https://minimax-h31.com/sitemap.xml',
  };
}
