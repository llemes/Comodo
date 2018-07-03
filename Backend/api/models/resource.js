var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
    name: String,
    occupied: Boolean,
    occupiedUntil: Date,
    resourceType: {
        type: Schema.Types.ObjectId,
        ref: 'ResourceType'
    }
});

module.exports = mongoose.model('Resource', ResourceSchema);