// server.js (Express 4.0)
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users                   // log every request to the console
app.use(bodyParser.json())    // parse application/json

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

