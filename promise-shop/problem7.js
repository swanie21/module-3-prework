'use strict';

var originalPromise = first();

var secondPromise = originalPromise.then((val) => {
  return second(val);
});

secondPromise.then(console.log);
