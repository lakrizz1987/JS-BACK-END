const fs = require('fs');

const readStream = fs.createReadStream('./HelloWorld.html', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./pipe.html')

//readStream.on('data', (data) => {
//    console.log(data)
//    writeStream.write(data)
//})

//readStream.on('end', () => {
//    console.log('Reading End!')
//})

//writeStream.write('Hello form Stream!')

readStream.pipe(writeStream)



