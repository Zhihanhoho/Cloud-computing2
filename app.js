var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'hanhancloud2.c73ewp7kxw9y.us-east-2.rds.amazonaws.com',
  user     : 'hezhihan',
  password : 'hezhihan233',
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();