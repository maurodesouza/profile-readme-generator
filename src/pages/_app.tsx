import { MouseEvent, useEffect } from 'react';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ContextMenu } from 'components';
import { CanvasProvider } from 'contexts';

import { events } from '@events/index';
import { theme, GlobalStyles } from 'styles';

const App = ({ Component, pageProps }: AppProps) => {
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

  return (
    <ThemeProvider theme={theme}>
      <CanvasProvider>
        <Component {...pageProps} />

        <ContextMenu />
        <GlobalStyles />
      </CanvasProvider>
    </ThemeProvider>
  );
};

export default App;
