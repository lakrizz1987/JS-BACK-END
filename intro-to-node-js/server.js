const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const urlBase = url.parse(req.url)
    const path = urlBase.pathname;
    if (path === '/') {
        res.write('Hello World');
        res.end();
    } else if (path === '/cat') {
        res.write('Hello Cats');
        res.end();
    }


}).listen(5000, () => console.log('Server is running on port 5000...'))