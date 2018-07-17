module.exports = function(router, route) {
    route += '/users';

    var userList = require('../controllers/userController');

    router.get(route, userList.list_all_users)
    router.post(route, userList.create_a_user);
        
    router.get(route + '/:userId', userList.read_a_user);
    router.put(route + '/:userId', userList.update_a_user);
    router.delete(route + '/:userId', userList.delete_a_user);
}