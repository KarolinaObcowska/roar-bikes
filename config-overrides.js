/* eslint-disable no-undef */
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@Elements": "src/components/elements",
    "@Layout": "src/components/layout",
    "@Sections": "src/components/sections",
    "@Partials": "src/components/partials",
    "@Images": "src/img",
    "@Style": "src/styles"
  })(config);

  return config;
};
