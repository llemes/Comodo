const accessRules = require('./access-rules/generalRules');
const organisationRules = require('./access-rules/organisationAccess');

module.exports = function(router, route) {
    route += '/organisations';
    const routeWithParam = route + '/:organisationId';
    
    var organisationList = require('../controllers/organisationController');

    // mount middleware
    // router.put(routeWithParam, organisationRules.member_of_organisation_only);
    // router.delete(routeWithParam, organisationRules.member_of_organisation_only);
    // router.put(routeWithParam, accessRules.administrator_only);
    // router.delete(routeWithParam, accessRules.administrator_only);

    // define routes
    router.get(route, organisationList.list_all_organisations);
    // router.post(route, organisationList.create_an_organization);
    // router.get(routeWithParam, organisationList.read_an_organisation);
    // router.put(routeWithParam, organisationList.update_an_organisation);
    // router.delete(routeWithParam, organisationList.delete_an_organisation);
}