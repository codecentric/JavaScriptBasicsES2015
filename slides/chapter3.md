# Chapter 3
## Objects

---

* Objects
* Prototypes
* related syntax sugar

---

# Object

---

* Key-Value pairs container
* Keys are strings (or symbols)
* Value can be any other thing
* Objects can have methods: functions as values
* obj.foo vs obj[foo]

---

## Objects creation methods

* Literal
* Constructor Function
* `Object.create()` factory
* new Object()

---
## a word about prototypes and constructors

---
* objects have 2 properties regarding inheritance
* `obj.constructor` points to the constructor function
* `obj.__proto__` points to the object it derives from
* `__proto__` is a short for `constructor.prototype`
* later more about it

---
## Literal creation

* simplest method of creation
* lists all properties in it
* can easily be inlined
* constructor is `Object`
* prototype is `Object.prototype`
* prefer that for simple, one-shot data-bags

---

```
  var obj = {
    someProp : "foo",
    anotherProp : 42,
    aMethod : function(){ }
  }
```

---

## Constructor creation

* more of an class-looking style
* pre ES5 way to handle inheritance
* requires a constructor function to be created
* all instances share the prototype
* allows some optimizations

---

```
  function Person (name){
    this.name = name
  }
  Person.prototype = {species: 'human'}

  Person.prototype.introduce = function(){
    return `Hi, i'm ${this.name}. I'm a ${this.species}.`
  }

  var gregor = new Person('Gregor')
```

---

## Object.create()

* a factory method from ES5
* creates objects with a custom prototype
* uses property descriptors
* constructor is `Object`

---
```
  var gregor = Object.create(personProto, {
    name : {
      value : 'Gregor'
    }
  })
```

---
## Property Descriptors

* allow fine-grained control over properties
* writable, enumerable, configurable
* value vs get/set
* Object.defineProperty

---

```
  var gregor = Object.create(personProto, {
    name : {
      value : 'Gregor',
      writable : true,
      configurable : true,
      enumerable : false
    },
    age : {
      get: function(){
        let currentYear = new Date().getFullYear()
        return currentYear - 1980
      }
    }
  })
```
---

## new Object()

* do not use it yourself! ever!
* wraps the parameter or creates an empty object
* changes its behavior depending on arguments
* delegates to String, Number and Boolean

---

## the Object object

* has some utility methods on it
* Object.assign()
* Object.create, .defineProperty
* Object.prototype is the mother of all

---

## Prototypal inheritance

* No Classes, just Objects
* a prototype can be set at any time
* prototype chain is used for property reads
* Graph Demo:
---

## Iteration over objects

* for-in + hasOwnProperty
* Object.keys()

---
# Syntax Sugar

---

## Enhanced Object Literals

* structuring shorthands
* dynamic/computed property names
* methods
* \_\_proto\_\_ and super

```
var handler = 'foo'
var obj = {
    __proto__: theProtoObj,
    handler,
    toString() {
     return "d " + super.toString();
    },
    [ "prop_" + (() => 42)() ]: 42
};

```
---

## Class

* shorthand for typical Construtor+prototype style
* adds some simpler ways for accessing super methods
* makes the static semantic clear
* overall more java-ish appearance

---
```
class StillNotJava extends SomeBasicConstructor {
  constructor() {
    super()

    this.someInstanceThings = foo

  }
  update() {
    //... method
    super.update()
  }
  static defaultMatrix() {
    return 'yadayada!'
  }
}

```
