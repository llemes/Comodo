var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganisationSchema = new Schema({
    name: String,
    users: [{ 
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    resources: [{
        type: Schema.Types.ObjectId,
        ref: 'Resource'
    }]
});

module.exports = mongoose.model('Organisation', OrganisationSchema);