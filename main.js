var express = require('express');
var app = express();
var db = require('./queries');

//@indicate directories
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));


app.get('/users', db.getAllUsers);
app.get('/users/:id', db.getSingleUser);

//test
app.get('/test', db.test);

var port = process.env.port || 8081;

app.listen(port);