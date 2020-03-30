const mysql = require('mysql');
module.exports = {
	con: mysql.createConnection({
		host     : '34.76.151.91',
		user     : 'inactivityuser',
		password : 'inactivityuser',
		database : 'inactivity'
	})
};