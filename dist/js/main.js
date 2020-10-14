/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/Menu.js":
/*!************************!*\
  !*** ./app/js/Menu.js ***!
  \************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n\n\nclass Menu {\n  constructor(options) {\n    this.btn = options.button;\n    this.hamburger = options.hamburger;\n    this.activeClass = options.activeClass;\n    this.menu = options.menu;\n    this.menuWrap = this.menu.parentElement;\n    this.menuItems = this.menu.children;\n    this.menuItems = Array.prototype.slice.call(this.menuItems);\n    this.toggleMenu = this.toggleMenu.bind(this);\n  }\n\n  toggleMenu() {\n    this.hamburger.classList.toggle(this.activeClass);\n    this.menuWrap.classList.toggle(this.activeClass);\n    this.menu.classList.toggle(this.activeClass);\n    this.menuItems.forEach(item => item.classList.toggle(this.activeClass));\n    document.body.classList.toggle('forbidence-scroll');\n  }\n\n  listener() {\n    this.btn.addEventListener('click', this.toggleMenu);\n  }\n\n  init() {\n    if (!this.btn || !this.hamburger || !this.activeClass) {\n      return;\n    }\n\n    this.listener();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/Menu.js?");

/***/ }),

/***/ "./app/js/drop-down.js":
/*!*****************************!*\
  !*** ./app/js/drop-down.js ***!
  \*****************************/
/*! exports provided: dropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropDown\", function() { return dropDown; });\n\n\nfunction dropDown(target, elem) {\n  const wrap = target.parentElement;\n  target.addEventListener('click', function (e) {\n    e.preventDefault();\n    elem.classList.toggle('hide');\n    wrap.classList.toggle('active');\n  });\n  elem.addEventListener('click', function (e) {\n    e.preventDefault();\n    const targetEl = e.target;\n    const val = targetEl.innerHTML;\n    elem.classList.toggle('hide');\n    wrap.classList.toggle('active');\n    return target.innerHTML = val;\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/js/drop-down.js?");

/***/ }),

/***/ "./app/js/header-fixed.js":
/*!********************************!*\
  !*** ./app/js/header-fixed.js ***!
  \********************************/
/*! exports provided: headerFixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerFixed\", function() { return headerFixed; });\n\n\nfunction headerFixed(target) {\n  if (!target) {\n    return;\n  }\n\n  const header = target;\n  const main = document.querySelector('.main');\n  window.addEventListener('scroll', function (e) {\n    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n\n    if (scrollTop >= 10) {\n      header.classList.add('fix');\n    }\n\n    if (scrollTop < 10) {\n      header.classList.remove('fix');\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/js/header-fixed.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./app/js/Menu.js\");\n/* harmony import */ var _header_fixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-fixed */ \"./app/js/header-fixed.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop-down */ \"./app/js/drop-down.js\");\n/* harmony import */ var _register_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-form */ \"./app/js/register-form.js\");\n\n\n\n\n\n\nwindow.addEventListener('load', function () {\n  (function mobMenu() {\n    const menu = new _Menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]({\n      button: document.querySelector('.menu__btn'),\n      hamburger: document.querySelector('.menu__burger'),\n      menu: document.querySelector('.menu'),\n      activeClass: 'active'\n    });\n    menu.init();\n  })();\n\n  (function header() {\n    const header = document.querySelector('.header');\n    Object(_header_fixed__WEBPACK_IMPORTED_MODULE_1__[\"headerFixed\"])(header);\n  })();\n\n  (function formDropDown() {\n    const btn = document.querySelector('.form-drop-down_btn');\n    const el = document.querySelector('.register-form__drop');\n    Object(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"dropDown\"])(btn, el);\n  })();\n\n  (function formShowHide() {\n    const btns = document.querySelectorAll('.to-form');\n    const form = document.querySelector('.register-form');\n\n    for (let i = 0; i < btns.length; i++) {\n      Object(_register_form__WEBPACK_IMPORTED_MODULE_3__[\"showForm\"])(btns[i], form);\n    }\n  })();\n\n  (function menuDropDown() {\n    const btn = document.querySelector('.menu__item_link--drop');\n    const el = document.querySelector('.submenu-wrap');\n    const wrap = btn.parentElement;\n    btn.addEventListener('click', function (e) {\n      e.preventDefault();\n      this.classList.toggle('active');\n      el.classList.toggle('active');\n      wrap.classList.toggle('drop-down');\n    });\n  })();\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ "./app/js/register-form.js":
/*!*********************************!*\
  !*** ./app/js/register-form.js ***!
  \*********************************/
/*! exports provided: showForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showForm\", function() { return showForm; });\n\n\nfunction showForm(btn, form) {\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n    form.classList.remove('hide');\n    document.body.classList.add('forbidence-scroll');\n    form.addEventListener('click', function (e) {\n      if (e.target.dataset.close) {\n        e.preventDefault();\n        this.classList.add('hide');\n        document.body.classList.remove('forbidence-scroll');\n      }\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/js/register-form.js?");

/***/ })

/******/ });