const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./api/routes/apiRoutes');

require('dotenv').config();
const db = require('./db');

app.use(cors);
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('API works.');
});

routes(app);

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port ' + port);