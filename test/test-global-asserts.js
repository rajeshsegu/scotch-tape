'use strict';

var scotchTapeAsserts = require('../asserts');

var scotchTape = scotchTapeAsserts({
  typeOf: function(obj, type) {
    this.equal(typeof obj, type);
  },
  length: function(arr, len) {
    this.equal(arr.length, len);
  }
});

var runTests = scotchTape();
runTests('Global Tape Asserts', function test(it) {
  it('should handle type', function should(t) {
    var a = 'segu';
    t.typeOf(a, 'string');
    t.end();
  });
  it('should handle length', function should(t) {
    var a = [1, 2, 3, 4];
    t.length(a, 4);
    t.end();
  });
});