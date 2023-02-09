/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bellota:wght@700&family=Inter&family=Roboto+Condensed:wght@400;700&family=Roboto+Serif:opsz@8..144&family=Roboto:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".index-main-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100vw;\n  font-size: 14px;\n}\n\n.header-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1440px;\n  width: 90vw;\n  height: 86px;\n  box-shadow: 0 3px 5px 0 rgba(185, 185, 185, 0.3411764706);\n}\n\n.header-container__menu {\n  display: none;\n}\n\n.header-menu__item {\n  text-decoration: none;\n  color: black;\n}\n.header-menu__item:hover {\n  cursor: pointer;\n}\n\n.header-menu__item::after {\n  content: \"\";\n  border-bottom: 2px solid #7acca6;\n  display: block;\n  width: 0px;\n}\n\n.header-menu__item:hover::after {\n  width: 100%;\n  height: 2px;\n  right: 0;\n  transition: 0.5s;\n}\n\n.header-container__contacts {\n  display: none;\n}\n\n@media (min-width: 1110px) {\n  .header-container__menu {\n    display: flex;\n    width: auto;\n    height: 20px;\n    gap: 60px;\n    font-family: \"Roboto Condensed\";\n  }\n  .header-container__contacts {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n}\n.header-contacts_phone {\n  font-family: \"Inter\";\n}\n.header-contacts_phone:hover {\n  color: #3c2a99;\n  transition: 0.5s;\n}\n\n.header-contacts_btn {\n  width: 180px;\n  height: 42px;\n  background-color: #99a3ff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-style: \"Roboto\";\n}\n.header-contacts_btn:hover {\n  background-color: #3c2a99;\n  transition: 0.5s;\n}\n\n.header-container-left {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n}\n\n.index-title-container {\n  display: grid;\n  grid-template-areas: \"title img\" \"sub img\";\n  grid-template-rows: auto auto;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 90vw;\n  max-width: 1440px;\n  height: 421px;\n  margin-top: 60px;\n}\n\n.index-title__text {\n  width: auto;\n}\n\n.index-title__title {\n  grid-area: title;\n  font-family: \"Bellota\";\n  font-size: 62px;\n  margin: 0px;\n}\n\n@media (max-width: 1100px) {\n  .index-title__title {\n    font-size: calc(24px + 2.7777777778vw);\n  }\n}\n.index-title__highlight {\n  color: #3c2a99;\n}\n\n.index-title__sub {\n  display: flex;\n  grid-area: sub;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  max-width: 331px;\n  font-family: \"Roboto Condensed\";\n  font-size: 14px;\n  margin-top: 58px;\n  margin-bottom: 20px;\n}\n\n.index-title-container__img {\n  display: flex;\n  grid-area: img;\n  width: 401px;\n  padding: 10px;\n  align-items: flex-start;\n}\n\n@media (max-width: 940px) {\n  .index-title-container {\n    display: grid;\n    grid-template-areas: \"title title\" \"sub img\";\n    grid-template-rows: auto auto;\n    grid-template-columns: 175px auto;\n    height: auto;\n  }\n  .index-title-container__img {\n    grid-area: img;\n    justify-self: end;\n    width: 100%;\n    max-width: 140px;\n    max-height: 130px;\n    margin-top: 30px;\n    padding: 0;\n  }\n  .index-title__title {\n    grid-area: title;\n  }\n  .index-title__sub {\n    grid-area: sub;\n    width: 200px;\n    height: auto;\n    margin-top: 30px;\n  }\n}\n.index-service-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100vw;\n  height: auto;\n  background-color: #3c2a99;\n  color: white;\n  overflow: hidden;\n}\n\n.index-service-container__img {\n  width: 888px;\n  transform: translateX(-10%);\n  position: static;\n}\n\n.index-service-text__title {\n  font-family: \"Bellota\";\n  font-size: 36px;\n  margin-bottom: 40px;\n}\n\n.index-service-text__text {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Roboto Serif\";\n  font-weight: 400;\n  font-size: 20px;\n  width: 525px;\n  margin-bottom: 40px;\n}\n\n.index-service__btn {\n  background-color: #3c2a99;\n  border-radius: 5px;\n  border: 1px solid white;\n  color: white;\n  width: 176px;\n  height: 42px;\n  margin-bottom: 40px;\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAOA;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,eAAA;AALF;;AAUA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,yDAAA;AAPF;;AAUA;EACE,aAAA;AAPF;;AAUA;EACE,qBAAA;EACA,YAAA;AAPF;AAQE;EACE,eAAA;AANJ;;AAUA;EACE,WAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;AAPF;;AAUA;EACE,WAAA;EACA,WAAA;EACA,QAAA;EACA,gBAAA;AAPF;;AAUA;EACE,aAAA;AAPF;;AAUA;EACE;IACE,aAAA;IACA,WAAA;IACA,YAAA;IACA,SAAA;IACA,+BAAA;EAPF;EAUA;IACE,aAAA;IACA,mBAAA;IACA,SAAA;EARF;AACF;AAWA;EACE,oBAAA;AATF;AAUE;EACE,cA3EG;EA4EH,gBAAA;AARJ;;AAYA;EACE,YAAA;EACA,YAAA;EACA,yBAlFU;EAmFV,YAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;AATF;AAUE;EACE,yBAzFG;EA0FH,gBAAA;AARJ;;AAYA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AATF;;AAcA;EACE,aAAA;EACA,0CACE;EAEF,6BAAA;EACA,gCAAA;EACA,8BAAA;EACA,uBAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;AAbF;;AAgBA;EACE,WAAA;AAbF;;AAgBA;EACE,gBAAA;EACA,sBAAA;EACA,eAAA;EACA,WAAA;AAbF;;AAeA;EACE;IACE,sCAAA;EAZF;AACF;AAeA;EACE,cAtIK;AAyHP;;AAgBA;EACE,aAAA;EACA,cAAA;EACA,sBAAA;EACA,8BAAA;EACA,SAAA;EACA,gBAAA;EACA,+BAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AAbF;;AAgBA;EACE,aAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AAbF;;AAgBA;EACE;IACE,aAAA;IACA,4CACE;IAEF,6BAAA;IACA,iCAAA;IAEA,YAAA;EAhBF;EAmBA;IACE,cAAA;IACA,iBAAA;IACA,WAAA;IACA,gBAAA;IACA,iBAAA;IACA,gBAAA;IACA,UAAA;EAjBF;EAoBA;IACE,gBAAA;EAlBF;EAqBA;IACE,cAAA;IACA,YAAA;IACA,YAAA;IACA,gBAAA;EAnBF;AACF;AAwBA;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,yBAxMK;EAyML,YAAA;EACA,gBAAA;AAtBF;;AAyBA;EACE,YAAA;EACA,2BAAA;EACA,gBAAA;AAtBF;;AAyBA;EACE,sBAAA;EACA,eAAA;EACA,mBAAA;AAtBF;;AAyBA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;AAtBF;;AAyBA;EACE,yBApOK;EAqOL,kBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;AAtBF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bellota:wght@700&family=Inter&family=Roboto+Condensed:wght@400;700&family=Roboto+Serif:opsz@8..144&family=Roboto:wght@500&display=swap\");\r\n\r\n$blue: #3c2a99;\r\n$lightBlue: #99a3ff;\r\n$green: #00a658;\r\n$lightGreen: #7acca6;\r\n\r\n.index-main-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  width: 100vw;\r\n  font-size: 14px;\r\n}\r\n\r\n// HEADER //\r\n\r\n.header-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  max-width: 1440px;\r\n  width: 90vw;\r\n  height: 86px;\r\n  box-shadow: 0 3px 5px 0 #b9b9b957;\r\n}\r\n\r\n.header-container__menu {\r\n  display: none;\r\n}\r\n\r\n.header-menu__item {\r\n  text-decoration: none;\r\n  color: black;\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.header-menu__item::after {\r\n  content: \"\";\r\n  border-bottom: 2px solid $lightGreen;\r\n  display: block;\r\n  width: 0px;\r\n}\r\n\r\n.header-menu__item:hover::after {\r\n  width: 100%;\r\n  height: 2px;\r\n  right: 0;\r\n  transition: 0.5s;\r\n}\r\n\r\n.header-container__contacts {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 1110px) {\r\n  .header-container__menu {\r\n    display: flex;\r\n    width: auto;\r\n    height: 20px;\r\n    gap: 60px;\r\n    font-family: \"Roboto Condensed\";\r\n  }\r\n\r\n  .header-container__contacts {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n  }\r\n}\r\n\r\n.header-contacts_phone {\r\n  font-family: \"Inter\";\r\n  &:hover {\r\n    color: $blue;\r\n    transition: 0.5s;\r\n  }\r\n}\r\n\r\n.header-contacts_btn {\r\n  width: 180px;\r\n  height: 42px;\r\n  background-color: $lightBlue;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-style: \"Roboto\";\r\n  &:hover {\r\n    background-color: $blue;\r\n    transition: 0.5s;\r\n  }\r\n}\r\n\r\n.header-container-left {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 60px;\r\n}\r\n\r\n// TITLE //\r\n\r\n.index-title-container {\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"title img\"\r\n    \"sub img\";\r\n  grid-template-rows: auto auto;\r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  width: 90vw;\r\n  max-width: 1440px;\r\n  height: 421px;\r\n  margin-top: 60px;\r\n}\r\n\r\n.index-title__text {\r\n  width: auto;\r\n}\r\n\r\n.index-title__title {\r\n  grid-area: title;\r\n  font-family: \"Bellota\";\r\n  font-size: 62px;\r\n  margin: 0px;\r\n}\r\n@media (max-width: 1100px) {\r\n  .index-title__title {\r\n    font-size: calc(24px + 40 * (100vw / 1440));\r\n  }\r\n}\r\n\r\n.index-title__highlight {\r\n  color: $blue;\r\n}\r\n\r\n.index-title__sub {\r\n  display: flex;\r\n  grid-area: sub;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  max-width: 331px;\r\n  font-family: \"Roboto Condensed\";\r\n  font-size: 14px;\r\n  margin-top: 58px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.index-title-container__img {\r\n  display: flex;\r\n  grid-area: img;\r\n  width: 401px;\r\n  padding: 10px;\r\n  align-items: flex-start;\r\n}\r\n\r\n@media (max-width: 940px) {\r\n  .index-title-container {\r\n    display: grid;\r\n    grid-template-areas:\r\n      \"title title\"\r\n      \"sub img\";\r\n    grid-template-rows: auto auto;\r\n    grid-template-columns: 175px auto;\r\n    // justify-content: center;\r\n    height: auto;\r\n  }\r\n\r\n  .index-title-container__img {\r\n    grid-area: img;\r\n    justify-self: end;\r\n    width: 100%;\r\n    max-width: 140px;\r\n    max-height: 130px;\r\n    margin-top: 30px;\r\n    padding: 0;\r\n  }\r\n\r\n  .index-title__title {\r\n    grid-area: title;\r\n  }\r\n\r\n  .index-title__sub {\r\n    grid-area: sub;\r\n    width: 200px;\r\n    height: auto;\r\n    margin-top: 30px;\r\n  }\r\n}\r\n\r\n// SERVICE //\r\n\r\n.index-service-container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: auto;\r\n  background-color: $blue;\r\n  color: white;\r\n  overflow: hidden;\r\n}\r\n\r\n.index-service-container__img {\r\n  width: 888px;\r\n  transform: translateX(-10%);\r\n  position: static; \r\n}\r\n\r\n.index-service-text__title {\r\n  font-family: \"Bellota\";\r\n  font-size: 36px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.index-service-text__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: \"Roboto Serif\";\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  width: 525px;  \r\n  margin-bottom: 40px;\r\n}\r\n\r\n.index-service__btn {\r\n  background-color: $blue;\r\n  border-radius: 5px;\r\n  border: 1px solid white;\r\n  color: white;\r\n  width: 176px;\r\n  height: 42px;\r\n  margin-bottom: 40px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bellota:wght@700&family=Inter&family=Roboto+Condensed:wght@400;700&family=Roboto+Serif:opsz@8..144&family=Roboto:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".index-main-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100vw;\n  font-size: 14px;\n}\n\n.header-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1440px;\n  width: 90vw;\n  height: 86px;\n  box-shadow: 0 3px 5px 0 rgba(185, 185, 185, 0.3411764706);\n}\n\n.header-container__menu {\n  display: none;\n}\n\n.header-menu__item {\n  text-decoration: none;\n  color: black;\n}\n.header-menu__item:hover {\n  cursor: pointer;\n}\n\n.header-menu__item::after {\n  content: \"\";\n  border-bottom: 2px solid #7acca6;\n  display: block;\n  width: 0px;\n}\n\n.header-menu__item:hover::after {\n  width: 100%;\n  height: 2px;\n  right: 0;\n  transition: 0.5s;\n}\n\n.header-container__contacts {\n  display: none;\n}\n\n@media (min-width: 1110px) {\n  .header-container__menu {\n    display: flex;\n    width: auto;\n    height: 20px;\n    gap: 60px;\n    font-family: \"Roboto Condensed\";\n  }\n  .header-container__contacts {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n}\n.header-contacts_phone {\n  font-family: \"Inter\";\n}\n.header-contacts_phone:hover {\n  color: #3c2a99;\n  transition: 0.5s;\n}\n\n.header-contacts_btn {\n  width: 180px;\n  height: 42px;\n  background-color: #99a3ff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-style: \"Roboto\";\n}\n.header-contacts_btn:hover {\n  background-color: #3c2a99;\n  transition: 0.5s;\n}\n\n.header-container-left {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n}\n\n.index-title-container {\n  display: grid;\n  grid-template-areas: \"title img\" \"sub img\";\n  grid-template-rows: auto auto;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 90vw;\n  max-width: 1440px;\n  height: 421px;\n  margin-top: 60px;\n}\n\n.index-title__text {\n  width: auto;\n}\n\n.index-title__title {\n  grid-area: title;\n  font-family: \"Bellota\";\n  font-size: 62px;\n  margin: 0px;\n}\n\n@media (max-width: 1100px) {\n  .index-title__title {\n    font-size: calc(24px + 2.7777777778vw);\n  }\n}\n.index-title__highlight {\n  color: #3c2a99;\n}\n\n.index-title__sub {\n  display: flex;\n  grid-area: sub;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  max-width: 331px;\n  font-family: \"Roboto Condensed\";\n  font-size: 14px;\n  margin-top: 58px;\n  margin-bottom: 20px;\n}\n\n.index-title-container__img {\n  display: flex;\n  grid-area: img;\n  width: 401px;\n  padding: 10px;\n  align-items: flex-start;\n}\n\n@media (max-width: 940px) {\n  .index-title-container {\n    display: grid;\n    grid-template-areas: \"title title\" \"sub img\";\n    grid-template-rows: auto auto;\n    grid-template-columns: 175px auto;\n    height: auto;\n  }\n  .index-title-container__img {\n    grid-area: img;\n    justify-self: end;\n    width: 100%;\n    max-width: 140px;\n    max-height: 130px;\n    margin-top: 30px;\n    padding: 0;\n  }\n  .index-title__title {\n    grid-area: title;\n  }\n  .index-title__sub {\n    grid-area: sub;\n    width: 200px;\n    height: auto;\n    margin-top: 30px;\n  }\n}\n.index-service-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100vw;\n  height: auto;\n  background-color: #3c2a99;\n  color: white;\n  overflow: hidden;\n}\n\n.index-service-container__img {\n  width: 888px;\n  transform: translateX(-10%);\n  position: static;\n}\n\n.index-service-text__title {\n  font-family: \"Bellota\";\n  font-size: 36px;\n  margin-bottom: 40px;\n}\n\n.index-service-text__text {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Roboto Serif\";\n  font-weight: 400;\n  font-size: 20px;\n  width: 525px;\n  margin-bottom: 40px;\n}\n\n.index-service__btn {\n  background-color: #3c2a99;\n  border-radius: 5px;\n  border: 1px solid white;\n  color: white;\n  width: 176px;\n  height: 42px;\n  margin-bottom: 40px;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AACA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,yDAAyD;AAC3D;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,gCAAgC;EAChC,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,WAAW;EACX,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;IACb,WAAW;IACX,YAAY;IACZ,SAAS;IACT,+BAA+B;EACjC;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;EACX;AACF;AACA;EACE,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,0CAA0C;EAC1C,6BAA6B;EAC7B,gCAAgC;EAChC,8BAA8B;EAC9B,uBAAuB;EACvB,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;EACf,WAAW;AACb;;AAEA;EACE;IACE,sCAAsC;EACxC;AACF;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,8BAA8B;EAC9B,SAAS;EACT,gBAAgB;EAChB,+BAA+B;EAC/B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE;IACE,aAAa;IACb,4CAA4C;IAC5C,6BAA6B;IAC7B,iCAAiC;IACjC,YAAY;EACd;EACA;IACE,cAAc;IACd,iBAAiB;IACjB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;EACZ;EACA;IACE,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,gBAAgB;EAClB;AACF;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bellota:wght@700&family=Inter&family=Roboto+Condensed:wght@400;700&family=Roboto+Serif:opsz@8..144&family=Roboto:wght@500&display=swap\");\n.index-main-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100vw;\n  font-size: 14px;\n}\n\n.header-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1440px;\n  width: 90vw;\n  height: 86px;\n  box-shadow: 0 3px 5px 0 rgba(185, 185, 185, 0.3411764706);\n}\n\n.header-container__menu {\n  display: none;\n}\n\n.header-menu__item {\n  text-decoration: none;\n  color: black;\n}\n.header-menu__item:hover {\n  cursor: pointer;\n}\n\n.header-menu__item::after {\n  content: \"\";\n  border-bottom: 2px solid #7acca6;\n  display: block;\n  width: 0px;\n}\n\n.header-menu__item:hover::after {\n  width: 100%;\n  height: 2px;\n  right: 0;\n  transition: 0.5s;\n}\n\n.header-container__contacts {\n  display: none;\n}\n\n@media (min-width: 1110px) {\n  .header-container__menu {\n    display: flex;\n    width: auto;\n    height: 20px;\n    gap: 60px;\n    font-family: \"Roboto Condensed\";\n  }\n  .header-container__contacts {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n  }\n}\n.header-contacts_phone {\n  font-family: \"Inter\";\n}\n.header-contacts_phone:hover {\n  color: #3c2a99;\n  transition: 0.5s;\n}\n\n.header-contacts_btn {\n  width: 180px;\n  height: 42px;\n  background-color: #99a3ff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-style: \"Roboto\";\n}\n.header-contacts_btn:hover {\n  background-color: #3c2a99;\n  transition: 0.5s;\n}\n\n.header-container-left {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n}\n\n.index-title-container {\n  display: grid;\n  grid-template-areas: \"title img\" \"sub img\";\n  grid-template-rows: auto auto;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 90vw;\n  max-width: 1440px;\n  height: 421px;\n  margin-top: 60px;\n}\n\n.index-title__text {\n  width: auto;\n}\n\n.index-title__title {\n  grid-area: title;\n  font-family: \"Bellota\";\n  font-size: 62px;\n  margin: 0px;\n}\n\n@media (max-width: 1100px) {\n  .index-title__title {\n    font-size: calc(24px + 2.7777777778vw);\n  }\n}\n.index-title__highlight {\n  color: #3c2a99;\n}\n\n.index-title__sub {\n  display: flex;\n  grid-area: sub;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  max-width: 331px;\n  font-family: \"Roboto Condensed\";\n  font-size: 14px;\n  margin-top: 58px;\n  margin-bottom: 20px;\n}\n\n.index-title-container__img {\n  display: flex;\n  grid-area: img;\n  width: 401px;\n  padding: 10px;\n  align-items: flex-start;\n}\n\n@media (max-width: 940px) {\n  .index-title-container {\n    display: grid;\n    grid-template-areas: \"title title\" \"sub img\";\n    grid-template-rows: auto auto;\n    grid-template-columns: 175px auto;\n    height: auto;\n  }\n  .index-title-container__img {\n    grid-area: img;\n    justify-self: end;\n    width: 100%;\n    max-width: 140px;\n    max-height: 130px;\n    margin-top: 30px;\n    padding: 0;\n  }\n  .index-title__title {\n    grid-area: title;\n  }\n  .index-title__sub {\n    grid-area: sub;\n    width: 200px;\n    height: auto;\n    margin-top: 30px;\n  }\n}\n.index-service-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100vw;\n  height: auto;\n  background-color: #3c2a99;\n  color: white;\n  overflow: hidden;\n}\n\n.index-service-container__img {\n  width: 888px;\n  transform: translateX(-10%);\n  position: static;\n}\n\n.index-service-text__title {\n  font-family: \"Bellota\";\n  font-size: 36px;\n  margin-bottom: 40px;\n}\n\n.index-service-text__text {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Roboto Serif\";\n  font-weight: 400;\n  font-size: 20px;\n  width: 525px;\n  margin-bottom: 40px;\n}\n\n.index-service__btn {\n  background-color: #3c2a99;\n  border-radius: 5px;\n  border: 1px solid white;\n  color: white;\n  width: 176px;\n  height: 42px;\n  margin-bottom: 40px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");



