'use strict';

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
  var file = process.argv[3];
  fs.readFile(file, function(e, data) {
    if (e) return res.sendStatus(500);
    try {
      var parseBook = JSON.parse(data);
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(parseBook);
  });
});

app.listen(process.argv[2]);
