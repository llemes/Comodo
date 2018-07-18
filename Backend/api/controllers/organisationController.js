var mongoose = require('mongoose');
var Organisation = mongoose.model('Organisation');

exports.list_all_organisations = function(req, res) {
    Organisation.find({}, function(err, organisation) {
        if(err) {
            return res.send(err);
        }
        res.json(organisation);
    });
}

exports.read_an_organisation = function(req, res) {
    Organisation.findById(req.params.organisationId, function(err, organisation) {
        if(err) {
            return res.send(err);
        }
        res.json(organisation);
    });
}

exports.create_an_organization = function(req, res) {
    var newOrganisation = new Organisation(req.body);
    newOrganisation.save(function(err, organisation) {
        if(err) {
            return res.send(err);
        }
        res.json(organisation);
    });
}

exports.update_an_organisation = function(req, res) {
    Organisation.findByIdAndUpdate(req.params.organisationId, req.body, { new: true }, function(err, organisation) {
        if(err) {
            return res.send(err);
        }
        res.json(organisation);
    });
}

exports.delete_an_organisation = function(req, res) {
    Organisation.findByIdAndRemove(req.params.organisationId, function(err, organisation) {
        if(err) {
            return res.send(err);
        }
        res.json(organisation);
    })
}