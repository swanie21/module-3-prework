'use strict';

var _ = require('lodash');

var orders = function(items) {

  var array = [],
    total = 0;

  items = _.groupBy(items, 'article');

  _.forEach(items, function(object, key) {
    key = parseInt(key);
    total = 0;

    if (object.length === 1 ) {
      total = object[0].quantity;
    }
    else {
      total = _.reduce(object, function(sum, object) {
        return sum + object.quantity;
      }, 0);
    }
    array.push({
      article: key,
      total_orders: total
    });
  });
  array = _.sortBy(array, 'total_orders').reverse();
  return array;
};

module.exports = orders;

//ES6 syntax
// const orders = (items) => {
//
//   let array = [],
//     total = 0;
//
//   items = _.groupBy(items, 'article');
//
//   _.forEach(items, (object, key) => {
//     key = parseInt(key);
//     total = 0;
//
//     if (object.length === 1 ) {
//       total = object[0].quantity;
//     }
//     else {
//       total = _.reduce(object, (sum, object) => {
//         return sum + object.quantity;
//       }, 0);
//     }
//     array.push({
//       article: key,
//       total_orders: total
//     });
//   });
//   array = _.sortBy(array, 'total_orders').reverse();
//   return array;
// };
