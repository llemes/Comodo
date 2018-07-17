const jwt = require('jsonwebtoken');
const config = require('../../../config');
const Organisation = require('../../models/organisation');

exports.administrator_of_organisation_only = function(req, res, next) {
    var token = req.headers['x-access-token'];
    jwt.verify(token, config.app.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
        const organisationIdValid = req.params.organisationId === decoded.organisationId;
        const isAdmin = decoded.role === 'admin';

        if (!organisationIdValid || !isAdmin) return res.status(403).send({ auth: false, message: 'Permission denied'});

        return next();
    });
}