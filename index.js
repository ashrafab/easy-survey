const app = require("./server/app.js");
const mongoose = require("mongoose");
const webpack = require("webpack");
const webpackConfig = require("./client/webpack.config");

const { PORT = 3000, MONGO_DB_URI } = process.env;

const compiler = webpack(webpackConfig);
compiler.run(function(err, stats) {
  if (err || stats.hasErrors()) {
    throw new Error(stats.toString());
  }
  console.log("webpack build finished");
});

mongoose.connect(MONGO_DB_URI);
mongoose.connection.on("error", err => {
  throw err;
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
