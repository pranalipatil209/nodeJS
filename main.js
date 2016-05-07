var events = require('events');

var eventEmitter = new events.EventEmitter();

var eventHandler = function connected(){
  console.log("Connection successfull");
  eventEmitter.emit('data_received');
};

eventEmitter.on('connection',eventHandler);
eventEmitter.on('data_received',function(){
  console.log('data recieved succesfully');
});
 eventEmitter.emit('connection');
 console.log("Program ended!");
