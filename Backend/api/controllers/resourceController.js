var mongoose = require('mongoose');
var Resource = mongoose.model('Resource');

// filter all by organisation id

exports.list_all_resources = function(req, res) {
    Resource.find({
        organisationId: res.locals.decoded.organisationId
    }, function(err, resource) {
        if(err) {
            return res.send(err);
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
            return res.send(err);
        }
        res.json(resource);
    });
}

exports.create_a_resource = function(req, res) {
    var newResource = new Resource(req.body);
    newResource.organisationId = res.locals.decoded.organisationId;
    
    if (newResource.name === undefined || newResource.name == '' || 
        newResource.resourceTypeId === undefined || newResource.name == '')
        res.json("Populate all required fields");
    else{
        newResource.save(function(err, resource) {
            if(err) {
                return res.send(err);
            }
            res.json(resource);
        })
    }
}

exports.update_a_resource = function(req, res) {
    //can update all fields
    if (res.locals.decoded.role == 'admin'){
        Resource.findOneAndUpdate({ 
        _id: req.params.resourceId, 
        organisationId: res.locals.decoded.organisationId 
        }, req.body, { new: true }, function(err, resource) {
            if(err) {
                return res.send(err);
            }
            res.json(resource);
        });
    }
    else{
        //can only update occupied field
        var dbResource;
        Resource.findOne({ 
            _id: req.params.resourceId, 
            organisationId: res.locals.decoded.organisationId 
        }, function(err, resource) {
            if(err) {
                return res.send(err);
            }
            dbResource = resource;
            //change occupied
            dbResource.occupied = req.body.occupied;
            
            Resource.findOneAndUpdate({ 
                _id: req.params.resourceId, 
                organisationId: res.locals.decoded.organisationId 
                }, dbResource, { new: true }, function(err, resource) {
                    if(err) {
                        return res.send(err);
                    }
                    res.json(resource);
                });
        });
    }

}

exports.delete_a_resource = function(req, res) {
    Resource.findOneAndRemove({ 
        _id: req.params.resourceId, 
        organisationId: res.locals.decoded.organisationId 
    }, function(err, resource) {
        if(err) {
            return res.send(err);
        }
        res.json(resource);
    });
}