// ./routes/index.js
//nunca olvidar esto, para usar router.
var express = require('express')
var router = express.Router();
var Todo = require('../models/Todo.js');
var Experiencia = require('../models/Experiencia.js');
var Conocimiento = require('../models/Conocimiento.js');
var Herramienta = require('../models/Herramienta.js');


/*router.get('/', function(req, res) {
  res.render('index', { title: 'Pagina Principal'});
  //res.send('hello world');
});*/

router.get('/', function(req, res) {
  res.render('paginaPrincipal', { title: 'Pagina Principal'});
});

module.exports = router;