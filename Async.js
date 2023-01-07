const {readFile,writeFile} = require('fs')

const util = require('util');
const fs = require('fs');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const val = async ()=>{
    try{
        const first = await readFilePromise('./content/first.txt','utf8');
        const second = await readFilePromise('./content/second.txt','utf8');
        await writeFilePromise('./content/result.txt',` hello: ${first} and ${second}`);
        console.log(first,second);
    }catch (err){
        console.log(err)
    }
}

val();


//We can return a promise, or we can use the node module to promise

/*const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}*/

//getText('./content/first.txt')
//  .then((result)=>{console.log(result)})
//.catch((err)=>console.log(err))