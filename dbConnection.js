const express = require('express');
const {getDB} = require('./Database');
const app = express();
const Routes = express.Router();
const dbo = require('./Database');



Routes.route('/').get(async (_req,res)=>{
    const dbConnect = dbo.getDB();
    dbConnect
        .collection('customers')
        .find({}).limit(50)
        .toArray((err,result)=>{
            if(err){

                res.status(400).send("Error fetching listings!");
            }else{
                console.log('connected');
                res.json(res);
            }
        })

})



app.listen(5000,()=>{
    console.log('server listen at port 5000');
});