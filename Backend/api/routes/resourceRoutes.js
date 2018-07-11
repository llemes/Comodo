module.exports = function(app, route) {
    route += '/resources';

    var resourceList = require('../controllers/resourceController');

    app.route(route)
        .get(resourceList.list_all_resources)
        .post(resourceList.create_a_resource);
    
    app.route(route + '/:resourceId')
        .get(resourceList.read_a_resource)
        .put(resourceList.update_a_resource)
        .delete(resourceList.delete_a_resource);
}