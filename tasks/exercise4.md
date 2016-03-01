# Exercise 4
## MovieDB UI

---

## Goals

* a UI on top of MovieDB
* using Events, DOM API, Ajax
* "simulating" a model-view relationship
* entry.js acts as "controller"
---

## Requirements:

* create html for movies list
* create html for adding and deleting movies
* use DOM to retreive elements
* attach event listeners
* no Exceptions should appear in the console!

---

## index.html example

```
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

```
---
## Attention!

* no JavaScript inline in HTML
* closures in loops!

---
## Bonus!

* de-couple movieDB from event handling and rendering
* load initial list of movies via AJAX from a JSON file
