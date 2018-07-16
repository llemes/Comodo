const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// load config and connect to database
require('dotenv').config();
const db = require('./db');

// body format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// default page
app.use('/', express.static(__dirname + '/api/views', { index: "default.html" }));

// authentication middleware
app.use('/', function(req, res, next) {

    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
        res.status(200).send(decoded);
    });
    
});

// routes
const routes = require('./api/routes/routes');
routes(app);

// start server
const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port ' + port);