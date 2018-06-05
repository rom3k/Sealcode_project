var express = require('express');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.post("/auth", (req, res, next) => {
  console.log(req.body);
  res.send("Hello, World!");
});


app.listen('6534', () => {
  console.log("Listening on port 6534");
});