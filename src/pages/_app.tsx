import { MouseEvent, useEffect } from 'react';
import Head from 'next/head';

import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { CanvasProvider, SettingsProvider } from 'contexts';

import { config, events } from 'app';
import { ContextMenu, Modal } from 'components';

import { theme, GlobalStyles } from 'styles';

const App = ({ Component, pageProps }: AppProps) => {
  const appUrl = config.general.urls.app;

  const handlePreventRightClick = (e: MouseEvent) => {
    e.preventDefault();

    events.contextmenu.close();
  };

  useEffect(() => {
    events.on('contextmenu', handlePreventRightClick);

    return () => {
      events.on('contextmenu', handlePreventRightClick);
    };
  }, []);

  const title = 'Profile Readme Generator';
  const description =
    'Beautify your github profile with this amazing tool, creating the readme your way in a simple and fast way! The best profile readme generator you will find!';

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>

        <link rel="shortcut icon" href="/assets/icon-16.png" />
        <link rel="apple-touch-icon" href="/assets/icon-180.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="google-site-verification"
          content="nH_oO8Fxc76PZpqDg9y4loKj8DNPDL84Zz0zAKgAaSA"
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

      <CanvasProvider>
        <SettingsProvider>
          <Component {...pageProps} />

          <ContextMenu />
          <Modal />

          <GlobalStyles />
        </SettingsProvider>
      </CanvasProvider>
    </ThemeProvider>
  );
};

export default App;
