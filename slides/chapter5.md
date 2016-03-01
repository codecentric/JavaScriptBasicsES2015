# Chapter 5

## asynchronous way

---

* asynchronous programming
* event loop
* callbacks, events, streams
* promises

---

## Asynchronous Programming

---

* UI should be responsive
* non-blocking I/O
* call me later principle
* synchronous eyes see past before furture
* JavaScript runtime is often single threaded

---

```
  setTimout(function(){
    console.log("Timeout Callback")
  }, 0)

  console.log('I seem like after timeout')
```
---

## Event Loop

* a pattern to manage and dispatch events
* in a single thread
* can be used in hard-realtime constrains
* manages a list of event sources and event listeners

---

## Callback

* Continuation Passing
* Functions objects
* careful of this!
* beware nesting

---

## Callback Hell

* deeply nested
* including control structures
* Closures - Scope sharing!
* Main issue: strong coupling
* [callbackhell.com](http://callbackhell.com)
---

## beat the callback hell

* flatten
* modularize
* avoid closures
* follow SOLID & co
* consider alternative interfaces
---

## Asynchronous Interfaces

* callbacks are simple
* event based interfaces
* streams
* promises
---

## Evented IF

```
  export function(input){
    let eeif = new EventEmitter()

    doSomethingAsync(input.in, (er, data)=>{
      if (err) return eeif.emit('error', er)
      eeif.emit('data', data)
      })

    return eeif
  }

  foo().on('data', (data)=> profit(data))

```
---

## Stream IF

```
  export function(input){
    let stream = through()

    doSomethingAsync(input.in, (er, data)=>{
      if (err) return stream.emit('error', er)
      stream.write(data)
      stream.end()
      })

    return stream
  }

  foo().pipe(myPrfofitCosumer)
```
---

## Promise IF

```
  export function(input){
    let promise = new Promise((resolve, reject)=>{
        doSomethingAsync(input.in, (er, data)=>{
          if (err) return   reject( er)
            resolve(data)
          })

      })


    return promise
  }

  foo().then(profit)
```
---
## Promise API

* represents a value that eventually will be resolved
* generate with new Promise()
* has the .then() method
* can be chained
---

```
  getJson()
    .then((json)=> json.user)
    .then( (user) => getUserRights(user), (err)=> log(err))
    .then( (rights)=> authorize())
    .catch( (err) => presentError(err))
```
---

## JSON

* JavaScript Object Notation
* A subset of a JS Object Literal
* JSON.stringify()
* JSON.parse()
* synchronous execution, parse errors
