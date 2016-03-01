# Chapter 8

## Concepts of Browser Apps

---

* enhanced WebPages: Widgets
* MVC Pattern
* 2-way binding
* reactive applications
* components
* communication patterns

---

# Enhanced WebPages

---

## Concept
* before SPA there was jQuery et al
* Widgets-like components
* oftentimes plugins to a library
* very small internal state
* interaction via HTML, JS API and callbacks

---

* useful, even in big applications
* represents a means of user interaction
* can be integrated in different ways
* no direct relation to the business model
* app has to "translate by foot"

---
## Lib and Frameworks

* jQuery plugins
* Bootstrap components

---

# MVC Pattern

---

* Concept: View watches the Model and renders itself
* inspired by desktop application and backends
* introduces a separation of concerns
* defines the relationship between data and view
* different flavors: MVC, MVVM, MVP etc.

---

* very popular concept
* easy to grasp, battle-proofed for CRUD-like apps
* wiring the View and the Model can require boilerplate
* 2-way-binding extensions do help.
---
## Libs and Frameworks

* Backbone (with extensions)
* Ember
* Angular 1
* Knockout
* [many more](http://todomvc.com)
---

## 2-way-binding

* View responds to specific changes in the model
* View changes specific values in the model
* MV(c): Controller doesn't do much
* fast and easy to get highly responsive UI
* fast and easy to create a mess

---
```
// 2-way-binding in Angular
<input ng-model="foo" />

```
---

# reactive Applications

---

* 2-way-binding works with classic REST-based communication
* to ensure consistent data, most changes have to land on the server
* but changes presented immediately
* reactive systems change the data flow

---
## Concept:

* Model is projected to a viewmodel
* View renders the viewmodel
* Actions are spawned, Model mutates itself
* 1-Way-binding and a Action-Model-Projection loop

---
## Libs and Frameworks

* React + Flux/Redux
* Angular 2
* some MVC Frameworks (i.e. Knockout)
* Circle.js
* Elm (to-JS-compiled)
---

# Components

---
## Goals

* modularization of the UI
* functional modeling
* encapsulation
* autonomy at last
---

## Libs and Frameworks

* WebComponents (upcoming standard)
* Polymer (WebComponents polyfill + superset)
* React
* Angular 1 (via directives) and 2

---

# Communication Patterns

---
* Form submission
* REST via AJAX and JSON
* JSONP and Beacons
* WebSockets
---
## Forms

* submit a form creates a HTTP request
* data is a list of `key=value` pairs
* part of the query by GET
* new-line separated body
* forces page reload
* can be done via AJAX

---
## REST with AJAX and JSON

* HTTP requests using XMLHttpRequest
* Body contains JSON
* params via path, query and/or JSON body
* CORS-matter
---
## JSONP and Beacons

* used to bypass CORS when not supported
* Simple fire/forget requests via beacons
* if response is interesting: JSONP
* JSONP has to be implemented by the server

---
```
function globalCB(data){
  // handle data
}
document.write('<script src="myserver/foo?callback=globalCB"></script>)

// server responds with this in Body:
globalCB({"some":"values", "put": "here"})
```
---
## WebSockets

* new standard, handshake via HTTP 101 and Upgrade Header
* introduces a bi-directional channel (socket)
* message passing, usually JSON
* better fit for highly reactive apps
* socket.io, sockjs and more
* server-side support required

---

# Exercise
