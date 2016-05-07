var http = require('http');
var url =  require('url')
var cp = require('child_process');

function onRequest(request,response){
  var pathname = url.parse(request.url).pathname;
  if(pathname=='/wait'){
      cp.exec('node block.js',mycallback);
  }
  else{
    response.writeHead(200,{"content-Type":"text/plain"});
    response.write("Heya, Its Pranali Patil\n");
    response.end();
  }
  console.log("new Connection");
  function mycallback(){
    response.writeHead(200,{"content-Type":"text/plain"});
    response.write("Thank You for waiting..");
    response.end();
  }
}
  http.createServer(onRequest).listen(8080);
  console.log("Server has started..");
