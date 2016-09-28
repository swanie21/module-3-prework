'use strict';

var error = console.log('REJECTED!');

var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    reject(onReject(error));
  }, 300);
});

function onReject(error) {
  return new Error(error);
}

promise.then(null, () => reject(onReject()));
