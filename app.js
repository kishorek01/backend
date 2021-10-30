const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.get('/', function (req, res) {
    res.send('hello world')
  })
module.exports = app;