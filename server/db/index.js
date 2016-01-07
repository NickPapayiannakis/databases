var mysql = require('mysql');

exports.dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});