const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const https = require('https')
const fs = require('fs')

app.use(cors());

// load config and connect to database
require('dotenv').config();
const db = require('./db');

// body format
app.use(bodyParser.json());

// default page
app.use('/', express.static(__dirname + '/api/views', { index: "default.html" }));

// authentication 
const auth = require('./auth');
auth(app);

// routes
const routes = require('./api/routes/routes');
routes(router);
app.use(router);

// start server
const port = process.env.PORT || 8080;

// we will pass our 'app' to 'https' server
https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'TSTim'
}, app)
.listen(port);

console.log('Listening on port ' + port);