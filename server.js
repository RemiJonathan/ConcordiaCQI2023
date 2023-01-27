const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const url = `mongodb://root:Mg8jvU2gKfrq1QRYKwwQ@3.19.127.27:27017/`;
const client = new MongoClient(url, {useNewUrlParser: true});
/*
List of functions:
    createUser(id, password, type, firstName, lastName, age, address)
    createLostItem(name, description, lostHour, reporter)
    createFoundItem(name, description, findHour)
    createIssue(name, description, assistanceType)

 */

let users;
let status = false;
function createUser(id, password, type, firstName, lastName, age, address) {
    client.connect(() => {
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
        }, () => {
            console.log('item added to the database');
            client.close();
        });
    });
}
function createLostItem(name, description, lostHour, reporter) {
    client.connect(() => {
        const db = client.db('cqi_db');
        const collection = db.collection('objects');
        collection.insertOne({
            name: name,
            description: description,
            lost_hour: lostHour,
            reporter: reporter,
            type: 'lost'
        }, () => {
            console.log('item added to the database');
            client.close();
        });
    });
}

function createFoundItem(name, description, findHour) {
    client.connect(() => {
        const db = client.db('cqi_db');
        const collection = db.collection('objects');
        collection.insertOne({
            name: name,
            description: description,
            find_hour: findHour,
            type: 'found'
        }, () => {
            console.log('item added to the database');
            client.close();
        });
    });
}

function createIssue(name, description, assistanceType) {
    client.connect(() => {
        const db = client.db('cqi_db');
        const collection = db.collection('reports');
        collection.insertOne({
            name: name,
            description: description,
            assistance_type: assistanceType,
        }, () => {
            console.log('item added to the database');
            client.close();
        });
    });
}
function createTask(name, description, date, startTime, endTime) {
    client.connect(() => {
        const db = client.db('cqi_db');
        const collection = db.collection('tasks');
        collection.insertOne({
            name: name,
            description: description,
            date: date,
            start_time: startTime,
            end_time: endTime,
            volunteers: []
        }, () => {
            console.log('item added to the database');
            client.close();
        });
    });
}
function addVolunteer(task, username) {
    client.connect(() => {
        const db = client.db('cqi_db');
        const collection = db.collection('objects');
        collection.updateOne({name: task}, {$push: {volunteers: username}}, function (err, res) {
            if (err) throw err;
            console.log("Item added to the array");
            client.close();
        });
    });
}

function getIDs() {
    let arr = [];
    client.connect(() => {
        const db = client.db('cqi_db');
        const collection = db.collection('users');
        collection.distinct('id', (err, ids) => {
            arr.push(ids.toString());
        });
    });
    return arr;
}

function getName(id){

    client.connect(() => {
        const db = client.db('cqi_db');
        const collection = db.collection('users');
        collection.findOne({ id: id }, (err,item) => {
            console.log(item);
            client.close();
        });
    });
}
async function getUsers(){
    await client.connect()
        const db = client.db('cqi_db');
        const collection = db.collection('users');

    return await collection.find({}).toArray();
        //client.close();

}
//createTask("Finish Task","Finish all the tasks required", "27/1/2023","8:00", "20:00");
//addVolunteer("Finish Task", "kmatloub");
//createIssue("Khaled", "He wants to sleep", "VOLUNTEER");
//console.log(getIDs());
let item = getUsers().then();
console.log(item);

