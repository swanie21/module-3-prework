'use strict';

var localhost = require('q-io/http');

localhost.read('http://localhost:1337')
  .then(function(json) {
    console.log(JSON.parse(json));
  })
  .then(null, console.error)
  .done();
