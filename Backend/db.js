const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.uri).catch((err) => console.log(err));
mongoose.Promise = global.Promise;