/* eslint-disable no-undef */
module.exports = {
  module: {
    rules: [
      {
        test: /\.sass$/,
        loader: "sass-loader",
        options: {
          sassOptions: {
            includePaths: [path.resolve(__dirname, "src/styles")]
          }
        }
      }
    ]
  }
};
