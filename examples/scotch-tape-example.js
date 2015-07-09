'use strict';

var scotchTape = require('../scotch-tape');

var test = scotchTape({
  setup: function(t) {
    console.log('setup');
    t.end();
  },
  before: function(t) {
    console.log('Before Each');
    t.end();
  },
  after: function(t) {
    console.log('After Each');
    t.end();
  },
  teardown: function(t) {
    console.log('teardown');
    t.end();
  }
});

test('Project Tests', function test(it) {
  it('should pass 1', function it(t) {
    t.ok(true);
    t.end();
  });
  it('should pass 2', function it(t) {
    t.ok(true);
    t.end();
  });
});
