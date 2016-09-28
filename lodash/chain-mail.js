'use strict';

var _ = require('lodash');

var chain = function(words) {
  return _.chain(words)
    .map(function(word) {
      return word + 'Chained';
    })
    .map(function(word) {
      return word.toUpperCase();
    })
    .sortBy()
    .value();
};

module.exports = chain;

// ES6 syntax
// const chain = (words) => {
//   return _.chain(words)
//   .map((word) => {
//     return word + 'chained';
//   })
//   .map((word) => {
//     return word.toUpperCase();
//   })
//   .sortBy()
//   .value();
// };
