/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _movieDB = __webpack_require__(1);

	var add = document.querySelector('button[name="save"]');
	var titleE = document.querySelector('input[name="title"]');
	var descE = document.querySelector('input[name="description"]');
	var tbody = document.querySelector('tbody');

	add.addEventListener('click', function () {
	  (0, _movieDB.setMovie)(titleE.value, descE.value);
	  render();
	  titleE.value = '';
	  descE.value = '';
	});

	function render() {
	  var html = '';
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (0, _movieDB.getMovies)()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var movie = _step.value;

	      html += '\n      <tr>\n        <td>' + movie.id + '</td>\n        <td>' + movie.title + '</td>\n        <td>' + movie.description + '</td>\n        <td></td>\n      </tr>\n    ';
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  tbody.innerHTML = html;
	}

	render();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setMovie = setMovie;
	exports.getMovie = getMovie;
	exports.getMovies = getMovies;
	var db = new Map();

	var counter = 0;

	function setMovie(title, description) {
	  var movie = { id: counter, title: title, description: description };
	  db.set(counter, movie);
	  counter++;
	  return movie;
	}

	function getMovie(id) {
	  return db.get(id);
	}

	function getMovies() {
	  return db.values();
	}

/***/ }
/******/ ]);