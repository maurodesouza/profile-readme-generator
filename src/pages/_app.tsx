import 'styles/global.css';
import 'styles/markdown-theme.css';
import 'styles/prism-syntax-theme.css';

import 'features/text/text-styles.css';

import Head from 'next/head';

import { AppProps } from 'next/app';

import { CanvasProvider, ExtensionsProvider, SettingsProvider } from 'contexts';

import { config } from 'config';
import { Modal } from 'components/ui/primitives/compound/modal';
import { GlobalHandlers } from 'components/global-handlers';

import { Features } from 'features';

const App = ({ Component, pageProps }: AppProps) => {
  const appUrl = config.general.urls.app;

  const title = 'Profile Readme Generator';
  const description =
    'Beautify your github profile with this amazing tool, creating the readme your way in a simple and fast way! The best profile readme generator you will find!';

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="shortcut icon" href="/assets/icon-16.png" />
        <link rel="apple-touch-icon" href="/assets/icon-180.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="google-site-verification"
          content="nH_oO8Fxc76PZpqDg9y4loKj8DNPDL84Zz0zAKgAaSA"
        />

        <meta
          name="ezoic-site-verification"
          content="Dg8elSjcV3Klaq5f7PSaPVXXnstRgH"
        />

        <meta
          name="impact-site-verification"
          value="3509b453-ca9c-40fd-ac07-f30cdd77c31e"
        />

        <meta name="author" content="Mauro de Souza" />
        <meta name="robots" content="index,nofollow" />
        <meta name="theme-color" content="#58a6ff" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="github, github profile, github profile readme, readme generator, profile readme generator, github profile readme generator"
        />

        {/* Open Graph */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="/assets/app.png" />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={appUrl} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/assets/app.png" />
        <meta name="twitter:site" content={appUrl} />
        <meta
          name="twitter:creator"
          content="https://github.com/maurodesouza"
        />
      </Head>

      <GlobalHandlers />

      <ExtensionsProvider>
        <CanvasProvider>
          <SettingsProvider>
            <Component {...pageProps} />

            <Modal />
            <Features />
          </SettingsProvider>
        </CanvasProvider>
      </ExtensionsProvider>
    </>
  );
};

export default App;
