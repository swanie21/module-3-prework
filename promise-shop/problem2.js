'use strict';

var value = console.log('FULFILLED!');
var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    fulfill(value);
  }, 300);
});
  promise.then(() => {
  fulfill(value);
});
