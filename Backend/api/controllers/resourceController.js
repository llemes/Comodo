var mongoose = require('mongoose');
var Resource = mongoose.model('Resource');

// filter all by organisation id

exports.list_all_resources = function(req, res) {
    Resource.find({
        organisationId: res.locals.decoded.organisationId
    }, function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    });
}

exports.read_a_resource = function(req, res) {
    Resource.findOne({ 
        _id: req.params.resourceId, 
        organisationId: res.locals.decoded.organisationId 
    }, function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    });
}

exports.create_a_resource = function(req, res) {
    var newResource = new Resource(req.body);
    newResource.organisationId = res.locals.decoded.organisationId;
    newResource.save(function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    })
}

exports.update_a_resource = function(req, res) {
    Resource.findOneAndUpdate({ 
        _id: req.params.resourceId, 
        organisationId: res.locals.decoded.organisationId 
    }, req.body, { new: true }, function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    });
}

exports.delete_a_resource = function(req, res) {
    Resource.findOneAndRemove({ 
        _id: req.params.resourceId, 
        organisationId: res.locals.decoded.organisationId 
    }, function(err, resource) {
        if(err) {
            res.send(err);
        }
        res.json(resource);
    });
}