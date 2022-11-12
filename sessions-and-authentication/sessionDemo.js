const express = require('express');
const cookieParser = require('cookie-parser');

const sessionData = {};

function sessionMiddleware(req, res, next) {
    if (!req.cookies.id) {

        const cookieId = Math.random().toString();
        sessionData[cookieId] = {};

        res.cookie('id', cookieId);

    } else {
        req.data = sessionData[req.cookies.id]
    }
    console.log('set')
    next()
}

const app = express();
app.use(cookieParser());
app.use(sessionMiddleware);

app.get('/', (req, res) => {

    res.send(`<h1>Hello ${req.data?.username || 'unnamed'}!</h1>`)
});

app.get('/login/:name', (req, res) => {
    // console.log(req.data)
    req.data.username = req.params.name;
    // console.log('/////////////////////')
    // console.log(req.data)

    res.send('Loged in!');
})


app.listen(5000, () => console.log('Server is running on port 5000...'))