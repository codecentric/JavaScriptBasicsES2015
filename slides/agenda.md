## Agenda

* learning and practicing
* building a web front-end
* ECMAScript 2015 included


---

## Day 1: The Basic Language

* Syntax and Control Structures
* Variables and Primitives
* Functions and Scopes
* Modules
* Objects and OO

---

## Day 2: Data and DOM

* Collections and Generators
* Asynchronous Programming 1x1
* JSON
* HTML + CSS fast and furious
* DOM + Events

---

## Day 3: npm driven development

* Project Setup: Build and Dependencies
* Testing
* Movie Database

---

## ECMAScript 2015

* Not supported fully to date
* Babel to the rescue
* not covering all of the standard
* ES 2015 features marked
---

## The Setup
* install Node.js and npm
```
> mkdir jsbasics && cd jsbasics
> npm init
> npm install --save webpack webpack-dev-server
> npm install --save babel-core babel-loader babel-preset-es2015
```
* add "start" : "webpack-dev-server" to package.json scripts
* create a .babelrc with content:
```
{ "presets": ["es2015"] }
```
