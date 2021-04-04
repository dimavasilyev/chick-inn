import Document, { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';
import favicon from '../assets/logo_medium.png';

class CustomDocument extends Document {
  render() {
    const ymId = 67921519;
    const ymCode = `
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

      ym(${ymId}, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      })`;

    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#ECBE02" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
            http-equiv="refresh"
            content="0; url = https://www.straus.md/ru/restaurant/chickinn/"
          />
          <link rel="icon" href={favicon} />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: ymCode }} />
          <script>window.location.replace('https://www.straus.md/ru/restaurant/chickinn/')</script>
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${ymId}`}
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
        </Head>
        <body>{/* <Main />
          <NextScript /> */}</body>
      </Html>
    );
  }
}

export default CustomDocument;
