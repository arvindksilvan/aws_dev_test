var express = require('express');
var app = express();
var db = require('./queries');

app.get('/users', db.getAllUsers);
var port = process.env.port || 8081;

app.listen(port);