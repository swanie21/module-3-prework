'use strict';

var _ = require('lodash');

var filter = function(users) {
  return _.filter(users, { active: true });
};

module.exports = filter;

//ES6 syntax
// const filter = (users) => {
//   return _.filter(users, { active: true });
// };
