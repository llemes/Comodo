module.exports = function(router, route) {
    route += '/resourcetypes';

    var resourceTypeList = require('../controllers/resourceTypeController');

    router.get(route, resourceTypeList.list_all_resource_types);
    router.post(route, resourceTypeList.create_a_resource_type);

    router.get(route + '/:resourceTypeId', resourceTypeList.read_a_resource_type);
    router.put(route + '/:resourceTypeId', resourceTypeList.update_a_resource_type);
    router.delete(route + '/:resourceTypeId', resourceTypeList.delete_a_resource_type);
}