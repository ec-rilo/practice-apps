const path = require("path");
require("dotenv").config({ path: path.join(__dirname, '../example.env') });
const express = require("express");
const app = express();
const words = require('./seed-script');

// Controllers
const controller = require('./controllers/controller');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.post('/words', (req, res) => controller.words.post(req, res));

/****
 *
 *
 * Other routes here....
 *
 *
 */

// Seeds data into database

// Promise.all(words)
// .then((res) => {
//   console.log('posted!', res);
// })
// .catch((err) => {
//   console.error(err);
// });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
