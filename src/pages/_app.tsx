import { AppProps } from 'next/app';
import { CanvasProvider } from 'contexts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CanvasProvider>
      <Component {...pageProps} />
    </CanvasProvider>
  );
};

export default App;
