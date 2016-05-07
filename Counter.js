var http = require('http');
var userCount=0;
http.createServer(function(request,response){
    console.log("new connection");
    userCount++;
    response.writeHead(200,{"content-Type":"text/plain"});
    response.write("Its Pranali");
    response.write("we have had "+userCount+" users visited!!");
    response.end();
}).listen(8080);
console.log("Server started");
