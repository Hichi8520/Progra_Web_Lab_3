var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {    
    res.writeHead(200, {'Content-Type': 'application/json'});

    if (req.url == '/') {
        fs.readFile('input.html', function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if (req.url.startsWith('/input/?finput=')) {
        var q = url.parse(req.url, true).query;
        var txt = q.finput;

        res.end(txt);
    }
    else {
        res.write("Ingresar a la ruta: /hello/:name");
        res.end();
    }
}).listen(8080);