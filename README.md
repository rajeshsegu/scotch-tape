# scotch-tape

Helps write adhesive tape tests and better organize your test code. 

## Code

```javascript
var scotchTape = require('scotch-tape');
var test = scotchTape({options});
```

#### Supported Options:

* `setup` - **Optional** - called before any tests starts running
* `before` - **Optional** -called before every test run
* `after` - **Optional** -called after every test run
* `teardown` - **Optional** -called after all the tests are run
* `asserts` - **Optional** - custom local assertions

## scotch-tape flavor

#### Initialization
```javascript
'use strict';

var scotchTape = require('scotch-tape');

var test = scotchTape({
  
  setup: function initialize(t) {
    console.log('setup');
    t.end();
  },
  
  before: function beforeEach(t) {
    console.log('Before Each');
    t.end();
  },
  
  after: function afterEach(t) {
    console.log('After Each');
    t.end();
  },
  
  teardown: function cleanup(t) {
    console.log('teardown');
    t.end();
  },
  
  asserts: {
    isValidName: function customAssert(name) {
      this.ok(name);
      this.equal(name, 'test');
    }
    /* any number of custom local asserts*/
  }
});
```
#### Sample Tests

```javascript
test('scotch-tape tests', function test(it) {
  
  it('should get called', function should(t) {
    t.ok(true);
    t.end();
  });
  
  it('should support custom assert', function should(t) {
    t.isValidName('test');
    t.end();
  });
  
});
```

#### Console Output

```
TAP version 13
# setup
setup
# Project Tests > should pass 1
Before Each
ok 1 (unnamed assert)
After Each
# Project Tests > should pass 2
Before Each
ok 2 (unnamed assert)
After Each
# teardown
teardown

1..2
# tests 2
# pass  2

# ok
```

## Custom Global Tape Asserts

You can overload tape js tests to include custom assertions.

```javascript
'use strict';

var scotchTapeAsserts = require('scotch-tape/asserts');

var scotchTape = scotchTapeAsserts({

  typeOf: function verifyType(obj, type) {
    this.equal(typeof obj, type);
  },
  
  length: function verifyLength(obj, len) {
    this.equal(obj.length, len);
  }
  
});
```

#### Sample Tests

```javascript
var runBasicTests = scotchTape();

runBasicTests('Global Tape Asserts', function test(it) {

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

```

#### Console Output

```
TAP version 13
# Global Tape Asserts > should handle type
ok 1 should be equal
# Global Tape Asserts > should handle length
ok 2 should be equal

1..2
# tests 2
# pass  2

# ok
```

----------

> ENJOY WRITING BETTER TESTS
