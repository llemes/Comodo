const express = require('express');
const User = require('../models/user');

module.exports = function(app, route) {
    var userList = require('../controllers/userController');

    app.route(route + '/users')
        .get(userList.list_all_users)
        .post(userList.create_a_user);
        
    app.route(route + '/users/:userId')
        .get(userList.read_a_user)
        .put(userList.update_a_user)
        .delete(userList.delete_a_user);
}