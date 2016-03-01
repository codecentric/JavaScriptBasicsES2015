# Chapter 6

## Browser Things
---

* HTML and Sematics
* CSS and Selectors
* DOM Api in brief
* Event API
* AJAX


---

## Separation of Concerns

* HTML - Structure + Content
* CSS - Layout + Format
* JS - Interaction

---

# HTML

---

* hiearchic, XML-Dialect
* everything is a node
* we're interested in html tags and attributes
* tags have semantics
* attributes are params to tags

---

## important non-visible tags

* meta, style + link
* script tag is for embeding scripts
* script loading is blocking
* script, async and defer
* browser usually limit connections

---
## important generic attributes

* id
* name
* class
* style
---

## Some semantics: view source
_and read the reference :)_
---

# Cascading Style Sheets
---

* the way to layout and style web pages
* are a set of rules
* rules are applied according to __cascading__ onto a __matching__ element

---

## CSS Cascade rules

* source of the rule: browser, user, author
* the latter overrides the former rule by rule
* browser: default layout
* user: browser-user custom layout (i.E. accessibility)
* author: us, so anything included via link or style tag/attribute

---

## CSS Selectors

* a query language for html elements
* usualy defines a pattern in the element tree
* similar to xpath
* uses tags, classes, attributes and relationships
* specificity sets the priority in concurrent rule definitions
* at last: last seen rule wins
---

## CSS Selectors Specificity

<iframe src="http://specificity.keegan.st/" width="100%" height="500px"></iframe>

_from [http://specificity.keegan.st/](http://specificity.keegan.st/)_

---

# DOM API
---

* represents the html document as a tree structure
* provides methods to manipulate the document
* our main API in the browser

---

## DOM traversion

* `document` object and particular elements
* legacy: `.getElement*By*()`, `document.*`
* today: `.querySelector()`, `.querySelectorAll()`
* `HTMLElementCollection` is a live collection

---
## DOM mutation

* .style, .attributes, .className
* .appendChild(), .removeChild(), .remove()
* .innerHTML, .textContent
* .createElement(), .createDocumentFragment()

---
## DOM Events

* [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) and [EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventListener)
* [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
* event propagation
* default behavior

---

## [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

* new, .open()
* events: error, load, progress, abort
* .send()
* onload handler gets the response
* usually we're using something else

---
# [Exercise 4](../tasks/#/4)
