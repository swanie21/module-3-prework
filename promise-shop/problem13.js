'use strict';

var port1 = require('q-io/http');

port1.read('http://localhost:7000')
  .then(function(id) {
    return port1.read('http://localhost:7001/' + id);
  })
  .then(function(json) {
    console.log(JSON.parse(json));
  })
  .then(null, console.error)
  .done();
