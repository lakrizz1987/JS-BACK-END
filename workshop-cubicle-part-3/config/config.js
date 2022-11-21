const configServer = {
    dev: {
        'PORT': 5000,
        'SECRET': 'ralphunek',
        'SALT_ROUNDS': 3
    },
    prod: {
        'PORT': 80,
        'SECRET': 'ralphunek',
        'saltRounds': 3
    }
};

module.exports = configServer[process.env.NODE_ENV];