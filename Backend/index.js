const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
const db = require('./db');

app.use(cors);
app.use(bodyParser.json());

var options = {
    index: "default.html"
};
  
app.use('/', express.static('public', options));
  
const routes = require('./api/routes/routes');
routes(app);

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port ' + port);