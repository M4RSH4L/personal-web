import type { MetadataRoute } from 'next';
import { getCanonicalUrl } from '../lib/seo-config';
import { SERVICES_DATA } from '../data/services';
import { ARTICLES_DATA } from '../data/articles';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: getCanonicalUrl('/'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: getCanonicalUrl('/servicios'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: getCanonicalUrl('/sobre-mi'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: getCanonicalUrl('/recursos'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: getCanonicalUrl(`/servicios/${service.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => ({
    url: getCanonicalUrl(`/recursos/${article.slug}`),
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
