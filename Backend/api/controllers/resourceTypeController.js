var mongoose = require('mongoose');
var ResourceType = mongoose.model('ResourceType');

exports.list_all_resource_types = function(req, res) {
    ResourceType.find({}, function(err, resourceType) {
        if(err) {
            return res.send(err);
        }
        res.json(resourceType);
    });
}

exports.read_a_resource_type = function(req, res) {
    ResourceType.findById(req.params.resourceTypeId, function(err, resourceType) {
        if(err) {
            return res.send(err);
        }
        res.json(resourceType);
    });
}

exports.create_a_resource_type = function(req, res) {
    var newResourceType = new ResourceType(req.body);
    newResourceType.save(function(err, resourceType) {
        if(err) {
            return res.send(err);
        }
        res.json(resourceType);
    });
}

exports.update_a_resource_type = function(req, res) {
    ResourceType.findByIdAndUpdate(req.params.resourceTypeId, req.body, { new: true }, function(err, resourceType) {
        if(err) {
            return res.send(err);
        }
        res.json(resourceType);
    });
}

exports.delete_a_resource_type = function(req, res) {
    ResourceType.findByIdAndRemove(req.params.resourceTypeId, function(err, resourceType) {
        if(err) {
            return res.send(err);
        }
        res.json(resourceType);
    });
}