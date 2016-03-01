# Chapter 4
## Collections
---
* Arrays
* Map & co
* Generators
* related syntax sugar

---
# Array
---

* just objects, no magic involved
* numerical indexes + length property
* values can be mixed
* Array.prototype contains a lot of utility
* Array methods can be borrowed
* Array-like objects: arguments, String, HTMLElementCollection

---

## Array creation

* Literal
* new Array
* permutation
* borrowing

---

## Literal creation

* used with static values

```
  var arr = []
  var arr1 = [1, 2, 3, 4 ]
  var arr2 = [1, '2', 3, new Person()]
```

---

## Constructor creation

* Constructor has parameter overloading
* can lead to unwanted effects

```
  var arr = new Array(1,2,3)
  var arr1 = new Array(10)
```
---

## Permutation creation

* some Array-methods create new arrays
* the resulting arrays are distinct, not values

```
  var arr = [1,2,3].slice(1)
  var arr = [1,2,3].filter( (elem )=> elem % 2 === 0 )
```

---

## Borrowing

* using a method from on object on another
* utilizing .call and .apply
* applying permutation methods on array-alikes

```
  function foo(){
    var args = [].slice.call(arguments)
    // use as array here
  }
```
---

## Iteration over arrays

* do not use for-in on arrays
* Array#forEach/map/reduce/filter
* for-i, for-of
---

# ES2015 Collections

---

* Map and WeakMap
* Set and WeakSet
* Symbol.iterator property

---

## Map and WeakMap

* real Map collection type
* unlike objects keys can be any value
* Map implements Symbol.iterator
* Map implements usual map methods
* WeakMap holds weak references to key-objects
* WeakMap keys are objects only
---
## Set and WeakSet

* real Set collection type
* unique Values
* Set implements Symbol.iterator
* WeakSet stores objects only
* WeakSet holds weak references to objects

---

# What is Symbol.iterator?

---

## Iterable Protocol

* defines an inteface for an iterable object
* implements Symbol.iterator method
* returns an iterator object

---

## Iterator Protocol

* an object with the next method
* returns an object with done and value properties

---
```
var obj = {
  [Symbol.iterator] : function(){
    return {
      next: function(){
        return {done : false, value : Math.random()}
      }
    }
  }
}

for(let random of obj) console.log(random)
```
---

# Generators
---

* Objects returned by generator functions
* are both iterable and iterators
* can be used to implement Symbol.iterator
* .next(), .return(), .throw()
---

## Generator Functions

* generator functions are special functions
* function\*, yield and yield*
* yield temporarily pauses the execution of the function
* yield provides a value
* execution can be resumed with gen.next()
* yield* yields from another generator
---
```
function* randomNums(){
  while( true) yield Math.random()
}

var randoms = randomNums()

randoms.next()
randoms.next()
randoms.next()
randoms.return()
```
---

# Syntax Sugar

---

## Rest and Spread operators

```
function restP( y, ...restAsArray) {}

function spreadP( y, x, z ){}
spreadP(...[1,2,3])
```
---

# [Exercise 3](../tasks/#/3)
