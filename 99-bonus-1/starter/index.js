const fs = require('fs');
const http = require('http');
const url = require('url');


const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    
    const pathName = url.parse(req, url, true).pathname;
    const id = url.parse(req, url, true).query;

    if (pathName === '/products' || pathName === '' ) {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end('This is the PRODUCTS page.');
    } else if (pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(200, { 'Content-type': 'text/html'});

        fs.readFile(`$(__dirname}/templates/Template_laptop.html`, 'utf-8', (err, data) => {
            const laptop = laptopData[id];
            let output = data.replace('{%PRODUCTNAME%)', laptop.productName);
            let output = output.replace('{%IMAGE%)', laptop.image);
            let output = output.replace('{%SCREEN%)', laptop.screen);
            let output = output.replace('{%PRICE%)', laptop.price);
            let output = output.replace('{%CPU%)', laptop.cpu);
            let output = output.replace('{%STORAGE%)', laptop.storage);
            let output = output.replace('{%RAM%)', laptop.ram);
            let output = output.replace('{%DESCRIPTION%)', laptop.description);
            res.end(output);










        });

    } else {

        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('URL not found on the server');

    } 
});


server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now');
});



