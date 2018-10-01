import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import getConfig from 'next/config';

// CONFIGS
const {
  publicRuntimeConfig: { DOMAIN_DESKTOP },
} = getConfig();

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <html>
        <Head>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href={`${DOMAIN_DESKTOP}/apple-touch-icon-57x57.png`}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href={`${DOMAIN_DESKTOP}/apple-touch-icon-114x114.png`}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href={`${DOMAIN_DESKTOP}/apple-touch-icon-72x72.png`}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href={`${DOMAIN_DESKTOP}/apple-touch-icon-144x144.png`}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href={`${DOMAIN_DESKTOP}/apple-touch-icon-60x60.png`}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href={`${DOMAIN_DESKTOP}/apple-touch-icon-120x120.png`}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href={`${DOMAIN_DESKTOP}/apple-touch-icon-76x76.png`}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href={`${DOMAIN_DESKTOP}/apple-touch-icon-152x152.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${DOMAIN_DESKTOP}/favicon-196x196.png`}
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${DOMAIN_DESKTOP}/favicon-96x96.png`}
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${DOMAIN_DESKTOP}/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${DOMAIN_DESKTOP}/favicon-16x16.png`}
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${DOMAIN_DESKTOP}/favicon-128.png`}
            sizes="128x128"
          />
          <meta name="application-name" content="DEMOCRACY" />
          <meta name="msapplication-TileColor" content="#4494d3" />
          <meta name="msapplication-TileImage" content={`${DOMAIN_DESKTOP}/mstile-144x144.png`} />
          <meta
            name="msapplication-square70x70logo"
            content={`${DOMAIN_DESKTOP}/mstile-70x70.png`}
          />
          <meta
            name="msapplication-square150x150logo"
            content={`${DOMAIN_DESKTOP}/mstile-150x150.png`}
          />
          <meta
            name="msapplication-wide310x150logo"
            content={`${DOMAIN_DESKTOP}/mstile-310x150.png`}
          />
          <meta
            name="msapplication-square310x310logo"
            content={`${DOMAIN_DESKTOP}/mstile-310x310.png`}
          />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
