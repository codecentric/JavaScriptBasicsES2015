# Chapter 2

## Functions and Modules
---

* Functions
* Bindings
* Scopes and Closures
* Modules

---

# Functions

---
Functions ...
* ... are first-class citizens
* ... are objects
* ... create scope
* ... always do return
* ... can have dynamic bindings

---

## Function statement

```
  function name( formal, params){
    var localVariable = 'foo'
    let self = this

    return 'something explicit'
  }
```

---

## Function expression

* a function statement, where an expression is required

```
  var func = function optionalName( formal, params){
    var localVariable = 'foo'
    let self = this

    return 'something explicit'
  }
```

---

## Arrow function

* short-hand notation for special cases

```
  var arrowFn = (formal, param) => 'one-liner with implicit return'

  var arrowFn2 = formal => 'one-line, one param'

  var arrowFunc = (formal, param) => {
      return 'multi-liner with explicit return'
    }
```

* one missing part we'll cover soon
---

## Function arguments

* formal list binds args to variables
* engine does not ensure the params
* arguments can be empty
* arguments can have more values than defined
* we can define default values for arguments // ES6

---

```
  var fn = (arg = 42, foo) => {
    let result = `the first argument is ${arg}` +
                 ` and second is ${foo != null ? foo : 'not there'}`
  }

  fn(50)
  fn()
  fn(50, 88)
```
---
## Function bindings

* function get 2 implicit parameters
* `arguments` is an array-like object
* `this` is the execution context
* invocation patterns influence `this` binding

---

## Function invocation patterns

* Function invocation
* Method invocation
* Constructor invocation
* Apply and Call invocation

---

```
  function test(){
    return this;
  }

  var obj = {test: test};
  var customThis = { name: 'custom'};

  test();
  obj.test();
  new test();
  test.call(customThis);
```
---

## Arrow Function

* arrow functions preserve the `this` binding
* `this` binding is bound to `this` in the creating scope

```
  var test = () => this

  var obj = {test: test};
  var customThis = { name: 'custom'};

  obj.test();
  new Test();
  test.call(customThis);
```
---

## Function#bind

* `Function.prototype.bind(presetThis, firstParam)`
* can be used to preserve the `this` binding
* can also be used for partial application
* can be implemented via `.apply()` and closures
---

# Closures

---

functions are objects, that...

* can be created by other functions
* can be returned by other functions
* can be passed as parameter

---

**nested functions have access to the variables in the enclosing scope even after the enclosing function has terminated**

---

* closures close over the variables, not values
* several closures closing over the same variable, share it
* be aware of that in loops
* closures are stateful functions

---
Closures ...

* can tempt to create nested code
* can lead to memory leaks
* are hard to refactor
* are not as reusable as pure functions
* have to be created every time for new scope

---

But still, closures are important for functional programming in JavaScript, they are power.

With any great power, comes great responsibility.

---
```
function bind(fn, self){
  return function(){
    return fn.apply(self, arguments)
  }
}
```
---

# Scopes

---

Now we've seen most of scopes in JavaScript (not all)

---

* global scope (window, global)
* function scope
* closure scope
* `this` (execution context)

---

In Development Tools those scopes are listed separately.

---

# The Missing Scope

---

## Module Scope

* In Node.js since ever
* In ES2015 with the new module system
* before that we could simulate it

---

## The Module Pattern is a combination of

* function scope,
* closures,
* function expressions.

---
a means to create privacy and a unit of functionality above simple functions or objects

---

## Example: plain module as IIFE

```
  (function (global, $){
    var some = 39, private = 1, props = 2;

    var theInterface = {};

    function imPrivilegedMathMagic( num ){
      return (some + num * props ) - private;
    }

    theInterface.mathMagic = imPrivilegedMathMagic;

    return theInterface;
  })(window, jQuery)

```

---

## Example: how it's kind-of used in Node.js

```
// made by node core:
var module = new Module()
(function (module, exports, require){

  // my module code, loaded from file
  var dependency = require('someDep')
  var some = 39, private = 1, props = 2;

  let privilegedMathMagic =
    ( num ) => return (some + num * props ) - private;
  exports.mathMagic = privilegedMathMagic;
  // end of my code-

  // made by node core again
  return exports;
})(module, module.exports, requireFn)

```

---

## Modules in ES2015

* different from Node.js, compatible though
* inspired by Python
* imports, exports, default exports

---

```
import dep from 'someDep'

var some = 39, private = 1, props = 2;

let privilegedMathMagic =
  ( num ) => dep.acc(some, num, props ) - private;

export let mathMagic = privilegedMathMagic;

export default let theDefault = {
  someProp : 42
}
```
---

## ES2015 destructuring assignment

* modules can export different values
* `import 'foobar'`  returns an object with those values
* destructuring assignment can be used to de-compose

---
```
  import {foo, bar, baz : bar2} from 'foobar'

  // even nested
  import {foo, bar: {baz : barBaz}} from 'foobar'

  // also works with iterables, i.e. arrays:
  let [one, two] = [1,2,3]
```
---

# [Exercise 2](../tasks/#/2)
