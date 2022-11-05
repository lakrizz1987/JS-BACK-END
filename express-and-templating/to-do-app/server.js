const data = require('./data/data')
const express = require('express');
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render('welcome')
});

app.route('/create')
    .get((req, res) => {

        res.render('form', { todos: data.getAll() })
    })
    .post((req, res) => {
        const todo = req.body.name
        data.addTodo(todo)
        res.redirect('/create')
    })










app.listen(5000, () => console.log('Server is running on port 5000...'))