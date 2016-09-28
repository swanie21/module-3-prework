'use strict';

var _ = require('lodash');

var europeanTowns = function(towns) {
  return _.forEach(towns, function(town) {
    if (town.population > 1) {
      town.size = 'big';
    }
    else if (town.population >= 0.5 ) {
      town.size = 'med';
    }
    else {
     town.size = 'small';
     }
  });
};

module.exports = europeanTowns;

// ES6 syntax
// const europeanTowns = (towns) => {
//   return _.forEach(towns, (town) => {
//     if (town.population > 1) {
//       town.size = 'big';
//     }
//     else if (town.population >= 0.5 ) {
//       town.size = 'med';
//     }
//     else {
//      town.size = 'small';
//      }
//   });
// };
