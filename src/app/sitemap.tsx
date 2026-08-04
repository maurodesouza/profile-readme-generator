import { CONSTANTS } from '@constants';
import { config } from 'config';
import type { MetadataRoute } from 'next';

function populateAlternates(initialPath: string, finalPath: string) {
  return {
    languages: CONSTANTS.LOCALES.reduce(
      (obj, locale) => {
        obj[locale] = `${initialPath}/${locale}${finalPath}`;

        return obj;
      },
      {} as Record<string, string>
    ),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const basePath = config.general.urls.app;
  const today = new Date();

  return [
    {
      url: basePath,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 1,
      images: [`${basePath}/assets/app.png`],
      alternates: populateAlternates(basePath, ''),
    },
    {
      url: `${basePath}/result`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
      images: [`${basePath}/assets/app.png`],
      alternates: populateAlternates(basePath, '/result'),
    },
    {
      url: `${basePath}/privacy-policy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
      alternates: populateAlternates(basePath, '/privacy-policy'),
    },
    {
      url: `${basePath}/resources/books`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: populateAlternates(basePath, '/resources/books'),
    },
  ];
}
