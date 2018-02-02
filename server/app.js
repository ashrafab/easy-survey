const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config(); // load env variables into process.env
const routes = require("./routes"); // app routes

const app = express();

// setting middleware
app.use(bodyParser.json());

// setting routes
app.use(routes);

module.exports = app;
