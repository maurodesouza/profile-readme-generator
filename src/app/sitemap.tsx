import { config } from '#/config';
import { routing } from '#/i18n/routing';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const basePath = config.general.urls.app;
  const today = new Date();
  const localePrefix = `/${routing.defaultLocale}`;

  return [
    {
      url: `${basePath}${localePrefix}`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 1,
      images: [`${basePath}/assets/app.png`],
    },
    {
      url: `${basePath}${localePrefix}/result`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
      images: [`${basePath}/assets/app.png`],
    },
    {
      url: `${basePath}${localePrefix}/privacy-policy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
      images: [`${basePath}/assets/app.png`],
    },
  ];
}
