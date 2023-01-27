const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const mongoUrl = "mongodb://root:Mg8jvU2gKfrq1QRYKwwQ@3.19.127.27:27017";
console.log(mongoUrl)
// Connect to the MongoDB
mongoose.connect(mongoUrl, {useNewUrlParser: true});

const objectSchema = new Schema({

    _id: {type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId()},

    name: {type: String, required: true},
    description: {type: String, required: true},
    hour: {type: Number, required: true},
    assistance_type: {
        type: String,
        enum: ['FOUND', 'LOST'],
        required: true
    },
    reporter: {type: String, required: false}
});

const Object = mongoose.model('Object', objectSchema);

module.exports = Object;