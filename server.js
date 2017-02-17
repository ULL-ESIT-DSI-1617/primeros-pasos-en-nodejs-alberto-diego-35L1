var express = require('express');

// instanciar
var app = express();

app.use(express.static(__dirname + '/gh-pages')); //ponemos ruta por defecto relativa


// escuchar
app.listen(8080);

console.log("Servidor Express escuchando en modo %s", app.settings.env + " por el puerto: 8080");
