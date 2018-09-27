import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import getConfig from 'next/config';

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
          <meta name="author" content="Democracy Deutschland e.V." />
          <meta name="publisher" content="Democracy Deutschland e.V." />
          <meta name="DC.Publisher" content="Democracy Deutschland e.V." />
          <meta name="copyright" content="Democracy Deutschland e.V." />
          <meta name="DC.Rights" content="Democracy Deutschland e.V." />
          <meta name="DC.Creator" content="Democracy Deutschland e.V." />
          <meta
            name="audience"
            content="Politiker, Bürger, Interessierte, Lobbyisten, Anfänger, Azubis, Erwachsene, Experten, Fortgeschrittene, Frauen, Jugendliche, Männer, Profis, Schüler, Studenten"
          />

          <meta name="revisit-after" content="1 DAYS" />
          <meta name="robots" content="index, follow" />

          <meta name="DC.Language" content="de" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="stylesheet" href="/_next/static/style.css" />
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
