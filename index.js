var mysql = require("mysql2");
var inquirer = require("inquirer");

var connection = mysql.createConnection({

    host: "localhost",
    // port
    port: 3306,
    // username
    user: "root",
    // password
    password: "password",
    database: "employee_tracker"
  });
  
  
  connection.connect((err) => {
    if (err) throw err;
  
    runSearch();
  });