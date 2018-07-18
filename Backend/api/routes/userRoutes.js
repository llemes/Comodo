const accessRules = require('./access-rules/generalRules');
const userRules = require('./access-rules/userAccess');

module.exports = function(router, route) {
    route += '/users';
    const routeWithParam = route + '/:userId';

    var userList = require('../controllers/userController');

    // mount middleware
    router.delete(routeWithParam, accessRules.administrator_only);
    router.put(routeWithParam, userRules.alter_self_only);

    // define routes
    router.get(route, userList.list_all_users)
    router.post(route, userList.create_a_user);
        
    router.get(routeWithParam, userList.read_a_user);
    router.put(routeWithParam, userList.update_a_user);
    router.delete(routeWithParam, userList.delete_a_user);
}