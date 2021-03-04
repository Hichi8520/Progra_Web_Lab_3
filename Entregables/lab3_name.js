var http = require('http');
var url = require('url');

http.createServer(function (req, res) {    
    // la respuesta será en formato json
    res.writeHead(200, {'Content-Type': 'application/json'});

    // verifica que la ruta sea la indicada
    if (req.url.startsWith('/hello/:')) {

        // obtiene y devuelve el nombre especificado en la ruta por el usuario
        var arr = req.url.split(':');
        var result = arr[1];
        res.end(JSON.stringify({ hello: result }));
    }
    // si ingresa a una ruta diferente a la indicada
    else {
        res.write("Ingresar a la ruta: /hello/:name");
        res.end();
    }
}).listen(8080);