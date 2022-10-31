const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let todaysDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  response.send(todaysDate);
});

app.listen(3003);

module.exports = app;
