const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Home page");
});

app.get("/about", (request, response) => {
  response.send("About page");
});

module.exports = app;
