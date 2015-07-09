'use strict';

var tape = require('tape');

module.exports = scotchTape;

function scotchTape(options) {
  options = options || {};

  return function uTapeTest(prefix, run) {
    // Setup
    if(options.setup) {
      tape('setup', function before(t) {
        options.setup.call(t, t);
      });
    }

    // Run Tests
    run(function it(name, fn) {
      var test = tape;

      // Before Each Test
      if(options.before) {
        test = before(test, function before(t) {
          options.before.call(t, t);
        });
      }

      // After Each Test
      if(options.after) {
        test = after(test, function after(t) {
          options.after.call(t, t);
        });
      }

      // Test
      test([prefix, name].join(' > '), function it(t) {
        fn.call(t, t);
      });
    });

    // Teardown
    if(options.teardown) {
      tape('teardown', function after(t) {
        options.teardown.call(t, t);
      });
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
