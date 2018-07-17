exports.administrator_of_organisation_only = function(req, res, next) {
    const decoded = res.locals.decoded;
    const isFromOrganisation = req.params.organisationId === decoded.organisationId;
    const isAdmin = decoded.role === 'admin';

    if (!isFromOrganisation || !isAdmin) 
        return res.status(403).send({ 
            auth: false, 
            message: 'Permission denied: must be administrator of organisation.'
        });

    return next();
}