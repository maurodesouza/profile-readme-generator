import { config } from '#/config';
import type { MetadataRoute } from 'next';

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
    },
    {
      url: `${basePath}/result`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
      images: [`${basePath}/assets/app.png`],
    },
    {
      url: `${basePath}/privacy-policy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
      images: [`${basePath}/assets/app.png`],
    },
  ];
}
