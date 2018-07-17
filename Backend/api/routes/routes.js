module.exports = function(router) {
    const apiRoute = '/api';

    const userRoutes = require('./userRoutes');
    const resourceTypeRoutes = require('./resourceTypeRoutes');
    const resourceRoutes = require('./resourceRoutes');
    const organisationRoutes = require('./organisationRoutes');
    userRoutes(router, apiRoute);
    resourceTypeRoutes(router, apiRoute);
    resourceRoutes(router, apiRoute);
    organisationRoutes(router, apiRoute);
}