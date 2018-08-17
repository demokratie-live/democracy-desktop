/* eslint-disable */
import 'dotenv/config';
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE, BUNDESTAGIO_SERVER_URL_CLIENT, PORT } = process.env;

console.log('next.config.js', PORT);

const withCss = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withSourceMaps(
  withCss({
    webpack: function(config) {
      if (ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          }),
        );
      }

      return config;
    },
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      PORT,
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      BUNDESTAGIO_SERVER_URL: BUNDESTAGIO_SERVER_URL_CLIENT,
    },
  }),
);
