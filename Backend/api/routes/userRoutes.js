module.exports = function(app, route) {
    route += '/users';

    var userList = require('../controllers/userController');

    app.route(route)
        .get(userList.list_all_users)
        .post(userList.create_a_user);
        
    app.route(route + '/:userId')
        .get(userList.read_a_user)
        .put(userList.update_a_user)
        .delete(userList.delete_a_user);
}