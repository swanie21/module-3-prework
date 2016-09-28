'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
    fulfill(promiseTwo());
});

function promiseTwo() {
  console.log('MAIN PROGRAM');
}

promise.then(console.log);
