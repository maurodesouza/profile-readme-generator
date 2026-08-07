import 'styles/global.css';
import 'styles/markdown-theme.css';
import 'styles/prism-syntax-theme.css';

import 'features/text/text-styles.css';

import type { Metadata, Viewport } from 'next';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

import { config } from '#/config';
import { Handles } from '#/components/handles';
import { Modal } from '#/components/molecules/modal';
import { Features } from '#/features';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const title = t('title');
  const description = t('description');

  return {
    metadataBase: new URL(config.general.urls.app),
    title,
    description,
    authors: [{ name: t('author') }],
    keywords: t.raw('keywords') as string[],
    robots: {
      index: true,
      follow: false,
    },
    manifest: '/manifest.json',
    icons: {
      icon: '/assets/icon-16.png',
      shortcut: '/assets/icon-16.png',
      apple: '/assets/icon-180.png',
    },
    openGraph: {
      type: 'website',
      title,
      description,
      siteName: title,
      images: '/assets/app.png',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: '/assets/app.png',
      creator: 'https://github.com/maurodesouza',
    },
    verification: {
      google: 'nH_oO8Fxc76PZpqDg9y4loKj8DNPDL84Zz0zAKgAaSA',
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#58a6ff',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html className="theme-dark" lang={locale}>
      <body className="tone palette-brand base-1">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Handles />

          {children}

          <Modal />
          <Features />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
