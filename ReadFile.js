const {readFile} = require('fs');

//callback function
//So we read the file and we launch the callback function to read the error and the data
readFile('./content/first.txt', 'utf8', (err, data)=>{
    if (err){
        return;
    }else{
        console.log(data);
    }
})