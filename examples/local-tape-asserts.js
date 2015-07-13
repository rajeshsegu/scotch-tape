'use strict';

var scotchTape = require('../scotch-tape');

var runBasicTests = scotchTape({
  setup: function(t) {
    console.log('setup');
    t.isValidName('xyz');
    t.end();
  },
  before: function(t) {
    console.log('Before Each');
    t.isValidName('xyz');
    t.end();
  },
  after: function(t) {
    console.log('After Each');
    t.isValidName('xyz');
    t.end();
  },
  teardown: function(t) {
    console.log('teardown');
    t.isValidName('xyz');
    t.end();
  },
  asserts: {
    isValidName: function customAssert(name) {
      this.ok(name);
      this.equal(name, 'test');
    }
    /* any number of local custom asserts*/
  }
});

runBasicTests('scotch-tape tests', function test(it) {
  it('should get called', function should(t) {
    t.ok(true);
    t.end();
  });
  it('should support custom assert', function should(t) {
    t.ok(t.isValidName);
    t.isValidName('test');
    t.end();
  });
});

var runTests = scotchTape();
runTests('scotch-tape tests', function test(it) {
  it('should get called', function should(t) {
    t.ok(true);
    t.end();
  });
  it('should not support custom assert', function should(t) {
    t.notOk(t.isValidName);
    t.end();
  });
});
