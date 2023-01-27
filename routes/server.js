const mongoose = require("mongoose");

mongoose.connect("mongodb://root:Mg8jvU2gKfrq1QRYKwwQ@3.19.127.27:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const myCollection = mongoose.model("mycollection", new mongoose.Schema({}));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected to MongoDB!");
});