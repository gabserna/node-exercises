const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('secondEvent', () => {
    console.log("secondEvent emitted")
});

myEmitter.on('event', function(a, b, c) {
    console.log(a, b, c, this);
});
myEmitter.on('event', function(a, b, c) {
    console.log("registered second!");
});
myEmitter.on('error', () => {
    console.log("An error ocurred");
});

myEmitter.emit('event', 'a', 'b', 5464784);
myEmitter.removeAllListeners('secondEvent');
myEmitter.emit('event', 4, false);
myEmitter.emit('error');
myEmitter.emit('event');
myEmitter.emit('secondEvent');