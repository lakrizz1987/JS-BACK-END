const express = require('express');
const cookieParser = require('cookie-parser');

const configServer = require('./config/config');
const configHandlebars = require('./config/configHandlebars');
const router = require('./routes');
const handlebars = require('express-handlebars');
const Auth = require('./middlewares/auth')

const app = express();
require('./config/configMongoose')(app);
configHandlebars(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', './views');
app.use(cookieParser())
app.use(Auth())

app.use(router);



app.listen(configServer.PORT, () => console.log(`Server is running on port ${configServer.PORT}...`))

