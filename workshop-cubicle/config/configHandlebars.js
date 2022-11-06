const handlebars = require('express-handlebars');

function configHandlebars(app) {
    app.engine('handlebars', handlebars.engine({
        extname: 'hbs'
    }))
    app.set('view engine', 'handlebars');
}

module.exports = configHandlebars;