module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
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
