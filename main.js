var express = require('express');
var app = express();
var pg = require('pg'); 

//var conString = "postgres://root:password@mydb.crjstpn2rff4.us-east-2.rds.amazonaws.com:5432/MyDB";

//var conString = "postgres://arvind:password@arvind-aws-dbinstance.clwbdwqnd08j.us-east-2.rds.amazonaws.com:5432/ebdb";

var conString = "postgres://root:password@aachli8f0ceg7i.crjstpn2rrf4.us-east-2.rds.amazonaws.com:5432/ebdb";

app.get('/', function(req, res){
   var user = req.params.user;
   //console.log("hi");
   db(user,res);
   //res.send("Hi");
   
});
function db(user,res){ 
	var client = new pg.Client(conString);
	client.connect(function(err) {
	  if(err) {
		return console.error('could not connect to postgres', err);
	  }
	  client.query('SELECT * FROM COMPANY', function(err, result) {
		if(err) {
		  return console.error('error running query', err);
		}
		console.log(result.rows[0]);
		res.send(result.rows);
		//output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
		client.end();
	  });
	});
}
var port = process.env.port || 8081;

app.listen(port);