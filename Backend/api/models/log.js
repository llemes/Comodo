var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: false
    },
    action: {
        type: String,
        required: true
    }, 
    time: {
        type: Date,
        required: true
    }
});

LogSchema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('Log', LogSchema);