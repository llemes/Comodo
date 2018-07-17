const accessRules = require('./access-rules/organisationAccess');

module.exports = function(router, route) {
    route += '/organisations';
    
    var organisationList = require('../controllers/organisationController');

    // mount middleware
    router.put(route + '/:organisationId', accessRules.administrator_of_organisation_only);
    router.delete(route + '/:organisationId', accessRules.administrator_of_organisation_only);

    // define routes
    router.get(route, organisationList.list_all_organisations);
    router.post(route, organisationList.create_an_organization);

    router.get(route + '/:organisationId', organisationList.read_an_organisation);
    router.put(route + '/:organisationId', organisationList.update_an_organisation);
    router.delete(route + '/:organisationId', organisationList.delete_an_organisation);
}