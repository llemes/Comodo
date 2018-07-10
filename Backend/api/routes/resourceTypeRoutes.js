const express = require('express');
const ResourceType = require('../models/resourceType');

module.exports = function(app, route) {
    var resourceTypeList = require('../controllers/resourceTypeController');

    app.route(route + '/resourcetypes')
        .get(resourceTypeList.list_all_resource_types)
        .post(resourceTypeList.create_a_resource_type);

    app.route(route + '/resourcetypes/:resourceTypeId')
        .get(resourceTypeList.read_a_resource_type)
        .put(resourceTypeList.update_a_resource_type)
        .delete(resourceTypeList.delete_a_resource_type);
}