const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const mongoUrl = "mongodb://root:Mg8jvU2gKfrq1QRYKwwQ@3.19.127.27:27017";
console.log(mongoUrl)
// Connect to the MongoDB
mongoose.connect(mongoUrl, {useNewUrlParser: true});

const taskSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId()},
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    startTime: {type: String, required: true},
    endTime: {type: String, required: true}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;