const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const reportSchema = new Schema({

    _id: {type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId()},

    name: {type: String, required: true},
    description: {type: String, required: true},
    assistance_type: {
        type: String,
        enum: ['ORGANIZER', 'VOLUNTEER', 'SECURITY', 'FIRST_AID'],
        required: true
    }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;