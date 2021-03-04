var http = require('http');
var url = require('url');
var fs = require('fs');
var bal = require('./balanced');

http.createServer(function (req, res) {    
    res.writeHead(200, {'Content-Type': 'application/json'});

    // al entrar al url básico
    if (req.url == '/') {

        // abrir el doc html con el form para ingresar el texto
        fs.readFile('input.html', function(err, data) {

            // si no encuentra el archivo html en el servidor
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    // al ingrsar el input y hacer clic en el botón se redirecciona a esta ruta
    else if (req.url.startsWith('/input/?finput=')) {

        // se obtiene el texto ingresado
        var q = url.parse(req.url, true).query;
        var txt = q.finput;

        // verificar el balance de llaves
        if (bal.balancedFunc(txt)) {
            res.end('Los paréntesis, llaves y corchetes están balanceados');
        }
        else {
            res.end('Los paréntesis, llaves y corchetes NO están balanceados');
        }
        
    }
    // si ingresa una ruta diferente 
    else {
        res.write("Ingresar a la ruta: /hello/:name");
        res.end();
    }
}).listen(8080);