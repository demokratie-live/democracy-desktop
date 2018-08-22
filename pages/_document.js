import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import getConfig from 'next/config';

let styleVersion = '';
if (process.env.NODE_ENV === 'production') {
  const hash = createHash('sha256');
  hash.update(readFileSync(`${process.cwd()}/.next/static/style.css`));
  styleVersion = `?v=${hash.digest('hex').substr(0, 8)}`;
}

// CONFIGS
const {
  publicRuntimeConfig: { PAGE_TITLE },
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
          <title>{PAGE_TITLE}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href={`/_next/static/style.css${styleVersion}`} />
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
