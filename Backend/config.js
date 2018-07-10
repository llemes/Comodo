const config = {
    app: {
        port: 8080
    },
    db: {
        uri: 'mongodb://' + process.env.DATABASE_USERNAME + ':' + process.env.DATABASE_PASSWORD + '@ds231941.mlab.com:31941/comodo'
    }
};

module.exports = config;