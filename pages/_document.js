import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import favicon from '../assets/logo_medium.png';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content="#ECBE02" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href={favicon} />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
