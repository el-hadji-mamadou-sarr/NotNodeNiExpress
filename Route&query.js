const express = require('express');
const app = express();
const {peoples, animals} = require('./data')


app.get('/',(req, res)=>{
    //afficher juste les prenoms
    const Prenoms = peoples.map((person)=>{
        const {prenom} = person;
        return prenom;
    })
    res.json(Prenoms);
})


//setting up the route parametter its like a placeholder
//put returns everytime to avoid errorrs
app.get('/person/:personId',(req, res)=>{
    //On récupére le paramétre de l'url
    const {personId} = req.params;
    const person = peoples.find((person)=>person.id === Number(personId));

    if(!person){
        res.status(404).send('cette personne n existe pas dans la base de donnée');
    }
    res.json(person);
})

app.get('/api/v1/query',(req, res)=>{
    const {search} = req.query;

    let newPeople = [...peoples];

    if(search){
        newPeople = newPeople.filter((person)=>{
            return person.prenom.startsWith(search);
        })
    }

    if(newPeople.length < 1){
        return res.status(200)
            .json({success:true, data:[]})
    }
    return res.json(newPeople);
})
app.all('*',(req, res)=>{
    res.status(404)
        .send('page not found')
})

app.listen(5000,()=>{
    console.log('server listening at port 5000....')
})