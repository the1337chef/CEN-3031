var http = require('http');

var userCount = 0;
http.createServer(function (request, response)
{
	console.log('New Connection');
	userCount++;
	
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.write('Hello!\nWe have had ' + userCount +
		' visits!\n');
	response.end();
}).listen(8080);

console.log('Server started');