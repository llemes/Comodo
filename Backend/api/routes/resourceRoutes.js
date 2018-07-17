const accessRules = require('./access-rules/generalRules');

module.exports = function(router, route) {
    route += '/resources';
    const routeWithParam = route + '/:resourceId';

    var resourceList = require('../controllers/resourceController');

    // mount middleware
    router.post(routeWithParam, accessRules.administrator_only);
    router.delete(routeWithParam, accessRules.administrator_only);

    // define routes
    router.get(route, resourceList.list_all_resources);
    router.post(route, resourceList.create_a_resource);
    
    router.get(routeWithParam, resourceList.read_a_resource);
    router.put(routeWithParam, resourceList.update_a_resource);
    router.delete(routeWithParam, resourceList.delete_a_resource);
}