var express = require('express');
var app = express();
var pgp = require('pg-promise')
//var connectionString = 'postgres://localhost:5432/puppies';
var conString = "postgres://root:password@aa17gf7d0ugh9hp.crjstpn2rrf4.us-east-2.rds.amazonaws.com:5432/ebdb";
var db = pgp(conString);


app.get('/', function(req, res){
  db.any('select * from company')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

var port = process.env.port || 8081;

app.listen(port);
