# Exercise 3
## Movies Model

---

## Goals

* module that handles a list of Movies
* encapsulation and information hiding
* using collections, objects and modules

---

## Requirements:

* create MovieDB.js module, supporting:
* `getMovie(ident)`, returns a Movie object
* `getMovies()`, returns a list of movies
* `setMovie(movie)`, returns a stored movie (with ident)
* use the module in entry.js to store some movies
* use the module in entry.js to get and print a movie
* use the module in entry.js to get and print all movies
* no Exceptions should appear in the console!

---

## entry.js example

```
import {getMovie, getMovies, setMovie} from './movieDB.js'

var newMovie = setMovie({title: 'Foo', description: 'very foo'})
console.log(getMovie(newMovie.id))
console.log(getMovies())
```
---
## Attention!

* changing the collection in entry, shouldn't impact on movieDB
* code above is just an example!

---
## Bonus!

* changes to movie objects in entry should not impact movieDB
