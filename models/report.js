const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    //TODO: @Khaled Matloub, paste the JSON report structures here.
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;