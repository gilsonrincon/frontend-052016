var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>Hola</h1>');
}).listen(3000);

console.log('Running on: http://localhost:3000');