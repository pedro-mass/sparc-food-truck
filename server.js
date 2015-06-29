var express = require('express');
var app = express();

var mongoose = require('mongoose');

var dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost/learn';
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/learn');


app.use(express.static(__dirname + '/client'));

// turn on logging of requests
var morgan = require('morgan');
app.use(morgan('dev'));

// parse form body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// simulate DELETE and PUT
var methodOverride = require('method-override');
app.use(methodOverride());

// ROUTES ===============
require('./server/routes.js')(app);

// startup
app.listen(port);
console.log('App listening on port ' + port);
