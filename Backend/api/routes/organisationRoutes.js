module.exports = function(app, route) {
    route += '/organisations';
    
    var organisationList = require('../controllers/organisationController');

    app.route(route)
        .get(organisationList.list_all_organisations)
        .post(organisationList.create_an_organization);

    app.route(route + '/:organisationId')
        .get(organisationList.read_an_organisation)
        .put(organisationList.update_an_organisation)
        .delete(organisationList.delete_an_organisation);
}