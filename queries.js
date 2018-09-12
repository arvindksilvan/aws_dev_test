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
	const values = []
	db_initialise(res,query,values);

}

function getSingleUser(req,res){
	const params = req.params.id;
	const query = 'INSERT INTO COMPANY(id, name, age, salary) VALUES($1, $2, $3, $4) RETURNING *';
	const values = [4, "Arvind", 24, 25000]
	db_initialise(res,query,values);
}
module.exports = {
	getAllUsers: getAllUsers,
	getSingleUser: getSingleUser
};