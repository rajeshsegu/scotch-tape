'use strict';

var scotchTape = require('../scotch-tape');

var test = scotchTape();

test('Basic Tests', function test(it) {
  it('should pass 1', function it(t) {
    t.ok(true, 'called');
    t.end();
  });
  it('should pass 2', function it(t) {
    t.ok(true, 'called');
    t.end();
  });
});
