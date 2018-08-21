import { Component } from 'react';
import Error from 'next/error';
import speakingurl from 'speakingurl';
import PropTypes from 'prop-types';

import LayoutDefault from '../layouts/LayoutDefault';
import Details from '../components/Details';
import apolloClient from '../lib/init-apollo';

// GraphQl
import PROCECURE_URL_DATA from 'GraphQl/queries/procedureUrlData';

export default class DetailsLayout extends Component {
  static async getInitialProps(ctx) {
    /**
     * Check correct URL only on server side
     */
    if (ctx.res) {
      const {
        req: { params },
        res,
      } = ctx;
      const client = apolloClient();
      const { data, error } = await client
        .query({
          query: PROCECURE_URL_DATA,
          variables: {
            id: params.id,
          },
        })
        .catch(() => {
          return { error: { statusCode: 404 } };
        });
      if (error) {
        return { statusCode: error.statusCode };
      }
      const { title, type } = data.procedure;
      if (speakingurl(title) !== params.title || speakingurl(type) !== params.type) {
        res.writeHead(302, {
          Location: `/${speakingurl(type)}/${params.id}/${speakingurl(title)}`,
        });
        res.end();
      }
    }
    return {};
  }
  render() {
    if (this.props.statusCode) {
      return <Error statusCode={this.props.statusCode} />;
    }

    return (
      <LayoutDefault>
        <Details />
      </LayoutDefault>
    );
  }
}

DetailsLayout.propTypes = {
  statusCode: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

DetailsLayout.defaultProps = {
  statusCode: false,
};
