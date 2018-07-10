const express = require('express');

module.exports = function(app, route) {
    route += '/resourcetypes';

    var resourceTypeList = require('../controllers/resourceTypeController');

    app.route(route)
        .get(resourceTypeList.list_all_resource_types)
        .post(resourceTypeList.create_a_resource_type);

    app.route(route + '/:resourceTypeId')
        .get(resourceTypeList.read_a_resource_type)
        .put(resourceTypeList.update_a_resource_type)
        .delete(resourceTypeList.delete_a_resource_type);
}