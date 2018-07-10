var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    occupied: {
        type: Boolean,
        required : true,
    },
    occupiedUntil: {
        type: Date
    },
    resourceTypeId: {
        type: Schema.Types.ObjectId,
        ref: 'ResourceType',
        required: true
    },
    organisationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organisation',
        required: true
    }
});

module.exports = mongoose.model('Resource', ResourceSchema);