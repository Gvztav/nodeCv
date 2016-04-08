// server.js (Express 4.0)
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users                   // log every request to the console
app.use(bodyParser.json())    // parse application/json

app.listen(5000);   
console.log('Magic happens on port 8080');          // shoutout to the use
