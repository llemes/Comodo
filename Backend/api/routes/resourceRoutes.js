module.exports = function(router, route) {
    route += '/resources';

    var resourceList = require('../controllers/resourceController');

    router.get(route, resourceList.list_all_resources);
    router.post(route, resourceList.create_a_resource);
    
    router.get(route + '/:resourceId', resourceList.read_a_resource);
    router.put(route + '/:resourceId', resourceList.update_a_resource);
    router.delete(route + '/:resourceId', resourceList.delete_a_resource);
}