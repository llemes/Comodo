var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.list_all_users = function(req, res) {
    User.find({
        organisationId: res.locals.decoded.organisationId
    }, '-password', function(err, user) {
        if(err) {
            return res.send(err);
        }
        res.json(user);
    });
}

exports.read_a_user = function(req, res) {
    User.findOne({
        _id: req.params.userId,
        organisationId: res.locals.decoded.organisationId
    }, '-password', function(err, user) {
        if(err) {
            return res.send(err);
        }
        res.json(user);
    });
}

exports.create_a_user = function(req, res) {
    res.json({
        message: 'Obsolete. Use /register instead.'
    });
}

exports.update_a_user = function(req, res) {
    User.findOneAndUpdate({
        _id: req.params.userId,
        organisationId: res.locals.decoded.organisationId
    }, req.body, { new: true }, function(err, user) {
        if(err) {
            return res.send(err);
        }
        user = user.toObject();
        delete user.password;
        res.json(user);
    });
}

exports.delete_a_user = function(req, res) {
    User.findOneAndRemove({
        _id: req.params.userId,
        organisationId: res.locals.decoded.organisationId
    }, function(err, user) {
        if(err) {
            return res.send(err);
        }
        user = user.toObject();
        delete user.password;
        res.json(user);
    });
}