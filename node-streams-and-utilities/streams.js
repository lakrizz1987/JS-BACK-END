const fs = require('fs');

const readStream = fs.createReadStream('./HelloWorld.html', {encoding:'utf-8'});

readStream.on('data', (data)=>{
    console.log(data)
})

readStream.on('end',()=>{
    console.log('Reading End!')
})