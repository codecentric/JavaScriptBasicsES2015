# Chapter 1

## Primitives
---
* How JS became what it is
* Basic Language Properties
* Control Structures
* Variables
* Primitive Values and OO Wrappers

---

# Brief History of JavaScript
---
* Brendan Eich and Netscape 2.0
* ECMA Script Standard 262 version 1.
* Scripting days
* ECMAScript v3 (and 4)
* IE6, Flash and Stagnation till 2005
---

* AJAX
* Firefox and Chrome
* AJAX Libraries
* ECMAScript v5
* HTML5 + CSS3
* iPhone
* Node.js
---

* Rise of Mobile Devices
* Performance Boost
* Application Frameworks
* Web is the OS
* Assembly of the Web
* Professionalization of DevTools

---

# JavaScript DNA
---
## Design Goals and Inspiration

* accessibility
* forgiveness
* fast achievements
* still powerful and flexible
* Self, Scheme, Java

---

## JavaScript Language Properties

* dynamically, loosely typed
* small core (though growing)
* multi-paradigm: OO, FP, procedural
* usually single-threaded
* designed for embedding

---

# Syntax

---

* C-family, influenced by Java
* Optional semicolons, ASI
* optional braces
* insignificant white spaces
* usual loop and branch constructs

---

## Naming Conventions

```
  var allCamelCase = 42;
  const IM_A_CONSTANT = "dont change me";
  var _indicatedPrivate = "shouldn't use me from outside";
  var TheConstructor = function AlsoAsFunctionName(){};
```

---

## Example: Variables, Loops, If

```
  var bottleSingular = ' bottle',
      bottlePlural = bottleSingular + 's';

  const LINE = ' of beer on the wall'; // ES6

  for (let bottles = 99; bottles > 0; bottles--) {
    let isOneBottle = (bottles === 1); // ES6
    if (isOneBottle) {
      console.log(bottles + bottleSingular + LINE);
    } else {
      console.log(bottles + bottlePlural + LINE);
    }
  }
```

---

## Variables

* no types for variables
* global variable, if no keyword is used
* can be chained with comas
* `var` s get hoisted, function scope
* `const` and `let` have a temporal dead zone, block scope

---
## Example: Hoisting

```
  var bar = 'out'
  function fn (){
    console.log(bar)
    bar = 'first in'
    console.log(bar)
    var bar = 'second in'
    console.log(bar)
  }
```
---

## Branches

* if-else all same
* switch-case works with anything
* try-catch branches on errors

---

## Loops

* for-i, while, do-while all same
* for-in: iterating over property keys
* for-of: iteration over iterable objects

---

## Literals

```
  var str = 'a string', num = 42,
      bool = true, nullRef = null, undef = undefined
      regex = /foo/gim;
  var arr = [1,'2',3], object = {key: 'value'};
  var funcExp = function(){};

  function funcStatment(){
    return str.length;
  }
```

---

## typeof operator

```
  typeof 1;
  typeof 'string';
  typeof false;
  typeof {};
  typeof function(){};
  typeof undefined;
  typeof null;
  typeof [];
  typeof new String('string');
```
---

* used to determine the type
* works fine with: 'number', 'boolean', 'string',
* 'undefined', 'function', 'generator'
* not sufficient with: 'object'
* beware of OO-wrapper

---

# Equality

---
```
  '0' == 0;
  ''  == 0;
  '' == false;
  false == null;
  undefined != null
```
---

* `==` and `!=` are designed to convert types
* `===` and `!==` for identity comparison
* favor `===` over `==`
* `val == null` checks for `null` and `undefined`

---
# Truthiness

---

```
  var values = [ true, 1, 42, -4, "not empty", '0', {}, [],
                 false, 0, NaN, null, undefined, ""];
  var logStr = "At index %d, value %s is %s";

  for ( let i = 0; i < values.length; i++) {
    if (values[i]) {
      console.log(logStr, i, values[i], "truthy");
    } else {
      console.log(logStr, i, values[i], "falsy");
    }
  }
```
---
# Primitive Values

---

* Booleans, Numbers, Strings
* OO-Wrappers, Autoboxing
* undefined and null

---

## Autoboxing

* useful to apply methods on primitives
* happens behind the scene
* prefer to use primitives over objects

---

## Example

```
  var str = 'primitive'
  console.log(str.length)

  str.foo = 'will go away'
  console.log(str.foo)
```
---

## Boolean

* `true` and `false`
* Boolean function
* nothing special on the prototype

---

## Numbers

* floats double precision (64 bit)
* exact in integer math
* don't do Money with it
* different Notations

---

## Numbers: Literals

```
  let science = 1e10
  let float = 0.5
  let int = 42
  let hex = 0xA
  let bin = 0b1010 // ES6
  let oct = 0o77 // ES6
```

---

## Number Function

* `Number(val)` casts into a number primitive
* `new Number(num)` creates an object
* `Number` function has some properties
* `parseInt`, `parseFloat`, `isNaN`, `isSafeInteger`
* `MIN_VALUE`, `MAX_VALUE`, `EPSILON`
* [Number at Mozilla  Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

---

## parsing vs. casting

* `Number()` casts something to a number
* usually strings if they contain a literal
* `parseInt` and `parseFloat` apply an algorithm
* "parse as far as you can and forget the rest"
* parseInt has a second parameter: base

---

## Examples: parsing

```
  var num4 = Number("42"), num5 = Number("1e10"),
      num6 = Number(false); // !! type conversion happens
  var num7 = parseInt("42"), num8 = parseInt("1e10"),
      num9 = parseInt(false);
  var num10 = parseInt("0x45"), num11 = parseInt("0x45", 10);
```

---

## Special Numbers

* `NaN`: failed result of a parsing
* `NaN == NaN // ! isNaN()`
* `Infinity` results often in math

---

## Strings

* unicode encoding
* the main type of values on the Web

---

## String literals

```
  var str1 = "double quotes"
  var str2 = 'single quotes'
  var theAnswer = 42,
      templateString = `using back-ticks and ${theAnswer}
      also multiline` // ES6
```

---

## String Function

* `String()` casts into a string primitive
* `new String()` creates an OO-Wrapper
* String objects have many useful methods
* String objects are iterable
* [String on Mozilla Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

# Symbols
---
* special kind of primitive values
* Symbols are unique and singletons
* a reference to the Symbol value is required
* Symbol.for() and Symbol.keyFor()
* can be used to create non-accessable properties

---
## null vs. undefined

* `undefined` is something that does not exist yet
* `null` is a reference, that points to nothing
* never assign `undefined` yourself, use `null`
* in objects, use `delete o.p` to remove the property

---

# [Exercise 1](../tasks/#/1)
