const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    db.queryAsync(
      "CREATE DATABASE IF NOT EXISTS checkout; "
    )
  )
  .then(() =>
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS billing (" +
      "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
      "credit_card TINYINT, " +
      "expiry_date VARCHAR(25), " +
      "cvv TINYINT, " +
      "billing_zip TINYINT);"
    )
  )
  .then(() =>
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS shipping (" +
      "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
      "line_1 VARCHAR(25), " +
      "line_2 VARCHAR(25), " +
      "city VARCHAR(25), " +
      "state VARCHAR(25), " +
      "zip TINYINT, " +
      "phone TINYINT);"
    )
  )
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
      "name VARCHAR(25), " +
      "email VARCHAR(30), " +
      "password VARCHAR(30), " +
      "checkoutComplete TINYINT DEFAULT 0, " +
      "id_billing INT, " +
      "id_shipping INT, " +
      "FOREIGN KEY (id_billing) " + "REFERENCES billing(id) ON DELETE CASCADE, " +
      "FOREIGN KEY (id_shipping) " + "REFERENCES shipping(id) ON DELETE CASCADE);"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
