const express = require('express');
const checkForIdMiddleware = require('./middlewares/checkForIdMiddleware')
const app = express();

app.use('/static', express.static('public'))

app.use((req, res, next) => {
    console.log('Hii middleware!')
    next()
})

app.get('/', (req, res) => {
    res.status(200);
    res.send('<h1>Hello from Express!</h1>');
})

app.post('/create', (req, res) => {
    res.status(201);
    res.send('<h1>Data created!</h1>')
})

app.get('/user/:name?', checkForIdMiddleware, (req, res) => {
    res.status(200);
    const name = req.params.name;
    res.send(`<h1>Hello ${name.toUpperCase()}</h1>`)
})

app.route('/chain')
    .get((req, res) => {
        res.send('<h1>Cahin GET</h1>')
    })
    .post((req, res) => {
        res.send('<h1>Cahin POST</h1>')
    })


app.get('/download', (req, res) => {
    res.download('./logo-express.png');
    //res.attachment('./logo-express.png', {root: __dirname});
})

app.get('/view', (req, res) => {
    res.sendFile('./form.html', { root: __dirname })
})

app.get('/redirect', (req, res) => {
    res.redirect('/');
})

app.listen(5000, () => console.log('Server is running on port 5000...'))