var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');
var config = require('../../config');

exports.list_all_users = function(req, res) {
    User.find({}, '-password', function(err, user) {
        if(err) {
            res.send(err);
        }
        res.json(user);
    });
}

exports.read_a_user = function(req, res) {
    User.findById(req.params.userId, '-password', function(err, user) {
        if(err) {
            res.send(err);
        }
        res.json(user);
    });
}

// todo: return without password
exports.create_a_user = function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, user) {
        if(err) {
            res.send(err);
            return;
        }
        var token = jwt.sign({ id: user._id }, config.app.secret, { expiresIn: 86400 });
        res.json({
            user: user,
            auth: true,
            token: token
        });
    });
}

// todo: return without password
exports.update_a_user = function(req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, function(err, user) {
        if(err) {
            res.send(err);
        }
        res.json(user);
    });
}

// todo: return without password
exports.delete_a_user = function(req, res) {
    User.findByIdAndRemove(req.params.userId, function(err, user) {
        if(err) {
            res.send(err);
        }
        res.json(user);
    });
}