module.exports = {
  presets: ['@babel/env', '@babel/react', ["next/babel", {
    "targets": {
       "browsers": ["last 2 versions", "safari >= 7"],
       "node": true
    }
  }]],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    'transform-decorators-legacy',
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css',
      },
    ],
  ],
};

// {
//   presets: ['next/babel', '@babel/preset-env'],
//   plugins: [['styled-components', { ssr: true, displayName: true, preprocess: false }]],
//   env: {
//     development: {
//       plugins: ['inline-dotenv'],
//     },
//     production: {
//       plugins: ['transform-inline-environment-variables'],
//     },
//   },
// };
