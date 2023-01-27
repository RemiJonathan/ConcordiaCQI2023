const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}`;
const client = new MongoClient(url, {useNewUrlParser: true});

function createUser(id, password, type, firstName, lastName, age, address) {
    client.connect(err => {
        const db = client.db('cqi_db');
        const collection = db.collection('users');
        collection.insertOne({
            id: id,
            password: password,
            type: type,
            firstname: firstName,
            lastname: lastName,
            age: age,
            address: address,
            tasks: []
        }, (err, res) => {
            console.log('item added to the database');
            client.close();
        });
    });
}
