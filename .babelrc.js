module.exports = {
  "presets": [
    "next/babel",
  ],
  plugins: [
    ["styled-components", { "ssr": true, "displayName": true, "preprocess": false } ]
  ],
  "env": {
    "development": {
      "plugins": [
        "inline-dotenv"
      ]
    },
    "production": {
      "plugins": [
        "transform-inline-environment-variables"
      ]
    }
  }
}