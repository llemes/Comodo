var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    occupied: {
        type: Booelan,
        required : true,
    },
    occupiedUntil: Date,
    resourceType: {
        type: Schema.Types.ObjectId,
        ref: 'ResourceType'
    }
});

module.exports = mongoose.model('Resource', ResourceSchema);