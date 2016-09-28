'use strict';

var _ = require('lodash');

var comments = function(userComments) {
  var count = [];
  var totalComments = _.groupBy(userComments, 'username');

  _.forEach(totalComments, function(comment, username) {
    count.push({
      username: username,
      comment_count: _.size(comment)
    });
  });
  return _.sortBy(count, 'comment_count').reverse();
};

module.exports = comments;

// ES6 syntax
// const comments = (userComments) => {
//   let count = [];
//   let totalComments = _.groupBy(userComments, 'username');
//
//   _.forEach(totalComments, (comment, username) => {
//     count.push({
//       username: username,
//       comment_count: _.size(comment)
//     });
//   });
//   return _.sortBy(count, 'comment_count').reverse();
// };
