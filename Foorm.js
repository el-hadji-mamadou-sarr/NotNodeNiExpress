//http methods

const express = require('express')
const {peoples} = require('./data')

const app = express()

//this middleware put the incoming post request into the req body
//If we don't do it we have no excess to the parameters we enter
//in the form
//So his job is to parse the form data into the req
app.use(express.urlencoded({extended:false}))
app.use(express.static('./public'))

app.post('/register',(req, res)=>{

    const {nom, prenom, age} = req.body;

    if(!nom || !prenom || !age){
        return res.send('vous devez entrer les champs');
    }
    return res.send(`
                    <p> nom:${nom}</p>
                    <p> nom:${prenom}</p>
                    <p> nom:${age}</p>

    `);

})
app.listen(5000,()=>{
    console.log('server listening at port 5000....')
})