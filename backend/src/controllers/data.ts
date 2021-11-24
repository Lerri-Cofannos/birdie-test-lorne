import * as express from "express";

export const dataController = express.Router();

dataController.get('/all', (_, res) => {
  res.status(200).json({
    data: 'This is all the data'
  });
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  user     : 'dbuser',
  password : 'xnxPp6QfZbCYkY8'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();