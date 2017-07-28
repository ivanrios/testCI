var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('Servidor Activoxasda');
});

var server = app.listen(3000, function(){
  console.log('La magia inicia en el puerto 3000');
});

exports.closeServer = function(){
  server.close();
};