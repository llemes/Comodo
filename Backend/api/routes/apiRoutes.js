const express = require('express');

module.exports = function(app) {
    const apiRoute = '/api';

    const userRoutes = require('./userRoutes');
    userRoutes(app, apiRoute);
    const resourceTypeRoutes = require('./resourceTypeRoutes');
    resourceTypeRoutes(app, apiRoute);
    const resourceRoutes = require('./resourceRoutes');
    resourceRoutes(app, apiRoute);
    const organisationRoutes = require('./organisationRoutes');
    organisationRoutes(app, apiRoute);
}