/*//////////////////////////////////////////////////////////////////////////////
// 
	Our Database Interface
// 
//////////////////////////////////////////////////////////////////////////////*/

var mysql = require('mysql');
var UserModel = require('./schemas.users');
var connection = mysql.createConnection({
	host			: 'localhost',
	user 			: '',
	password	: ''
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
	if (err) throw err;

	console.log('The solution is: ', rows[0].solution);
});

connection.end();

exports.users = UserModel;

/*

var mongoose = require('mongoose');
var UserModel = require('./schemas/users');

// Connections
var developmentDb = 'mongodb://localhost/test';
var productionDb = 'urlToYourProductionMongoDb';
var usedDb;

// if development ...
if (process.env.NODE_ENV === 'development') {
	// set db to development
	usedDb = developementDb;
	mongoose.connect(usedDb);
}

// if production ...
if (process.env.NODE_ENV === 'production') {
	// set db to production
	usedDb = productionDb;
	mongoose.connect(usedDb);
}

// get instance of our connection to our Database
var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error'));
// Open the connection
db.once('open', function callback () {
	console.log('Database Connection Successfully Opened at ' + usedDb);
});

exports.users = UserModel;
*/