var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/plain'});
    response.end("Hello Its Pranali...Have a nice day!!");
}).listen(8080);
console.log("Server started");
