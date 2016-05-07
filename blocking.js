var http = require('http');
var url = require('url');

http.createServer(function(request,response){
  response.writeHead(200,{"content-Type":"text/plain"});
  if(url.parse(request.url).pathname=='/wait'){
    var startTime = new Date().getTime();
    while(new Date().getTime()<startTime+15000);
    response.write("Thanks for waiting!!!");
  }
  else{
    response.write("Hello, Its Pranali!!");
  }
  response.end();
}).listen(8080);
console.log("Server started");
