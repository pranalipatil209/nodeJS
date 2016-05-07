var http = require('http');
var fileSystem = require('fs');

http.createServer(function(request,response){
  response.writeHead(200,{'Content_Type':'text/plain'});
  var read_stream = fileSystem.createReadStream('mfile.txt');
  read_stream.on('data',writecallback);
  read_stream.on('close',closecallback);
  function writecallback(data){
    response.write(data);
    response.write("PRANALI PATIL =)");
  }
  function closecallback(){
    response.end();
  }
}).listen(8080);
console.log("Server has started...");


///////////
// var http = require('http');
// var fileSystem = require('fs');
//
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//
//     var read_stream = fileSystem.createReadStream('myfile.txt');
//     read_stream.on('data', writeCallback);
//     read_stream.on('close', closeCallback);
//
//     function writeCallback(data){
//         response.write(data);
//     }
//
//     function closeCallback(){
//         response.end();
//     }
//
// }).listen(8080);
//
// console.log('Server started');
