import { Component } from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

// Components
import ListTypesList from './ListTypesList';
import SearchList from './SearchList';

// Context
import { Consumer as SearchConsumer } from 'Context/search';

const {
  publicRuntimeConfig: { PAGE_TITLE, DOMAIN_DESKTOP },
} = getConfig();

class List extends Component {
  render() {
    return (
      <>
        <Head>
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
        </Head>
        <SearchConsumer>
          {consumerProps => {
            if (!consumerProps) return null;
            const { term } = consumerProps;

            if (term.trim()) {
              return <SearchList term={term} />;
            } else {
              return <ListTypesList />;
            }
          }}
        </SearchConsumer>
      </>
    );
  }
}

export default List;
