const express = require('express');

const configServer = require('./config/config');
const configHandlebars = require('./config/configHandlebars');

const app = express();
configHandlebars(app);


app.get('/', (req,res)=>{
    res.send('test')
})



app.listen(configServer.PORT, ()=>console.log(`Server is running on port ${configServer.PORT}...`))

