const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:Mg8jvU2gKfrq1QRYKwwQ@3.19.127.27:27017/';
const client = new MongoClient(url, { useNewUrlParser: true });

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
createUser('kmatloub','k1234','ORGANIZER', 'Khaled', 'Matloub', 21, 'Concordia',);
