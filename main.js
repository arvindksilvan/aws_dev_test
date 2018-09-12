var express = require('express');
var app = express();
var db = require('./queries');


//GET 
app.get('/',db.getAllUsers);
app.get('/users', db.getAllUsers);
app.get('/users/:id', db.getSingleUser);

var port = process.env.port || 8081;

app.listen(port);