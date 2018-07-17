exports.administrator_only = function(req, res, next) {
    const decoded = res.locals.decoded;
    const isAdmin = decoded.role === 'admin';

    if(!isAdmin) {
        return res.status(403).send({
            auth: false,
            message: 'Permission denied: must be administrator to perform this action.'
        });
    }

    return next();
}