const accessRules = require('./access-rules/generalRules');

module.exports = function(router, route) {
    route += '/logs';

    var logController = require('../controllers/logController');

    // define routes
    router.get(route, accessRules.administrator_only, logController.get_all_logs)
}