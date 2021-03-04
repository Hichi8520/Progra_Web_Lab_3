var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  const name = "Luis";

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime() + name);
  res.end();
}).listen(8080);