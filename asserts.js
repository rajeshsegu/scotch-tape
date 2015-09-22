'use strict';
var scotchTape = require('./scotch-tape');
var Test = require('tape').Test;

module.exports = scotchAsserts;

function scotchAsserts(customAsserts) {
  customAsserts = customAsserts || {};

  Object.keys(customAsserts).forEach(function add(assert) {
    if (!Test.prototype[assert]) {
      Test.prototype[assert] = customAsserts[assert];
    }
  });

  return scotchTape;
}
