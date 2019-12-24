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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const ReactDOM = __webpack_require__(4);
const Main_1 = __webpack_require__(5);
__webpack_require__(9);
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: 'app' },
            React.createElement(Main_1.Main, null)));
    }
}
;
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Template_1 = __webpack_require__(6);
class Main extends React.Component {
    render() {
        return (React.createElement(Template_1.Template, null,
            React.createElement("div", { className: 'main' },
                React.createElement("div", { className: 'name' }, "YOUSUF NEJATI"),
                React.createElement("div", { className: 'profession' }, "- JavaScript Engineer -")),
            React.createElement("a", { target: "_blank", href: "https://github.com/ynejati" },
                React.createElement("img", { src: "dist/GitHub-Mark-Light-32px.png" }))));
    }
}
exports.Main = Main;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const bind_decorator_1 = __webpack_require__(1);
const Header_1 = __webpack_require__(7);
const Footer_1 = __webpack_require__(8);
class Template extends React.Component {
    setMainRef(ref) {
        this.mainNode = ref;
    }
    render() {
        return (React.createElement("div", { className: `template dark` },
            React.createElement("div", { className: 'header-container' },
                React.createElement(Header_1.Header, null)),
            React.createElement("div", { className: 'main-container', ref: this.setMainRef }, this.props.children),
            React.createElement("div", { className: 'footer-container' },
                React.createElement(Footer_1.Footer, null))));
    }
}
__decorate([
    bind_decorator_1.default
], Template.prototype, "setMainRef", null);
exports.Template = Template;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const bind_decorator_1 = __webpack_require__(1);
class Header extends React.Component {
    renderSignature() {
        return (React.createElement("div", { className: 'signature' }, "Yousuf Nejati"));
    }
    render() {
        return (React.createElement("div", { className: 'header' }, this.renderSignature()));
    }
}
__decorate([
    bind_decorator_1.default
], Header.prototype, "renderSignature", null);
exports.Header = Header;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
class Footer extends React.Component {
    render() {
        return (React.createElement("div", { className: 'footer' },
            React.createElement("div", { className: 'copyright' }, "\u00A9 Yousuf Nejati 2020")));
    }
}
exports.Footer = Footer;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(11);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../node_modules/css-loader/dist/cjs.js!./style.css";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function addModulesToDom(id, list, options) {
  id = options.base ? id + options.base : id;

  if (!stylesInDom[id]) {
    stylesInDom[id] = [];
  }

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var part = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };
    var styleInDomById = stylesInDom[id];

    if (styleInDomById[i]) {
      styleInDomById[i].updater(part);
    } else {
      styleInDomById.push({
        updater: addStyle(part, options)
      });
    }
  }

  for (var j = list.length; j < stylesInDom[id].length; j++) {
    stylesInDom[id][j].updater();
  }

  stylesInDom[id].length = list.length;

  if (stylesInDom[id].length === 0) {
    delete stylesInDom[id];
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (id, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  addModulesToDom(id, list, options);
  return function update(newList) {
    addModulesToDom(id, newList || [], options);
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(12);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  font-family: 'Roboto', arial, sans-serif;\n}\n\nbody {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.app {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n.app > div {\n  flex: 1;\n}\n\n.template {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 65px 4fr 50px;\n  grid-template-areas:  'header'\n                        'main' \n                        'footer';\n}\n\n.dark > .main-container {\n  background: #282C35;\n  color: #FFFFFF;\n  transition: background 0.4s linear;\n  transition: color 0.4s linear;\n}\n\n.dark > .main-container > .blog > .cards > .blog-card {\n  background: rgb(49, 49, 49);\n  color: #FFFFFF;\n  transition: background 0.4s linear;\n  transition: color 0.4s linear;\n}\n\n.dark > .main-container > .drawer-container > .drawer {\n  background: #C0C3C6;\n  transition: background 0.4s linear;\n  transition: color 0.4s linear;\n}\n\n.drawer-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0,0,0,0.30);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  z-index: 20;\n}\n\n.hide {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  z-index: 0;\n}\n\n.drawer-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  width: 150px;\n  height: calc(100% - 115px);\n  z-index: 100;\n  /* transition: all 0.3s ease-in-out; */\n  top: 65px;\n  position: fixed;\n}\n\n.drawer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  justify-content: flex-start;\n  box-shadow: 12px 0px 8px 0px rgba(0,0,0,0.25), 10px 0 5px -5px rgba(0,0,0,0.22);\n  transition: none;\n}\n\n.drawer + .dark {\n  background-color: #C0C3C6;\n}\n\n.header-container {\n  grid-area: header;\n  /* position: sticky; */\n  width: 100%;\n  min-height: 65px;\n  display: flex;\n  z-index: 100;\n  min-width: 265px;\n  /* overflow: hidden; */\n}\n\n.header {\n  flex: 1;\n  background-color: #0098ff;\n  display: flex;\n  align-content: space-between;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  padding: 0 20px;\n}\n\n.header-nav {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.header-hamburger {\n  justify-content: left;\n  padding-left: 5px;\n}\n\n.main-container {\n  position: relative;\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 265px;\n  overflow-x: hidden;\n  -top: 65px;\n  background-color: #FFFFFF;\n  color: #000000;\n  transition: background-color 0.5s linear;\n  transition: color 0.2s linear;\n}\n\n.main {\n  margin: 10px;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.main-container > a {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  cursor: pointer;\n}\n\n.name {\n  font-size: 4rem;\n  text-align: center;\n  font-family: 'Roboto Slab', serif;\n}\n\n.profession {\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n.about {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.title {\n\n}\n\n.content {\n  width: 70%;\n}\n\n.footer-container {\n  grid-area: footer;\n  display: flex;\n}\n\n.footer {\n  flex: 1;\n  background-color: #d6d9db;\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  padding: 20px;\n  align-items: center;\n}\n\n.copyright {\n  display: flex;\n  justify-content: flex-end;\n  flex: 1 0 100px;\n  align-items: center;\n  color: #818385;\n}\n\n.drawer-button {\n  width: 100%;\n  height: 40px;\n}\n\n.header-nav-button {\n  height: 40px;\n  width: 100px;\n}\n\n.drawer-item {\n  display: flex;\n}\n\n.drawer-item > div {\n  flex: 1;\n  padding-bottom: 10px;\n}\n\n.shadow-1 {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  /* transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);  */\n}\n\n.shadow-2 {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n.shadow-3 {\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\n\n.shadow-4 {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px rgba(0,0,0,0.22);\n}\n\n.home {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.card {\n  background: #fff;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n}\n\n.card-title {\n  flex: 0 0 auto;\n  text-align: center;\n  padding: 10px 10px 0 10px;\n  font-size: 22px;\n  font-weight: 700;\n  border-bottom: 2px solid #818385\n  \n}\n\n.card-subheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  flex-wrap: wrap;\n}\n\n.card-date, .card-read {\n  color: #818385;\n}\n\n.card-content {\n  flex: 1 0 auto;\n  padding: 10px;\n}\n\n.signature {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-family: 'Homemade Apple', cursive;\n  font-weight: 600;\n  font-size: 1.3rem;\n  color: #ffffff;\n}\n\n.signature:hover {\n  cursor: pointer;\n  color: #cfe2f3;\n}\n\n.blog {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  widows: 100%;\n  /* width: 80%;\n  flex-wrap: wrap; */\n}\n\n.cards {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  flex-wrap: wrap;\n}\n\n.blog-card {\n  min-height: 50px;\n  margin: 10px;\n}\n\n.-sm {\n  flex: 1 1 auto;\n  max-width: 200px;\n}\n\n.-md {\n  flex: 2 2 auto;\n  max-width: 400px;\n}\n\n.-lg {\n  flex: 3 3 auto;\n  max-width: 600px;\n}\n\n.blog-card:hover {\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  transition: box-shadow 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n.button {\n  display: inline-block;\n  border: none;\n  margin: 0;\n  text-decoration: none;\n  background: #3c86e0;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 1rem;\n  cursor: pointer;\n  text-align: center;\n  transition: background 200ms ease-in-out, \n              transform 100ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.button:hover,\n.button:focus {\n  background: #3676c4;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  \n}\n\n.button:focus {\n  /* outline: 1px solid #fff; */\n  /* outline-offset: -4px; */\n}\n\n.button:active {\n  transform: scale(0.99);\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n@media screen and (max-width: 650px) {\n  .home {\n    flex-direction: column;\n  }\n\n  .home-card {\n    height: 100px;\n    width: 100%;\n  }\n\n  .name {\n    font-size: 2.5rem;\n  }\n  \n  .profession {\n    font-size: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 330px) {\n  .name {\n    font-size: 2.3rem;\n  }\n}\n\n.react-toggle {\n  touch-action: pan-x;\n\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.react-toggle-screenreader-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.react-toggle--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.25s;\n  transition: opacity 0.25s;\n}\n\n.react-toggle-track {\n  width: 50px;\n  height: 24px;\n  padding: 0;\n  border-radius: 30px;\n  background-color: #000000;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #4D4D4D;\n}\n\n.react-toggle--checked .react-toggle-track {\n  background-color: #4D4D4D;\n}\n\n.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\n  background-color: #000000;\n}\n\n.react-toggle-track-check {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  justify-content: flex-end;\n  width: 14px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  left: 8px;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-check {\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle-track-x {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 10px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  right: 10px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-x {\n  opacity: 0;\n}\n\n.react-toggle-thumb {\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #4D4D4D;\n  border-radius: 50%;\n  background-color: #FAFAFA;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  -webkit-transition: all 0.25s ease;\n  -moz-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-thumb {\n  left: 27px;\n  border-color: #000000;\n}\n\n.react-toggle--focus .react-toggle-thumb {\n  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;\n  -moz-box-shadow: 0px 0px 3px 2px #0099E0;\n  box-shadow: 0px 0px 2px 3px #0099E0;\n}\n\n.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {\n  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;\n  -moz-box-shadow: 0px 0px 5px 5px #0099E0;\n  box-shadow: 0px 0px 5px 5px #0099E0;\n}\n\npre {\n  color: #000000;\n  font-family: monospace;\n  white-space: pre;\n  background-color: #979a9c;\n  border-radius: 5px;\n  padding: 10px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmluZC1kZWNvcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9NYWluLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZW1wbGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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IiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3N0YXRpYy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25zdGFudHM7XG4oZnVuY3Rpb24gKGNvbnN0YW50cykge1xuICAgIGNvbnN0YW50cy50eXBlT2ZGdW5jdGlvbiA9ICdmdW5jdGlvbic7XG4gICAgY29uc3RhbnRzLmJvb2xUcnVlID0gdHJ1ZTtcbn0pKGNvbnN0YW50cyB8fCAoY29uc3RhbnRzID0ge30pKTtcbmZ1bmN0aW9uIGJpbmQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xuICAgIGlmICghZGVzY3JpcHRvciB8fCAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgIT09IGNvbnN0YW50cy50eXBlT2ZGdW5jdGlvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9ubHkgbWV0aG9kcyBjYW4gYmUgZGVjb3JhdGVkIHdpdGggQGJpbmQuIDxcIiArIHByb3BlcnR5S2V5ICsgXCI+IGlzIG5vdCBhIG1ldGhvZCFcIik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogY29uc3RhbnRzLmJvb2xUcnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBib3VuZCA9IGRlc2NyaXB0b3IudmFsdWUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIENyZWRpdHMgdG8gaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleXBvcHAvYXV0b2JpbmQtZGVjb3JhdG9yIGZvciBtZW1vaXppbmcgdGhlIHJlc3VsdCBvZiBiaW5kIGFnYWluc3QgYSBzeW1ib2wgb24gdGhlIGluc3RhbmNlLlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5S2V5LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGJvdW5kLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogY29uc3RhbnRzLmJvb2xUcnVlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBjb25zdGFudHMuYm9vbFRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuYmluZCA9IGJpbmQ7XG5leHBvcnRzLmRlZmF1bHQgPSBiaW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcbmNvbnN0IE1haW5fMSA9IHJlcXVpcmUoXCIuL3BhZ2VzL01haW5cIik7XG5yZXF1aXJlKFwiLi9jc3Mvc3R5bGUuY3NzXCIpO1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2FwcCcgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFpbl8xLk1haW4sIG51bGwpKSk7XG4gICAgfVxufVxuO1xuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBudWxsKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBUZW1wbGF0ZV8xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvVGVtcGxhdGVcIik7XG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChUZW1wbGF0ZV8xLlRlbXBsYXRlLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21haW4nIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ25hbWUnIH0sIFwiWU9VU1VGIE5FSkFUSVwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAncHJvZmVzc2lvbicgfSwgXCItIEphdmFTY3JpcHQgRW5naW5lZXIgLVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IHRhcmdldDogXCJfYmxhbmtcIiwgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20veW5lamF0aVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJkaXN0L0dpdEh1Yi1NYXJrLUxpZ2h0LTMycHgucG5nXCIgfSkpKSk7XG4gICAgfVxufVxuZXhwb3J0cy5NYWluID0gTWFpbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBiaW5kX2RlY29yYXRvcl8xID0gcmVxdWlyZShcImJpbmQtZGVjb3JhdG9yXCIpO1xuY29uc3QgSGVhZGVyXzEgPSByZXF1aXJlKFwiLi9IZWFkZXJcIik7XG5jb25zdCBGb290ZXJfMSA9IHJlcXVpcmUoXCIuL0Zvb3RlclwiKTtcbmNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzZXRNYWluUmVmKHJlZikge1xuICAgICAgICB0aGlzLm1haW5Ob2RlID0gcmVmO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYHRlbXBsYXRlIGRhcmtgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnaGVhZGVyLWNvbnRhaW5lcicgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlcl8xLkhlYWRlciwgbnVsbCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ21haW4tY29udGFpbmVyJywgcmVmOiB0aGlzLnNldE1haW5SZWYgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnZm9vdGVyLWNvbnRhaW5lcicgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3Rlcl8xLkZvb3RlciwgbnVsbCkpKSk7XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgYmluZF9kZWNvcmF0b3JfMS5kZWZhdWx0XG5dLCBUZW1wbGF0ZS5wcm90b3R5cGUsIFwic2V0TWFpblJlZlwiLCBudWxsKTtcbmV4cG9ydHMuVGVtcGxhdGUgPSBUZW1wbGF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBiaW5kX2RlY29yYXRvcl8xID0gcmVxdWlyZShcImJpbmQtZGVjb3JhdG9yXCIpO1xuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXJTaWduYXR1cmUoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3NpZ25hdHVyZScgfSwgXCJZb3VzdWYgTmVqYXRpXCIpKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdoZWFkZXInIH0sIHRoaXMucmVuZGVyU2lnbmF0dXJlKCkpKTtcbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICBiaW5kX2RlY29yYXRvcl8xLmRlZmF1bHRcbl0sIEhlYWRlci5wcm90b3R5cGUsIFwicmVuZGVyU2lnbmF0dXJlXCIsIG51bGwpO1xuZXhwb3J0cy5IZWFkZXIgPSBIZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2Zvb3RlcicgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdjb3B5cmlnaHQnIH0sIFwiXFx1MDBBOSBZb3VzdWYgTmVqYXRpIDIwMjBcIikpKTtcbiAgICB9XG59XG5leHBvcnRzLkZvb3RlciA9IEZvb3RlcjtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciBpZCA9IFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xudmFyIHVwZGF0ZSA9IGFwaShpZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYWRkTW9kdWxlc1RvRG9tKGlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGlkID0gb3B0aW9ucy5iYXNlID8gaWQgKyBvcHRpb25zLmJhc2UgOiBpZDtcblxuICBpZiAoIXN0eWxlc0luRG9tW2lkXSkge1xuICAgIHN0eWxlc0luRG9tW2lkXSA9IFtdO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuICAgIHZhciBzdHlsZUluRG9tQnlJZCA9IHN0eWxlc0luRG9tW2lkXTtcblxuICAgIGlmIChzdHlsZUluRG9tQnlJZFtpXSkge1xuICAgICAgc3R5bGVJbkRvbUJ5SWRbaV0udXBkYXRlcihwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVJbkRvbUJ5SWQucHVzaCh7XG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKHBhcnQsIG9wdGlvbnMpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBqID0gbGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVtpZF0ubGVuZ3RoOyBqKyspIHtcbiAgICBzdHlsZXNJbkRvbVtpZF1bal0udXBkYXRlcigpO1xuICB9XG5cbiAgc3R5bGVzSW5Eb21baWRdLmxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuXG4gIGlmIChzdHlsZXNJbkRvbVtpZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHN0eWxlc0luRG9tW2lkXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGFkZE1vZHVsZXNUb0RvbShpZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIGFkZE1vZHVsZXNUb0RvbShpZCwgbmV3TGlzdCB8fCBbXSwgb3B0aW9ucyk7XG4gIH07XG59OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgYXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmFwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hcHAgPiBkaXYge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1cHggNGZyIDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgJ2hlYWRlcidcXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFpbicgXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvb3Rlcic7XFxufVxcblxcbi5kYXJrID4gLm1haW4tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyODJDMzU7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGxpbmVhcjtcXG59XFxuXFxuLmRhcmsgPiAubWFpbi1jb250YWluZXIgPiAuYmxvZyA+IC5jYXJkcyA+IC5ibG9nLWNhcmQge1xcbiAgYmFja2dyb3VuZDogcmdiKDQ5LCA0OSwgNDkpO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cyBsaW5lYXI7XFxufVxcblxcbi5kYXJrID4gLm1haW4tY29udGFpbmVyID4gLmRyYXdlci1jb250YWluZXIgPiAuZHJhd2VyIHtcXG4gIGJhY2tncm91bmQ6ICNDMEMzQzY7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cyBsaW5lYXI7XFxufVxcblxcbi5kcmF3ZXItb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMzApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmhpZGUge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLmRyYXdlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExNXB4KTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyAqL1xcbiAgdG9wOiA2NXB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uZHJhd2VyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3gtc2hhZG93OiAxMnB4IDBweCA4cHggMHB4IHJnYmEoMCwwLDAsMC4yNSksIDEwcHggMCA1cHggLTVweCByZ2JhKDAsMCwwLDAuMjIpO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuXFxuLmRyYXdlciArIC5kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMEMzQzY7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgLyogcG9zaXRpb246IHN0aWNreTsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtaW4td2lkdGg6IDI2NXB4O1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG59XFxuXFxuLmhlYWRlciB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOThmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLmhlYWRlci1uYXYge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyIHtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMjY1cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAtdG9wOiA2NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciA+IGEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB0b3A6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG59XFxuXFxuLnByb2Zlc3Npb24ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkOWRiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZmxleDogMSAwIDEwMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjODE4Mzg1O1xcbn1cXG5cXG4uZHJhd2VyLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmhlYWRlci1uYXYtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmRyYXdlci1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcmF3ZXItaXRlbSA+IGRpdiB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zaGFkb3ctMSB7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XFxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsgICovXFxufVxcblxcbi5zaGFkb3ctMiB7XFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XFxufVxcblxcbi5zaGFkb3ctMyB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcXG59XFxuXFxuLnNoYWRvdy00IHtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzgxODM4NVxcbiAgXFxufVxcblxcbi5jYXJkLXN1YmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNhcmQtZGF0ZSwgLmNhcmQtcmVhZCB7XFxuICBjb2xvcjogIzgxODM4NTtcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaWduYXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZm9udC1mYW1pbHk6ICdIb21lbWFkZSBBcHBsZScsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnNpZ25hdHVyZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2NmZTJmMztcXG59XFxuXFxuLmJsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWRvd3M6IDEwMCU7XFxuICAvKiB3aWR0aDogODAlO1xcbiAgZmxleC13cmFwOiB3cmFwOyAqL1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ibG9nLWNhcmQge1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLi1zbSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbi4tbWQge1xcbiAgZmxleDogMiAyIGF1dG87XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uLWxnIHtcXG4gIGZsZXg6IDMgMyBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmJsb2ctY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjM2M4NmUwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMgZWFzZS1pbi1vdXQsIFxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtIDEwMG1zIGVhc2U7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5idXR0b246aG92ZXIsXFxuLmJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjMzY3NmM0O1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XFxuICBcXG59XFxuXFxuLmJ1dHRvbjpmb2N1cyB7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjsgKi9cXG4gIC8qIG91dGxpbmUtb2Zmc2V0OiAtNHB4OyAqL1xcbn1cXG5cXG4uYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgLmhvbWUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmhvbWUtY2FyZCB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm5hbWUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gIFxcbiAgLnByb2Zlc3Npb24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzMwcHgpIHtcXG4gIC5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuICB9XFxufVxcblxcbi5yZWFjdC10b2dnbGUge1xcbiAgdG91Y2gtYWN0aW9uOiBwYW4teDtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVhY3QtdG9nZ2xlLXNjcmVlbnJlYWRlci1vbmx5IHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLnJlYWN0LXRvZ2dsZS0tZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XFxufVxcblxcbi5yZWFjdC10b2dnbGUtdHJhY2sge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4ucmVhY3QtdG9nZ2xlOmhvdmVyOm5vdCgucmVhY3QtdG9nZ2xlLS1kaXNhYmxlZCkgLnJlYWN0LXRvZ2dsZS10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ0RDREO1xcbn1cXG5cXG4ucmVhY3QtdG9nZ2xlLS1jaGVja2VkIC5yZWFjdC10b2dnbGUtdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENEQ0RDtcXG59XFxuXFxuLnJlYWN0LXRvZ2dsZS0tY2hlY2tlZDpob3Zlcjpub3QoLnJlYWN0LXRvZ2dsZS0tZGlzYWJsZWQpIC5yZWFjdC10b2dnbGUtdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnJlYWN0LXRvZ2dsZS10cmFjay1jaGVjayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgbGVmdDogOHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2U7XFxufVxcblxcbi5yZWFjdC10b2dnbGUtLWNoZWNrZWQgLnJlYWN0LXRvZ2dsZS10cmFjay1jaGVjayB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZTtcXG59XFxuXFxuLnJlYWN0LXRvZ2dsZS10cmFjay14IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB0b3A6IDBweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2U7XFxufVxcblxcbi5yZWFjdC10b2dnbGUtLWNoZWNrZWQgLnJlYWN0LXRvZ2dsZS10cmFjay14IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5yZWFjdC10b2dnbGUtdGh1bWIge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbiAgbGVmdDogMXB4O1xcbiAgd2lkdGg6IDIycHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNEQ0RDREO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xcbn1cXG5cXG4ucmVhY3QtdG9nZ2xlLS1jaGVja2VkIC5yZWFjdC10b2dnbGUtdGh1bWIge1xcbiAgbGVmdDogMjdweDtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnJlYWN0LXRvZ2dsZS0tZm9jdXMgLnJlYWN0LXRvZ2dsZS10aHVtYiB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggM3B4IDJweCAjMDA5OUUwO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDNweCAycHggIzAwOTlFMDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDNweCAjMDA5OUUwO1xcbn1cXG5cXG4ucmVhY3QtdG9nZ2xlOmFjdGl2ZTpub3QoLnJlYWN0LXRvZ2dsZS0tZGlzYWJsZWQpIC5yZWFjdC10b2dnbGUtdGh1bWIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggIzAwOTlFMDtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICMwMDk5RTA7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggIzAwOTlFMDtcXG59XFxuXFxucHJlIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5YTljO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbaV0pO1xuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==