const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const urlBase = url.parse(req.url)
    const path = urlBase.pathname;
    if (path === '/' && req.method === 'GET') {
        fs.readFile('./HelloWorld.html', (err, data) => {
            if(err){
                alert('Some Error');
                return
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data);
            res.end();
        })
       
    } else if (path === '/cat') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.write('Hello Cats');
        res.end();
    }else{
        res.writeHead(404)
        res.write(`<h1>No Data!</h1>`)
        res.end()
    }


}).listen(5000, () => console.log('Server is running on port 5000...'))