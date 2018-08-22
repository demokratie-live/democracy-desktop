/* eslint-disable */
require( 'dotenv/config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require("path");
const withPlugins = require('next-compose-plugins');

const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass')
// const withSourceMaps = require('@zeit/next-source-maps');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css', '.sass', '.less'] = file => {};
}

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[name]___[hash:base64:5]'
  }
};

const nextConfiguration = {
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
      GraphQl: path.resolve(__dirname, 'graphql/'),
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
  },}

module.exports = withPlugins([
  // [withSass],
  // [withCss],
  [withLess, {
    lessLoaderOptions: {
      javascriptEnabled: true,
    }
  }],
], nextConfiguration)
