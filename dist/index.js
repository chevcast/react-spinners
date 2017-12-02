(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["reactSpinners"] = factory();
	else
		root["reactSpinners"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return spinnerService; });
class SpinnerService {
    constructor() {
        this.spinnerCache = new Set();
    }
    _register(spinner) {
        this.spinnerCache.add(spinner);
    }
    _unregister(spinnerToRemove) {
        this.spinnerCache.forEach(spinner => {
            if (spinner === spinnerToRemove) {
                this.spinnerCache.delete(spinner);
            }
        });
    }
    _unregisterGroup(spinnerGroup) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.group === spinnerGroup) {
                this.spinnerCache.delete(spinner);
            }
        });
    }
    _unregisterAll() {
        this.spinnerCache.clear();
    }
    show(spinnerName) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.name === spinnerName) {
                spinner.show = true;
            }
        });
    }
    hide(spinnerName) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.name === spinnerName) {
                spinner.show = false;
            }
        });
    }
    showGroup(spinnerGroup) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.group === spinnerGroup) {
                spinner.show = true;
            }
        });
    }
    hideGroup(spinnerGroup) {
        this.spinnerCache.forEach(spinner => {
            if (spinner.group === spinnerGroup) {
                spinner.show = false;
            }
        });
    }
    showAll() {
        this.spinnerCache.forEach(spinner => spinner.show = true);
    }
    hideAll() {
        this.spinnerCache.forEach(spinner => spinner.show = false);
    }
    isShowing(spinnerName) {
        let showing = undefined;
        this.spinnerCache.forEach(spinner => {
            if (spinner.name === spinnerName) {
                showing = spinner.show;
            }
        });
        return showing;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpinnerService;

const spinnerService = new SpinnerService();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_component__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_0__Spinner_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_service__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return __WEBPACK_IMPORTED_MODULE_1__spinner_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "spinnerService", function() { return __WEBPACK_IMPORTED_MODULE_1__spinner_service__["b"]; });




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_service__ = __webpack_require__(0);


class SpinnerComponent extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.spinnerService = __WEBPACK_IMPORTED_MODULE_1__spinner_service__["b" /* spinnerService */];
    }
    set show(show) {
        this.setState({ show });
    }
    get show() {
        return this.state.show;
    }
    get name() {
        return this.props.name;
    }
    get group() {
        return this.props.group;
    }
    componentWillMount() {
        this.state = {
            show: this.props.hasOwnProperty('show') ? this.props.show : false
        };
        if (this.props.hasOwnProperty('spinnerService')) {
            this.spinnerService = this.props.spinnerService;
        }
        this.spinnerService._register(this);
    }
    componentWillUnmount() {
        this.spinnerService._unregister(this);
    }
    render() {
        if (this.state.show) {
            const { loadingImage } = this.props;
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: 'inline-block' } },
                loadingImage && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: loadingImage }),
                this.props.children));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpinnerComponent;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map