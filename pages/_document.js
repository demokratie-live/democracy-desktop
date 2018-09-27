import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import getConfig from 'next/config';

// CONFIGS
const {
  publicRuntimeConfig: { PAGE_TITLE, DOMAIN_DESKTOP },
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

          <meta key="og-title" property="og:title" content={PAGE_TITLE} />
          <meta key="page-topic" name="page-topic" content={PAGE_TITLE} />
          <meta key="og-url" property="og:url" content={DOMAIN_DESKTOP} />
          <meta
            key="og-image"
            property="og:image"
            content={`${DOMAIN_DESKTOP}/static/images/democracy.png`}
          />

          <meta
            key="description"
            name="description"
            content="Die offizielle Browserversion der DEMOCRACY App – das 10X-Improvement für unsere Demokratie. DEMOCRACY räumt jedem nutzenden Bundesbürger die Möglichkeit ein, sich über die aktuellen Parlamentsabstimmungen des deutschen Bundestags zu informieren und selbst abzustimmen"
          />
          <meta
            key="dc-description"
            name="DC.Description"
            content="Die offizielle Browserversion der DEMOCRACY App – das 10X-Improvement für unsere Demokratie. DEMOCRACY räumt jedem nutzenden Bundesbürger die Möglichkeit ein, sich über die aktuellen Parlamentsabstimmungen des deutschen Bundestags zu informieren und selbst abzustimmen"
          />
          <meta
            key="og-description"
            property="og:description"
            content="Die offizielle Browserversion der DEMOCRACY App – das 10X-Improvement für unsere Demokratie. DEMOCRACY räumt jedem nutzenden Bundesbürger die Möglichkeit ein, sich über die aktuellen Parlamentsabstimmungen des deutschen Bundestags zu informieren und selbst abzustimmen"
          />

          <meta key="page-type" name="page-type" content="website" />
          <meta key="og-type" property="og:type" content="website" />

          <meta name="revisit-after" content="1 DAYS" />
          <meta name="robots" content="index, follow" />

          <meta name="DC.Language" content="de" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
