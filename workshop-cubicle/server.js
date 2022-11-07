const express = require('express');

const configServer = require('./config/config');
const configHandlebars = require('./config/configHandlebars');
const router = require('./routes');
const handlebars = require('express-handlebars')
const app = express();
configHandlebars(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', './views');
app.use(router)



app.listen(configServer.PORT, () => console.log(`Server is running on port ${configServer.PORT}...`))

