import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://toolipie.com';
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/use-cases`, priority: 0.7 },
    { url: `${base}/how-it-works`, priority: 0.7 },
    { url: `${base}/contribute`, priority: 0.6 },
    { url: `${base}/about`, priority: 0.5 },
  ];
}
