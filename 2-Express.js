const express = require('express');
const app = express();
const path = require('path');

//Méme si on ne met pas la route / pour home si le serveur détecte un fichier index dans le repertoir static
//Il va servir de point d'entrée de l'application
app.use(express.static('./public'));

app.all('*',(req, res)=>{
    res.send('no page found');
})

app.listen(5000,()=>{
    console.log('app listening at port 5000...')
})