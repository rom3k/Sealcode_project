const express = require('express');
const app = express();
const mongoDb = require('mongodb').MongoClient;
const db = require('./database.js');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.post("/auth", (req, res, next) => {
  db.getData(req.body);
});


app.listen('6534', () => {
  console.log("Listening on port 6534");
});
