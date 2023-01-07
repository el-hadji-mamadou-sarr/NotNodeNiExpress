const express = require('express');
const app = express();
const path = require('path');

//We are telling the server that the static files are in the folder public
//all the static assets are already in public
//so if in the document there is for example style.css
//the server gonna do a request like get localhost/style.css
app.use(express.static('./public'));

app.get('/',(req, res)=>{
    res.status(200)
        .sendFile(path.resolve(__dirname,'./index.html'));
})

app.all('*',(req, res)=>{
    res.status(404)
        .send('page not found');
})
app.listen(5000,()=>{
    console.log('server is listening at port 5000...')
})