//Event driven

const eventEmitter = require('events');
const customEvent = new eventEmitter;

customEvent.on('response',()=>{
    console.log("hello");

})
customEvent.emit('response');