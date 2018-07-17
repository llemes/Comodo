var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganisationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    }
});

OrganisationSchema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('Organisation', OrganisationSchema);