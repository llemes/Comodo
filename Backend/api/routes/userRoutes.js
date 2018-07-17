module.exports = function(router, route) {
    route += '/users';
    const routeWithParam = route + '/:userId';

    var userList = require('../controllers/userController');

    router.get(route, userList.list_all_users)
    router.post(route, userList.create_a_user);
        
    router.get(routeWithParam, userList.read_a_user);
    router.put(routeWithParam, userList.update_a_user);
    router.delete(routeWithParam, userList.delete_a_user);
}