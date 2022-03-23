const path = require("path");
require("dotenv").config({ path: path.join(__dirname, '../example.env') });
const express = require("express");
const app = express();

// Controllers
const controller = require('./controllers/controller');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.post('/words', (req, res) => controller.words.post(req, res));
app.get('/words', (req, res) => controller.words.get(req, res));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
