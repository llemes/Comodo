const User = require('./api/models/user');
const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = function(app) {

    // login route
    app.route('/login').post(function(req, res) {

        var query = {};
        if(req.body.username) query.username = req.body.username;
        if(req.body.email) query.email = req.body.email;

        User.findOne(query, function(err,user) {
            if (err) return res.status(500).send('Error on the server.'); 
            if (!user) return res.status(404).send('No user found.'); 

            var passwordValid = user.verifyPassword(req.body.password); 
            if (!passwordValid) return res.status(401).send({ auth: false, token: null });

            var token = jwt.sign({ id: user._id }, config.app.secret, { expiresIn: 86400 });

            res.status(200).send({ auth: true, token: token });
        });
    });

    // register route
    app.route('/register').post(function(req, res) {
        var newUser = new User(req.body);
        newUser.save(function(err, user) {
            if(err) {
                res.send(err);
                return;
            }
            res.json(user);
        });
    })

    // middleware
    app.use('/', function(req, res, next) {

        var token = req.headers['x-access-token']
        if (!token) {
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        }
    
        jwt.verify(token, config.app.secret, function(err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            
            return next();
            //res.status(200).send(decoded);
        });
        
    });

}