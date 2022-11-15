const expresSession = require('express-session');

const express = require('express');
const cookieParser = require('cookie-parser');

const sessionData = {};


const app = express();
app.use(cookieParser());
app.use(expresSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

app.get('/', (req, res) => {

    res.send(`<h1>Hello ${req.session.username || 'unnamed'} - ${req.session.password || '*****'}!</h1>`)
});

app.get('/login/:name/:password', (req, res) => {
    // console.log(req.data)
    req.session.username = req.params.name;
    req.session.password = req.params.password;
    // console.log('/////////////////////')
    // console.log(req.data)

    res.send('Loged in!');
})


app.listen(5000, () => console.log('Server is running on port 5000...'))