const mainContainer = document.querySelector(".index-main-container");
const addElement = ({
  createdElement,
  content = "",
  img = "",
  link = "",
  addClass = "",
  parentElement = undefined,
  grandParentElement = undefined
}) => {
  const element = document.createElement(createdElement);
  if (content) {
    element.innerHTML = content;
  }
  if (img) {
    element.src = img;
  }
  if (link) {
    element.href = link;
  }
  if (addClass) {
    element.classList.add(addClass);
  }
  if (parentElement) {
    parentElement?.appendChild(element);
    return grandParentElement?.appendChild(parentElement);
  }
  return mainContainer;
};
const createHeader = () => {
  const headerMenu = document.querySelector(".header-container__menu");
  const headerContacts = document.querySelector(".header-container__contacts");
  addElement({
    createdElement: "a",
    content: "ГЛАВНАЯ",
    link: "/",
    addClass: `header-menu__item`,
    parentElement: headerMenu
  });
  addElement({
    createdElement: "a",
    content: "КАТАЛОГ",
    addClass: `header-menu__item`,
    parentElement: headerMenu
  });
  addElement({
    createdElement: "a",
    content: "СТАТЬИ",
    addClass: `header-menu__item`,
    parentElement: headerMenu
  });
  addElement({
    createdElement: "a",
    content: "КОНТАКТЫ",
    link: "/contacts/",
    addClass: `header-menu__item`,
    parentElement: headerMenu
  });
  addElement({
    createdElement: "a",
    content: "О НАС",
    addClass: `header-menu__item`,
    parentElement: headerMenu
  });
  addElement({
    createdElement: "a",
    content: "+7 (495) 369-39-61",
    link: "",
    parentElement: headerContacts,
    addClass: "header-contacts_phone"
  });
  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК!",
    parentElement: headerContacts,
    addClass: "header-contacts_btn"
  });
};
createHeader();
const createBody = () => {
  // TITLE //
  const titleContainer = document.querySelector(".index-title-container");
  addElement({
    createdElement: "h1",
    content: `<span class = 'index-title__highlight'>ХУДОЖЕСТВЕННОЕ</span> 
    </br>
    ЛИТЬЕ ИЗ
    </br>
    ЧУГУНА, ЛАТУНИ, БРОНЗЫ`,
    parentElement: titleContainer,
    addClass: "index-title__title"
  });
  const titleSub = document.createElement("div");
  titleSub.classList.add("index-title__sub");
  addElement({
    createdElement: "div",
    content: `<span>ГРАФИК
    <br>пн – пт с 9:00 до 17:00</span`,
    parentElement: titleSub,
    grandParentElement: titleContainer
  });
  addElement({
    createdElement: "div",
    content: `<span>АДРЕС
    <br>Московская область г. Ногинск ул. 200 лет Города, д. 2</span`,
    parentElement: titleSub,
    grandParentElement: titleContainer
  });

  //  SERVICE  //
  const serviceContainer = document.querySelector(".index-service-container");
  const serviceTextContainer = document.createElement("div");
  serviceTextContainer.classList.add("index-service-container__text");
  addElement({
    createdElement: "h1",
    content: "ПРОДАЮЩИЙ ЗАГОЛОВОК",
    addClass: "index-service-text__title",
    parentElement: serviceTextContainer,
    grandParentElement: serviceContainer
  });
  addElement({
    createdElement: "span",
    content: `Мы готовы изготовить для Вас Изделия из чугуна, <br>
    латуни и бронзы во всех направлениях, кроме технического литья. 
    <br>
    <br>
    От простых ограждений из металла, до самых сложных <br>
    и неповторимых в чугуне, бронзе. <br>
    Садово-парковая мебель, козырьки, ворота, <br>
    мангалы с именными гербами,<br><br>
    чугунные винтовые, спиральные и маршевые <br>
    лестницы,  любых параметров и комплектации. <br><br>
    Каждое изделие индивидуально и неповторимо!`,
    addClass: 'index-service-text__text',
    parentElement: serviceTextContainer
  });
  addElement({
    createdElement: 'button',
    content: 'ЗАКАЗАТЬ ЗВОНОК',
    addClass: 'index-service__btn',
    parentElement: serviceTextContainer
  });
};
createBody();
})();

/******/ })()
;
//# sourceMappingURL=index.c9645494b0ec38814b82.js.map