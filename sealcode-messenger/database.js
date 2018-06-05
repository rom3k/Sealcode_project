const mongodb = require("mongodb").MongoClient;
const objId = require("mongodb").ObjectId;

const url = 'mongodb://localhost:27017';

module.exports = {
  getData: (content) => {
    mongodb.connect(url, { useNewUrlParser: true } ,(err, session) => {
      console.log("Connected");
      const db = session.db('Sealcode');
      const collection = db.collection('users');
    });
  }
}