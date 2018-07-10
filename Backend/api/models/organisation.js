var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganisationSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Organisation', OrganisationSchema);