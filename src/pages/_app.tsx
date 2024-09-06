import React, { MouseEvent, useEffect, useState, useRef } from 'react';
import Head from 'next/head';

import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { CanvasProvider, ExtensionsProvider, SettingsProvider } from 'contexts';

import { config, events } from 'app';
import { ContextMenu, Modal } from 'components';

import { Features } from 'features';
import { themes, GlobalStyles } from 'styles';
import { Events } from 'types';

const App = ({ Component, pageProps }: AppProps) => {
  const appUrl = config.general.urls.app;

  const [currTheme, setCurrTheme] = useState(themes['dark']);
  const isTransition = useRef(false);

  const handlePreventRightClick = (e: MouseEvent) => {
    e.preventDefault();

    events.contextmenu.close();
  };

  const handleSetTheme = async(e: CustomEvent) => {
    document.querySelectorAll(`ul`).forEach(el => el.classList.add('no-animate'));
    if(!isTransition.current) {
      isTransition.current = true;
      setCurrTheme(themes[e.detail]);
      document.body.animate([{}], { duration: 450, iterations: 1, direction: 'alternate'}); 
      Promise.all(document.body.getAnimations().map((animation) => animation.finished)).then(async() => {
        return new Promise((resolve) => 
          resolve(document.querySelectorAll(`ul`).forEach(el => el.classList.remove('no-animate')))
        ).then(() => isTransition.current = false)
      });
  }}

  useEffect(() => {
    events.on('contextmenu', handlePreventRightClick);
    events.on(Events.APP_SET_THEME, handleSetTheme);

    return () => {
      events.on('contextmenu', handlePreventRightClick);
      events.off(Events.APP_SET_THEME, handleSetTheme);
    };
  }, []);

  const title = 'Profile Readme Generator';
  const description =
    'Beautify your github profile with this amazing tool, creating the readme your way in a simple and fast way! The best profile readme generator you will find!';

  return (
    <ThemeProvider theme={currTheme}>
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

      <ExtensionsProvider>
        <CanvasProvider>
          <SettingsProvider>
            <Component {...pageProps} />

            <ContextMenu />
            <Modal />
            <Features />

            <GlobalStyles />
          </SettingsProvider>
        </CanvasProvider>
      </ExtensionsProvider>
    </ThemeProvider>
  );
};

export default App;
