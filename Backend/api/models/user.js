var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fullName: String,
    email: String,
    username: String,
    password: String,
    role: String
});

module.exports = mongoose.model('User', UserSchema);