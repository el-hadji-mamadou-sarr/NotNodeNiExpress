const express = require('express');
const app = express();

//we import the people router =/people
const peopleRouter = require('./Routes/people');

//so we use the base here and in the router we just put what is next
app.use('/people',peopleRouter);

app.listen(5000,()=>{
    console.log('server listening at port 5000...')
})