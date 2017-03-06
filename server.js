// server.js (Express 4.0)
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
var db
app.set('port', (process.env.PORT || 3000));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');


app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users                   // log every request to the console
app.use(bodyParser.urlencoded({ extended: true }))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    // parse application/json
app.use(methodOverride());                  // simulate DELETE and PUT

var mongoose = require('mongoose'); 
//var Todo = require('./public/models/Todo.js');

//Import Routes
var routes = require('./public/routes/index');
var todos = require('./public/routes/todos');
var experiencias = require('./public/routes/experiencias');
var conocimientos = require('./public/routes/conocimientos');
var herramientas = require('./public/routes/herramientas');

//Routes
app.use('/', routes);
//servicios
app.use('/todos', todos);
app.use('/experienciasDAO', experiencias);
app.use('/conocimientosDAO', conocimientos);
app.use('/herramientasDAO', herramientas);


// fin de routes

mongoose.connect('mongodb://gus90:legacy@ds157799.mlab.com:57799/cvonline', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  else{
 	console.log('Conexion exitosa a base de datos');

  }
	app.listen(app.get('port'), function() {
	  console.log('Node app is running on port', app.get('port'));
	});
})
