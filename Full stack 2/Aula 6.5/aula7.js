var http = require('http');
var fs = require('fs');

fs.readFile('pagina1.html', function (err, html) {

if (err) throw err;

http.createServer(function(request, response) {
response.writeHeader(200, {"Content-Type": "text/html"});
response.write(html);
response.end();
}).listen(8080);
});