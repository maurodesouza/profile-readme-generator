import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): import('react/jsx-runtime').JSX.Element {
    return (
      <Html>
        <Head />
        <body className="tone palette-brand base-1">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
