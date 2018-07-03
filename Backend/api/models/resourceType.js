var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceTypeSchema = new Schema({
    name: String,
    imageUrl: String
});

module.exports = mongoose.model('ResourceType');