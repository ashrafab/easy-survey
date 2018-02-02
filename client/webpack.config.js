const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../public/build/js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
