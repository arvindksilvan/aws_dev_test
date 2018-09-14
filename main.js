var express = require('express');
var app = express();
var bodyParser = require('express/node_modules/body-parser');
var db = require('./queries');

//@indicate configuration
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));
//@for POST parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', db.getAllUsers);
app.get('/users/:id', db.getSingleUser);

//test
app.get('/test', db.test);
app.post('/addUser', db.addUser);

var port = process.env.port || 8081;

app.listen(port);