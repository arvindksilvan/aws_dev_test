var pg = require('pg');

var conString = "postgres://root:password@aa17gf7d0ugh9hp.crjstpn2rrf4.us-east-2.rds.amazonaws.com:5432/ebdb";

function db_initialise(res,query,values){
	var client = new pg.Client(conString);
	client.connect(function(err) {
	  if(err) {
		return console.error('could not connect to postgres', err);
	  }
	  client.query(query,values, function(err, result) {
		if(err) {
		  return console.error('error running query', err);
		}
		res.send(result.rows);
		client.end();
	  });
	});
}

function getAllUsers(req,res){
	const query = 'SELECT * FROM COMPANY';
	const values = [];
	db_initialise(res,query,values);

}

function getSingleUser(req,res){
	const params = parseInt(req.params.id);
	const query = 'SELECT * FROM COMPANY WHERE id = $1';
	const values = [params]
	db_initialise(res,query,values);
}

/**
//test
function test(req,res){
	var result = '[{"id":1,"name":"Paul","age":23,"salary":20000},{"id":2,"name":"Michael","age":25,"salary":20500},{"id":3,"name":"Joel","age":21,"salary":100},{"id":4,"name":"Arvind","age":24,"salary":25000}]';
	res.send(result);
}
**/
module.exports = {
	getAllUsers: getAllUsers,
	getSingleUser: getSingleUser,
	//test: test
};