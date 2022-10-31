const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


const port = 5000;

http.createServer((req, res) => {
    const urlPath = url.parse(req.url).path;
    console.log(req.url)
    if (urlPath === '/') {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                console.log(err)
                return
            }

            res.write(data);
            res.end()
        })
        

    } else if (urlPath === '/add-breed') {
        fs.readFile("./addBreed.html", (err, data) => {
            if (err) {
                console.log(err)
                return
            }

            res.write(data);
            res.end();
        })
    } else if (urlPath === '/add-cat') {
        fs.readFile("./addCat.html", (err, data) => {
            if (err) {
                console.log(err)
                return
            }

            res.write(data);
            res.end();
        })
    }
    
    if (req.url == '/site.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('./site.css'));
        res.end();
    }
}).listen(port, () => console.log(`Server is running on port ${port}`));