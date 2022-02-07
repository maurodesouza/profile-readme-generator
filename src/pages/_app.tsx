import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from 'styles';
import { CanvasProvider } from 'contexts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CanvasProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </CanvasProvider>
    </ThemeProvider>
  );
};

export default App;
