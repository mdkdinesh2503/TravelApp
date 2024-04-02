const { MongoClient } = require('mongodb')

let dbConnection;

var DATABASE_STRING = "mongodb+srv://dinesh:mdk@travelapp-db.w5uz0dp.mongodb.net/travel";

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(DATABASE_STRING)
      .then(client => {
        dbConnection = client.db()
        console.log("Success - MongoDb Database!!")
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}