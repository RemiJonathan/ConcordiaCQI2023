const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId()},

    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    type: {
        type: String,
        enum: ['Organizer', 'Volunteer', 'Admin'],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
