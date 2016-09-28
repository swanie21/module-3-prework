'use strict';

var promise = Promise.resolve('SECRET VALUE');

var promise = Promise.reject(new Error('NO SECRET VALUE'));

promise.catch(function (error) {
  console.error('THERE IS AN ERROR!');
  console.error(error.message);
});
