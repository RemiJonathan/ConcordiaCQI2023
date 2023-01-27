const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const objectSchema = new Schema({
    //TODO: @Khaled Matloub, paste the JSON object structures here.
});

const Object = mongoose.model('Object', objectSchema);

module.exports = Object;