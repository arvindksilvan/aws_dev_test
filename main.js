var express = require('express');
var app = express();
var pg = require('pg'); 

//var conString = "postgres://root:password@mydb.crjstpn2rff4.us-east-2.rds.amazonaws.com:5432/MyDB";

//var conString = "postgres://arvind:password@arvind-aws-dbinstance.clwbdwqnd08j.us-east-2.rds.amazonaws.com:5432/ebdb";

var conString = "postgres://root:password@aa17gf7d0ugh9hp.crjstpn2rrf4.us-east-2.rds.amazonaws.com:5432/ebdb";

app.get('/', function(req, res){
   var user = req.params.user;
   //db(user,res);  
   simulate_db(user,res);
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
		client.end();
	  });
	});
}

function simulate_db(user,res){ 
	var users = JSON.parse("./dev_db/db.json");
	console.log(users);
	
}
var port = process.env.port || 8081;

app.listen(port);