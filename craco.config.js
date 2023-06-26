const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        alias: {
          "@components": "components",
          "@theme": "theme",
          "@types": "types",
        },
        source: "tsconfig",
        baseUrl: "src",
      },
    },
  ],
};
