var http = require('http');
var url = require('url');

http.createServer(function (req, res) {    
    res.writeHead(200, {'Content-Type': 'application/json'});

    if (req.url.startsWith('/hello/:')) {
        var arr = req.url.split(':');
        var result = arr[1];
        res.end(JSON.stringify({ hello: result }));
    }
    else {
        res.write("Ingresar a la ruta: /hello/:name");
        res.end();
    }
}).listen(8080);