
const express = require('express');
const handlebars = require("express-handlebars");

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    
    res.render('welcome')
});










app.listen(5000, () => console.log('Server is running on port 5000...'))