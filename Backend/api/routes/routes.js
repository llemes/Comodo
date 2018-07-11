module.exports = function(app) {
    const apiRoute = '/api';

    const userRoutes = require('./userRoutes');
    const resourceTypeRoutes = require('./resourceTypeRoutes');
    const resourceRoutes = require('./resourceRoutes');
    const organisationRoutes = require('./organisationRoutes');
    userRoutes(app, apiRoute);
    resourceTypeRoutes(app, apiRoute);
    resourceRoutes(app, apiRoute);
    organisationRoutes(app, apiRoute);
}