const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config'); 

mongoose.connect(config.get('mongoose.uri')).catch((err) => console.log(err));
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message});
});

app.get('/', function(req, res) {
    res.send('API works.');
});

console.log('Listening on port 8080');
app.listen(process.env.PORT || 8080);