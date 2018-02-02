const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config(); // load env variables into process.env
const routes = require("./routes"); // app routes

const app = express();

// setting middleware
app.use(bodyParser.json());
app.use("/assets", express.static(path.resolve(__dirname, "../public")));

// setting routes
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = app;
