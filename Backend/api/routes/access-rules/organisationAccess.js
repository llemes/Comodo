exports.member_of_organisation_only = function(req, res, next) {
    const decoded = res.locals.decoded;
    const isFromOrganisation = req.params.organisationId === decoded.organisationId;

    if (!isFromOrganisation) 
        return res.status(403).send({ 
            auth: false, 
            message: 'Permission denied: must be member of organisation to perform this action.'
        });

    return next();
}