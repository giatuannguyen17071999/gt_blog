"use strict";

var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
  var a = 'tao';
  var b = 'smart';
  var c = a + b;
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});