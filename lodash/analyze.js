'use strict';

var _ = require('lodash');

var freelancers = function(incomes) {
  var average,
      underperform,
      overperform;

  incomes = _.sortBy(incomes, 'income');

  average = _.reduce(incomes, function(sum, num) {
    return sum + num.income;
  }, 0);

  average = average / incomes.length;

  underperform = _.filter(incomes, function(num) {
    return num.income <= average;
  });

  overperform = _.filter(incomes, function(num) {
    return num.income > average;
  });
  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = freelancers;

//ES6 syntax
// const freelancers = (incomes) => {
//   var average,
//       underperform,
//       overperform;
//
//   incomes = _.sortBy(incomes, 'income');
//
//   average = _.reduce(incomes, (sum, num) => {
//     return sum + num.income;
//   }, 0);
//
//   average = average / incomes.length;
//
//   underperform = _.filter(incomes, (num) => {
//     return num.income <= average;
//   });
//
//   overperform = _.filter(incomes, (num) => {
//     return num.income > average;
//   });
//   return {
//     average: average,
//     underperform: underperform,
//     overperform: overperform
//   };
// };
