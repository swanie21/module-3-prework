'use strict';

function attachTitle(firstArg) {
  return 'DR. ' + firstArg;
}

var promise = new Promise(function (fulfill, reject) {
  fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);
