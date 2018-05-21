var express = require('express');
var app = express();


app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.listen('6534', () => {
  console.log("Listening on port 6534");
});