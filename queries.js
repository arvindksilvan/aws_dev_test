var pg = require('pg');

var conString = "postgres://root:password@aa17gf7d0ugh9hp.crjstpn2rrf4.us-east-2.rds.amazonaws.com:5432/ebdb";

function db_initialise(res,query){
	var client = new pg.Client(conString);
	client.connect(function(err) {
	  if(err) {
		return console.error('could not connect to postgres', err);
	  }
	  client.query(query, function(err, result) {
		if(err) {
		  return console.error('error running query', err);
		}
		res.send(result.rows);
		client.end();
	  });
	});
}

function getAllUsers(req,res){
	var query = 'SELECT * FROM COMPANY';
	db_initialise(res,query);

}

function getSingleUser(req,res){
	var params = req.params.id;
	var query = 'SELECT * FROM COMPANY WHERE id =' + params;
	db_initialise(res,query);
}
module.exports = {
	getAllUsers: getAllUsers,
	getSingleUser: getSingleUser
};