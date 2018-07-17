module.exports = function(router, route) {
    route += '/resourcetypes';
    const routeWithParam = route + '/:resourceTypeId';

    var resourceTypeList = require('../controllers/resourceTypeController');

    router.get(route, resourceTypeList.list_all_resource_types);
    router.post(route, resourceTypeList.create_a_resource_type);

    router.get(routeWithParam, resourceTypeList.read_a_resource_type);
    router.put(routeWithParam, resourceTypeList.update_a_resource_type);
    router.delete(routeWithParam, resourceTypeList.delete_a_resource_type);
}