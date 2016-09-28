'use strict';

function all (promiseOne, promiseTwo) {
  return new Promise(function (fulfill, reject) {
    var counter = 0;
    var array = [];

    promiseOne.then(function(val) {
      array[0] = val;
      counter++;

      if (counter >= 2) {
        fulfill(array);
      }
    });

    promiseTwo.then(function(val) {
      array[1] = val;
      counter++;

      if (counter >= 2) {
        fulfull(array);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
