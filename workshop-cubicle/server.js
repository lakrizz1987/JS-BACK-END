const { application } = require('express');
const express = require('express');
const configServer = require('./config/config');

const app = express();

app.get('/', (req,res)=>{
    res.send('test')
})



app.listen(configServer.PORT, ()=>console.log(`Server is running on port ${configServer.PORT}...`))

