var MongoClient = require('mongodb').MongoClient;
const mongouri = require("./mongo.json").uri
let mongoDB

// Connect to the db
MongoClient.connect(mongouri,  
    {
        sslValidate: false,
        ssl: true,
    }, function (err, db) {
    if (err) {
        throw new Error(err)
    }
    mongoDB = db.db('admin')
    console.log(mongoDB)
});

module.exports.get = async function(collection, query) {
    return await mongoDB
        .collection(collection)
        .find(query)
        .toArray();
}