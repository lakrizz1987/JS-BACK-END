const configServer = {
    dev: {
        'PORT': 5000,
        'SECRET': 'ralphunek'
    },
    prod: {
        'PORT': 80,
        'SECRET': 'ralphunek'
    }
};

module.exports = configServer[process.env.NODE_ENV];