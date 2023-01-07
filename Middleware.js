//Middleware

const express = require('express')
const morgan = require('morgan')
const app = express();


//so we have request => middleware => response
//So middleware are functions we pass to the app ??
//after using a middleware we must always pass it to the next middleware
//and we can pass the middle ware to all our routes by using app.use
//So if i place the app.use afer the first app.get, i won't have the middleware
//because in express everything goes in order
//We can appy the middleware to some routes like app.use('/api',logger)
//and it applies it to all routes starting with /api
//Test middleware morgan
const logger = (req,res,next)=>{
    console.log(req.url)
    next();
}
app.use(morgan('tiny'));



app.get('/',(req, res)=>{
    return res.send('Home')
})
app.get('/about',(req, res)=>{
    return res.send('About')
})

app.listen(5000,()=>{
    console.log('app listening at port 5000....')
})