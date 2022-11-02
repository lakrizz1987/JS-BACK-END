const fs = require('fs');

/* fs.mkdir('./myDir',(err)=>{
if(err){
        return console.error(err.message)
    }
}) */

fs.readdir('.' , (err,data)=>{
    if(err){
        return console.error(err.message)
    }

    console.log(data)
})

//fs.renameSync('./test.txt' , './test1.txt')


fs.writeFileSync('./test1.txt', 'Ivo is studing!')
fs.writeFileSync('./myDir/demo.txt', 'test test')