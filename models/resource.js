const mongoose = require('mongoose');

//connect to the local database
mongoose.connect("mongodb://localhost:27017/itc230");

//define a resource schema
var resourceSchema = new mongoose.Schema({
    name: String,
    image: String,
    type: String,
    author: String,
    description: String
});

//create and export the resource model
module.exports = mongoose.model("Resource", resourceSchema);