const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {

    res.send(`<h1>Hello ${req.cookies.username || 'unnamed'}!</h1>`)
});

app.get('/login/:name', (req, res) => {
    res.cookie('username', req.params.name);
    res.send('Loged in!')
})


app.listen(5000, () => console.log('Server is running on port 5000...'))