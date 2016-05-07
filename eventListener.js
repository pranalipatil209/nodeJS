var events = require('events');
var eventEmitter = new events.EventEmitter();

var listner1 = function listner1(){
  console.log("listener1 executed");
}

var listner2 = function listner2(){
  console.log("listener2 executed");
}
// eventEmitter.addListener('connection',listener1);
eventEmitter.addListener('connection', listner1);
eventEmitter.on('connection',listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listner1);
console.log("Listener1 wont listen now.");


var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
eventEmitter.emit('connection');

console.log("Program Ended");
