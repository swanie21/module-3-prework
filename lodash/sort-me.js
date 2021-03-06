'use strict';

var _ = require('lodash');

var sort = function(items) {
  return _.sortBy(items, 'quantity').reverse();
};

module.exports = sort;

// ES6 syntax
// const sort = (items) => {
//   return _.sortBy(items, 'quantity').reverse();
// };
