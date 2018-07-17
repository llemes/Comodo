const jwt = require('jsonwebtoken');
const config = require('../../../config');

exports.organisation_members_only = function(req, res, next) {
    var token = req.headers['x-access-token'];
    jwt.verify(token, config.app.secret, function(err, decoded) {
        if(err) return releaseEvents.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        const isFromOrganisation = true;

        if(!isFromOrganisation) {
            return res.status(403).send({
                auth: false,
                message: 'Permission denied: must be member of organisation.'
            });
        }

        return next();
    });
}