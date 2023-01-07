const http = require('http');

const server = http.createServer((req, res)=>{
    //req is what is coming
    //res is what we are sending
    //This callback is what the server do after creation its like a reaturn function
    if(req.url==='/'){
        res.end('hello world');
    }

})

server.listen(5000,()=>{
    console.log("server listening on port 5000 ....")
});