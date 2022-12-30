const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/ComputeShare';

module.exports = {
    url,

    // Connect to database, return client
    connect: function(url, callback) {
        MongoClient.connect(url, function(err, client) {
            if(err) throw err;
            callback(client);
        });
    },

    // Create new document
    createDocument: function(client, collectionName, json, callback) {
        const db = client.db();
        const collection = db.collection(collectionName);
        collection.insertOne(json, function(err, res) {
            if(err) return callback(err);
            return callback(null, res);
        });
    },

    // Read from query
    readFromQuery: function(client, collectionName, query, callback) {
        const db = client.db();
        const collection = db.collection(collectionName);
        collection.find(query).toArray(function(err, obj) {
            if(err) throw err;
            callback(obj);
        });
    },

    // Read all documents
    readAllDocuments: function(client, collectionName, callback) {
        const db = client.db();
        const collection = db.collection(collectionName);
        collection.find({}).toArray(function(err, obj) {
            if(err) throw err;
            callback(obj);
        });
    },

    // Update from query
    updateOne: function(client, query, update) {
        const db = client.db();
        const collection = db.collection(collectionName);
        collection.updateOne(query, update, function(err, res) {
            if(err) throw err;
            console.log(res.modifiedCount);
        });
    },

    // Delete one from query
    deleteOne: function(client, collectionName, query) {
        const db = client.db();
        const collection = db.collection(collectionName);
        collection.deleteOne(query, function(err, res) {
            if(err) throw err;
            console.log(res.deletedCount);
        });
    }
}