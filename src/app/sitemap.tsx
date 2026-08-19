import { config } from '#/config';
import { routing } from '#/i18n/routing';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const basePath = config.general.urls.app;
  const today = new Date();

  const pathnames = ['', '/result', '/privacy-policy'];

  return routing.locales.flatMap(locale => {
    const isDefault = locale === routing.defaultLocale;

    return pathnames.map(pathname => ({
      url: `${basePath}/${locale}${pathname}`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: isDefault && pathname === '' ? 1 : 0.2,
      images: [`${basePath}/assets/app.png`],
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map(loc => [loc, `${basePath}/${loc}${pathname}`])
        ),
      },
    }));
  });
}
