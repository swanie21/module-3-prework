'use strict';

var _ = require('lodash');

var europeanTowns = function(towns) {
  var groups = {
    hot: [],
    warm: []
  };

  function checkTemp(degree) {
    return degree > 19;
  }

  _.forEach(towns, function(town, townName) {
    if (_.every(town, checkTemp)) {
      groups.hot.push(townName);
    } else if (_.some(town, checkTemp)) {
      groups.warm.push(townName);
    }
  });
  return groups;
};

module.exports = europeanTowns;

// ES6 syntax
// const europeanTowns = (towns) => {
//   let groups = {
//     hot: [],
//     warm: []
//   };
//
//   let checkTemp = (degree) => {
//     return degree > 19;
//   };
//
//   _.forEach(towns, (town, townName) => {
//     if (_.every(town, checkTemp)) {
//       groups.hot.push(townName);
//     } else if (_.some(town, checkTemp)) {
//       groups.warm.push(townName);
//     }
//   });
//   return groups;
// };
