'use strict';

var express = require('express');
var app = express();

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  var computeKey = require('crypto')
   .createHash('sha1')
   .update(new Date().toDateString() + id)
   .digest('hex');
  res.send(computeKey);
});

app.listen(process.argv[2]);
