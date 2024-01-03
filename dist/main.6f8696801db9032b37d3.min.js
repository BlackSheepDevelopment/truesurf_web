/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entries/main.js":
/*!*****************************!*\
  !*** ./src/entries/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Slider Home Page\n  var index = 0;\n  var itemsPerPage = 3;\n  var slides = document.querySelectorAll(\".slider img\");\n  var totalSlides = slides.length;\n  document.querySelector(\".next\").addEventListener(\"click\", function () {\n    index = (index + 1) % totalSlides; // Loop back to first image\n    updateSliderPosition();\n  });\n  document.querySelector(\".prev\").addEventListener(\"click\", function () {\n    index = (index - 1 + totalSlides) % totalSlides; // Loop back to last image\n    updateSliderPosition();\n  });\n  function updateSliderPosition() {\n    var slider = document.querySelector(\".slider\");\n    slider.style.transform = \"translateX(-\".concat(index * (100 / totalSlides), \"%)\");\n  }\n\n  // Carousel Home Page\n  var container = document.querySelector(\".carousel-container\");\n  var elements = container.querySelector(\".carousel-container__elements\");\n  var items = Array.from(elements.querySelectorAll(\".carousel-item\"));\n  var prevButton = container.querySelector(\".carousel-button-prev\");\n  var nextButton = container.querySelector(\".carousel-button-next\");\n  var currentIndex = 0;\n  function updateButtons() {\n    prevButton.disabled = currentIndex === 0;\n    nextButton.disabled = currentIndex === items.length % itemsPerPage;\n  }\n  prevButton.addEventListener(\"click\", function () {\n    if (currentIndex > 0) {\n      --currentIndex;\n      elements.scrollLeft = items[currentIndex].offsetLeft;\n    } else {\n      elements.scrollLeft -= 100; // Scroll past the start\n      setTimeout(function () {\n        elements.scrollLeft = 0; // Bounce back\n      }, 500);\n    }\n    updateButtons();\n  });\n  nextButton.addEventListener(\"click\", function () {\n    if (currentIndex < items.length - 1) {\n      ++currentIndex;\n      elements.scrollLeft = items[currentIndex].offsetLeft;\n    } else {\n      elements.scrollLeft += 100; // Scroll past the end\n      setTimeout(function () {\n        elements.scrollLeft = items[items.length - 1].offsetLeft; // Bounce back\n      }, 500);\n    }\n    updateButtons();\n  });\n  updateButtons();\n}, false);\n\n//# sourceURL=webpack://empty-project/./src/entries/main.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://empty-project/./src/sass/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/entries/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/styles.scss");
/******/ 	
/******/ })()
;