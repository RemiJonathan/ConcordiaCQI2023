const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoUrl = "mongodb://root:Mg8jvU2gKfrq1QRYKwwQ@3.19.127.27:27017";
console.log(mongoUrl)
// Connect to the MongoDB
mongoose.connect(mongoUrl, {useNewUrlParser: true});

const userSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId()},
    id: {type: String, required: true},
    password: {type: String, required: true},
    type: {
        type: String,
        enum: ['Organizer', 'Volunteer', 'Admin'],
        required: true
    },
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    address: {type: String, required: true},
    tasks: []
});

const User = mongoose.model('User', userSchema);

module.exports = User;
