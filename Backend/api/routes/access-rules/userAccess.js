exports.alter_self_only = function(req, res, next) {
    const decoded = res.locals.decoded;
    const requestForSelf = req.params.userId === decoded.id;
    const administrator = decoded.role === 'admin';

    if(!requestForSelf && !administrator) 
        return res.status(403).send({
            auth: false,
            message: 'Permission denied: you can only perform this operation on yourself.'
        });

    return next();
}