'use strict';

var _ = require('lodash');

var greeting = function(data) {
  var userGreeting = 'Hello <%= name %> (logins: <%= login.length %>)';
  return _.template(userGreeting)(data);
};

module.exports = greeting;

//ES6 syntax
// const greeting = (data) => {
//   let userGreeting = 'Hello <%= name %> (logins: <%= login.length %>)';
//   return _.template(userGreeting)(data);
// };
