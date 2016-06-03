var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('../web-site/index.html');
}).listen(3000);

console.log('Running on: http://localhost:3000');