module.exports = {
  "parser": "babel-eslint",
  extends: ["prettier"],
  plugins: ["prettier", [
    "styled-components", 
    {
      "ssr": true, 
      "displayName": true, 
      "preprocess": false 
    }
  ]],
  rules: {
    "prettier/prettier": ["error"],
    "newline-per-chained-call": [2],
    'linebreak-style': 0,
  },
  globals: {
    Log: true,
  },
};
