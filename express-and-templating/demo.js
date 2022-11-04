const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.send('<h1>Hello from Express!</h1>');
})

app.post('/create', (req, res)=>{
    res.status(201);
    res.send('<h1>Data created!</h1>')
})

app.listen(5000, () => console.log('Server is running on port 5000...'))