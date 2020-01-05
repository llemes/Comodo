const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db.uri).catch((err) => console.log(err));
mongoose.Promise = global.Promise;

// create schemas
const Organisation = require('./api/models/organisation');
const Resource = require('./api/models/resource');
const ResourceType = require('./api/models/resourceType');
const User = require('./api/models/user');
const Log = require('./api/models/log')