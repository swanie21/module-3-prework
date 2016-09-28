'use strict';

var express = require('express');
var app = express();

app.get('/search', function(req, res) {
  var data = req.queryexpresswor;
  res.send(data);
});

app.listen(process.argv[2]);
