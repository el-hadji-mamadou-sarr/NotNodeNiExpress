//Event Loop
//So the event loop make things easier for the applcation to run fluid
//it starts to log the first
//then read the timeout
//continue and then at the end read what was in the timeout
//So synchronous app works that way.
console.log("first");

setTimeout(()=>{
    console.log("second");
},0)
console.log("third");