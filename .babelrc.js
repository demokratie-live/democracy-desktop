module.exports = {
  presets: ['@babel/env', '@babel/react', 'next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    'transform-decorators-legacy',
    [
      'import',
      {
        libraryName: 'antd',
        style: false,
      },
    ],
  ],
};
