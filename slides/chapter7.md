# Chapter 7

## npm driven development

---
* init, setup, tasks
* finding dependencies
* designing a module
* basic quality assurance
---

# npm

---

* a package manager for node (and JavaScript)
* a registry <http://npmjs.org>
* a client
* a task runner

---

## Starting with npm

* create a folder and cd into
* `npm init` and go through it
* open the package.json and complete it
* start adding files, dependencies, tasks
---

## The 3 strategies to start

* Big Bang Yo!
* getting attached
* slowly growing

---

## Big Bang

* scaffold the project via Yeoman
* depending on the generator
* brings in a setup and a set of dependencies
* useful for often reused setups

---
## Getting Attached

* define a very rough name the thing
* select a big framework and install it
* start to explore it and configure
* configure more
* add some plugins
---
## Growing slow

* npm init
* split big problems into tiny ones
* name one, search on npm
* install or develop
* start again with step 3
* works well with (micro)Services
---

## npm as a task runner

* package.json scripts
* npm run [scriptname]
* shorthand references to node_modules/.bin/
* using shell capabilities and npm packages
---

# Registry

---

* 280k+ packages
* quality may vary
* how to find the right thing?
* how to decide which one to take?

---
## Finding Nemo

* name a thing (may be several names)
* search on npmjs.org
* if its a package from the ecosystem, mention it
* sometimes it helps to google too
* if didn't find anything: try another name
* or develop it

---
## Decision Making

* inspect npm statistics: downloads, dependants
* inspect github repository: stars, contributors, activity
* watch the code-base: tests, coding style, license
* is there a documentation?
* does it support different integration possibilites

---

# Designing a module

---

* one-functon-module: SRP
* what result does it create?
* consider supporting different API
* create tests for the public API
* structure the modules in a consistent way
---

```
// imports first
import dep from 'somedep'

// variables goes here
var internal

// group the exports, most important ones on extremes
export let foo = 42

export default function theBeginning(){}
```
---
# QA

---

## 2 Steps of basic protection

* Lint
* Unit Tests
* usually both goes together
---

## Lint

* static code analysis
* prevents many of issues, smells and bad parts
* ensures consistent coding style
* ESLint allows extensions and fine grained control

---

## Unit Testing

* 2 popular testing stacks for the browser
* Karma, Jasmine
* Mocha, Chai, Sinon
* Mocha stack can be used for Node.js too
* similar testing language
