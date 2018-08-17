/* eslint-disable */
import 'dotenv/config';
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
import path from 'path';

const withCss = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withSourceMaps(
  withCss({
    webpack: function(config) {
      if (process.env.ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          }),
        );
      }

      config.resolve.alias = {
        ...config.resolve.alias,
        Components: path.resolve(__dirname, 'components/'),
      };

      return config;
    },
    serverRuntimeConfig: {
      // Will only be available on the server side
      PORT: process.env.PORT,
      NODE_ENV: process.env.NODE_ENV,
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      GRAPHQL_URL: process.env.GRAPHQL_URL,
      PAGE_TITLE: process.env.PAGE_TITLE,
    },
  }),
);

/* // fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}*/
