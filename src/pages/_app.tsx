import { MouseEvent, useEffect } from 'react';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ContextMenu } from 'components';
import { CanvasProvider } from 'contexts';

import { theme, GlobalStyles } from 'styles';

const App = ({ Component, pageProps }: AppProps) => {
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
