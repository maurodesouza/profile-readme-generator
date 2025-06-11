import { CONSTANTS } from '@constants';
import { config } from 'config';
import type { MetadataRoute } from 'next';

import fs from 'node:fs';
import path from 'node:path';

const POSTS_DIR = path.join(process.cwd(), 'posts');

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
  const slugs = fs.readdirSync(POSTS_DIR);

  const basePath = config.general.urls.app;
  const today = new Date();

  const postsMap = slugs.map(slug => {
    return {
      url: `${basePath}/blog/${slug}`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: populateAlternates(basePath, `/blog/${slug}`),
    };
  }) as MetadataRoute.Sitemap;

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
    ...postsMap,
  ];
}
