'use strict';

var tape = require('tape');

module.exports = scotchTape;

function scotchTape(options) {
  options = options || {};

  return function uTapeTest(prefix, run) {

    function call(fn) {
      return function callFn(t) {
        expand(t, options.asserts);
        fn.call(t, t);
      };
    }

    // Setup
    if (options.setup) {
      tape.test('setup', call(options.setup));
    }

    // Run Tests
    run(function it(name, fn) {
      var test = tape.test;

      // Before Each Test
      if (options.before) {
        test = before(test, call(options.before));
      }

      // After Each Test
      if (options.after) {
        test = after(test, call(options.after));
      }

      // Test
      test([prefix, name].join(' > '), call(fn));
    });

    // Teardown
    if (options.teardown) {
      tape.test('teardown', call(options.teardown));
    }
  };
}

function before(test, handler) {
  return function tapeTest(name, listener) {
    test(name, function (t) {
      var _end = t.end;
      t.end = function end() {
        t.end = _end;
        listener(t);
      };
      handler(t);
    });
  };
}

function after(test, handler) {
  return function tapeTest(name, listener) {
    test(name, function (t) {
      var _end = t.end;
      t.end = function end() {
        t.end = _end;
        handler(t);
      };
      listener(t);
    });
  };
}

function expand(t, customAsserts) {
  if(!customAsserts) {
    return t;
  }
  Object.keys(customAsserts).forEach(function add(assert) {
    t[assert] = customAsserts[assert];
  });
  return t;
}
