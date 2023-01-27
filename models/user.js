const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    address: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
