import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles';
import { CanvasProvider } from 'contexts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CanvasProvider>
        <Component {...pageProps} />
      </CanvasProvider>
    </ThemeProvider>
  );
};

export default App;
