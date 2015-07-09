'use strict';

var scotchTape = require('../scotch-tape');

var test = scotchTape({
  setup: function(t) {
    t.ok(true, 'setup called');
    t.end();
  },
  before: function(t) {
    t.ok(true, 'before called');
    t.end();
  },
  after: function(t) {
    t.ok(true, 'after called');
    t.end();
  },
  teardown: function(t) {
    t.ok(true, 'teardown called');
    t.end();
  }
});

test('uTape Tests', function test(it) {
  it('should pass 1', function it(t) {
    t.ok(true, 'called');
    t.end();
  });
  it('should pass 2', function it(t) {
    t.ok(true, 'called');
    t.end();
  });
});
