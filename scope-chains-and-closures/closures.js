'use-strict';

function foo() {
  var bar;
  quux = 2;
  function zip() {
    var quux = 21;
    bar = true;
  }
  return zip;
}
