var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    imageUrl: {
        type: String
    }
});

ResourceTypeSchema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('ResourceType', ResourceTypeSchema);