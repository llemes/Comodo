var mongoose = require('mongoose');
var Log = mongoose.model('Log');

exports.get_all_logs = function(req, res) {
    Log.find({}, function(err, logs) {
        if(err) {
            return res.send(err);
        }
        res.json(logs);
    });
}