import 'styles/global.css';
import 'styles/markdown-theme.css';
import 'styles/prism-syntax-theme.css';

import 'features/text/text-styles.css';

import type { Metadata, Viewport } from 'next';

import { config } from '#/config';
import { Handles } from '#/components/handles';
import { Modal } from '#/components/molecules/modal';
import { Features } from '#/features';

const title = 'Profile Readme Generator';
const description =
  'Beautify your github profile with this amazing tool, creating the readme your way in a simple and fast way! The best profile readme generator you will find!';

export const metadata: Metadata = {
  metadataBase: new URL(config.general.urls.app),
  title,
  description,
  authors: [{ name: 'Mauro de Souza' }],
  keywords: [
    'github',
    'github profile',
    'github profile readme',
    'readme generator',
    'profile readme generator',
    'github profile readme generator',
  ],
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

export const viewport: Viewport = {
  themeColor: '#58a6ff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="theme-dark" lang="en">
      <body className="tone palette-brand base-1">
        <Handles />

        {children}

        <Modal />
        <Features />
      </body>
    </html>
  );
}
