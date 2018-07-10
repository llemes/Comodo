var mongoose = require('mongoose');
var Resource = mongoose.model('Resource');

exports.list_all_resources = function(req, res) {
    Resource.find({}, function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    });
}

exports.read_a_resource = function(req, res) {
    Resource.findById(req.params.resourceId, function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    });
}

exports.create_a_resource = function(req, res) {
    var newResource = new Resource(req.body);
    newResource.save(function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    })
}

exports.update_a_resource = function(req, res) {
    Resource.findByIdAndUpdate(req.params.resourceId, req.body, { new: true }, function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    });
}

exports.delete_a_resource = function(req, res) {
    Resource.findByIdAndRemove(req.params.resourceId, function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    });
}