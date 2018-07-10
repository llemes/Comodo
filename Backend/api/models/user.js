var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fullName: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        unique : true, 
        required : true, 
        dropDups: true
    },
    username: {
        type: String,
        unique : true, 
        required : true, 
        dropDups: true
    },
    password: {
        type: String,
        required : true
    },
    role: {
        type: String,
        required : true
    }
});

UserSchema.plugin(require('mongoose-unique-validator'));
UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);