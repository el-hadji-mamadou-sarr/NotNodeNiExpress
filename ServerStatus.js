//let's create the first server
const http = require('http');
const {readFileSync} = require('fs');

const indexPage = readFileSync('./index.html');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(indexPage);
        res.end();
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>hello about</h1>');
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();

    }

})

server.listen(5000);