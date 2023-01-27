# Server Configuration Settings

`const mongoose = require('mongoose');`

`mongoose.connect('mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/cqi_db', {useNewUrlParser: true});
`