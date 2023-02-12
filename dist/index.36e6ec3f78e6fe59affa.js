"use strict";
(self["webpackChunkllc"] = self["webpackChunkllc"] || []).push([["index"],{

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

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _img_prod1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/prod1.png */ "./src/img/prod1.png");
/* harmony import */ var _img_prod2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/prod2.png */ "./src/img/prod2.png");
/* harmony import */ var _img_prod3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/prod3.png */ "./src/img/prod3.png");
/* harmony import */ var _img_prod4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/prod4.png */ "./src/img/prod4.png");
/* harmony import */ var _img_prod5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/prod5.png */ "./src/img/prod5.png");
/* harmony import */ var _img_prod6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/prod6.png */ "./src/img/prod6.png");
/* harmony import */ var _img_prod7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/prod7.png */ "./src/img/prod7.png");
/* harmony import */ var _img_prod8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/prod8.png */ "./src/img/prod8.png");
/* harmony import */ var _img_prod9_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/prod9.png */ "./src/img/prod9.png");
/* harmony import */ var _img_prod10_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/prod10.png */ "./src/img/prod10.png");
/* harmony import */ var _img_prod11_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/prod11.png */ "./src/img/prod11.png");
/* harmony import */ var _img_prod12_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/prod12.png */ "./src/img/prod12.png");
/* harmony import */ var _img_prod13_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/prod13.png */ "./src/img/prod13.png");
/* harmony import */ var _img_prod14_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/prod14.png */ "./src/img/prod14.png");
/* harmony import */ var _img_prod15_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/prod15.png */ "./src/img/prod15.png");
/* harmony import */ var _img_prod16_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/prod16.png */ "./src/img/prod16.png");
/* harmony import */ var _img_prod17_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/prod17.png */ "./src/img/prod17.png");
/* harmony import */ var _img_quality_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/quality.png */ "./src/img/quality.png");
/* harmony import */ var _img_profit_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/profit.png */ "./src/img/profit.png");
/* harmony import */ var _img_confidence_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img/confidence.png */ "./src/img/confidence.png");






















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
    link: "tel: +7 (495) 369-39-61",
    parentElement: headerContacts,
    addClass: "header-contacts__phone"
  });
  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК!",
    parentElement: headerContacts,
    addClass: "header-contacts__btn"
  });
};
createHeader();

//  MOB MENU  //

const createMobMenu = () => {
  const mobMenuBtn = document.querySelector(".header-container__mob-menu");
  const mobMenuCloseBtn = document.querySelector(".mob-menu_close");
  const mobMenuContainer = document.createElement("div");
  const mobMenu = document.createElement("div");
  const mobMenuContacts = document.createElement("div");
  const footer = document.querySelector("footer");
  mobMenuContainer.classList.add("index__mobile-menu");
  addElement({
    createdElement: "a",
    content: "ГЛАВНАЯ",
    link: "/",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu,
    grandParentElement: mobMenuContainer
  });
  addElement({
    createdElement: "a",
    content: "КАТАЛОГ",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu
  });
  addElement({
    createdElement: "a",
    content: "СТАТЬИ",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu
  });
  addElement({
    createdElement: "a",
    content: "КОНТАКТЫ",
    link: "/contacts/",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu
  });
  addElement({
    createdElement: "a",
    content: "О НАС",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu
  });
  addElement({
    createdElement: "a",
    content: "+7 (495) 369-39-61",
    link: "tel: +7 (495) 369-39-61",
    addClass: "mobile-contacts__phone",
    parentElement: mobMenuContacts,
    grandParentElement: mobMenuContainer
  });
  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК!",
    addClass: "mobile-contacts__btn",
    parentElement: mobMenuContacts
  });
  mobMenu.classList.add("index__mobile-menu");
  document.body.appendChild(mobMenuContainer);
  mobMenuBtn.addEventListener("click", () => {
    mobMenuBtn.classList.add("disabled");
    mobMenuCloseBtn.classList.add("active");
    document.body.classList.add("disabled");
    mobMenu.classList.add("mobile-menu__items");
    mobMenu.classList.remove("index__mobile-menu");
    mobMenuContacts.classList.add("mobile-menu__contacts");
    mobMenuContainer.classList.add("active");
  });
  mobMenuCloseBtn.addEventListener("click", () => {
    const mobMenuContainer = document.querySelector(".index__mobile-menu");
    const footer = document.querySelector("footer");
    mobMenuContainer.classList.remove("active");
    mainContainer.classList.remove("disabled");
    mobMenuCloseBtn.classList.remove("active");
    mobMenuBtn.classList.remove("disabled");
    document.body.classList.remove("disabled");
  });
};
createMobMenu();
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
    content: `Мы готовы изготовить для Вас Изделия из чугуна, латуни и бронзы во всех направлениях, кроме технического литья. 
    <br><br>
    От простых ограждений из металла, до самых сложных и неповторимых в чугуне, бронзе. <br><br>
    Садово-парковая мебель, козырьки, ворота, мангалы с именными гербами, чугунные винтовые, спиральные и маршевые лестницы,  любых параметров и комплектации. <br><br>
    Каждое изделие индивидуально и неповторимо!`,
    addClass: "index-service-text__text",
    parentElement: serviceTextContainer
  });
  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК",
    addClass: "index-service__btn",
    parentElement: serviceTextContainer
  });

  //  PRODUCTS //

  const productsContainer = document.querySelector(".index-products-container");
  const productsText = document.createElement("div");
  productsText.classList.add("index-products-container__title");
  const productsItems = document.createElement("div");
  productsItems.classList.add("index-products-container__items");
  addElement({
    createdElement: "h1",
    content: "МЫ СОЗДАЕМ",
    addClass: "products-title__title",
    parentElement: productsText,
    grandParentElement: productsContainer
  });
  addElement({
    createdElement: "span",
    content: `От простых ограждений из металла, до самых сложных и неповторимых в чугуне, бронзе. <br>Садово-парковая мебель, козырьки, ворота, мангалы с именными гербами, чугунные винтовые, спиральные и маршевые лестницы,  любых параметров и комплектации. 
    <br><br>Каждое изделие индивидуально и неповторимо!`,
    addClass: "products-title__text",
    parentElement: productsText
  });
  const images = [_img_prod1_png__WEBPACK_IMPORTED_MODULE_2__, _img_prod2_png__WEBPACK_IMPORTED_MODULE_3__, _img_prod3_png__WEBPACK_IMPORTED_MODULE_4__, _img_prod4_png__WEBPACK_IMPORTED_MODULE_5__, _img_prod5_png__WEBPACK_IMPORTED_MODULE_6__, _img_prod6_png__WEBPACK_IMPORTED_MODULE_7__, _img_prod7_png__WEBPACK_IMPORTED_MODULE_8__, _img_prod8_png__WEBPACK_IMPORTED_MODULE_9__, _img_prod9_png__WEBPACK_IMPORTED_MODULE_10__, _img_prod10_png__WEBPACK_IMPORTED_MODULE_11__, _img_prod11_png__WEBPACK_IMPORTED_MODULE_12__, _img_prod12_png__WEBPACK_IMPORTED_MODULE_13__, _img_prod13_png__WEBPACK_IMPORTED_MODULE_14__, _img_prod14_png__WEBPACK_IMPORTED_MODULE_15__, _img_prod15_png__WEBPACK_IMPORTED_MODULE_16__, _img_prod16_png__WEBPACK_IMPORTED_MODULE_17__, _img_prod17_png__WEBPACK_IMPORTED_MODULE_18__];
  const titlesProd = ["Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название", "Название"];
  const subTitlesProd = ["Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)", "Подзаголовок (опционально)"];
  productsContainer.appendChild(productsItems);
  let i = 1;
  while (i <= 17) {
    const itemBox = document.createElement("div");
    itemBox.classList.add(`products-items__box${i}`);
    productsItems.appendChild(itemBox);
    addElement({
      createdElement: "img",
      img: images[i - 1],
      addClass: `products-items__img`,
      parentElement: itemBox,
      grandParentElement: productsItems
    });
    const itemInfo = document.createElement("div");
    itemInfo.classList.add(`products-items__info`);
    addElement({
      createdElement: "h1",
      content: titlesProd[i - 1],
      addClass: "products-items-info__title",
      parentElement: itemInfo,
      grandParentElement: itemBox
    });
    addElement({
      createdElement: "span",
      content: subTitlesProd[i - 1],
      addClass: "products-items-info__subTitle",
      parentElement: itemInfo
    });
    addElement({
      createdElement: "button",
      content: "ПОДРОБНЕЕ",
      addClass: "products-items-info__button",
      parentElement: itemInfo
    });
    i += 1;
  }
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("products-items__button-div");
  productsContainer.appendChild(btnDiv);
  addElement({
    createdElement: "button",
    content: "ПЕРЕЙТИ В КАТАЛОГ",
    addClass: "products-items__button",
    parentElement: btnDiv
  });

  //  TRAITS  //

  const traitsContainer = document.querySelector(".index-traits-container");
  addElement({
    createdElement: "h1",
    content: "ПОЧЕМУ МЫ?",
    addClass: "traits-container__title",
    parentElement: traitsContainer
  });
  addElement({
    createdElement: "span",
    content: `От простых ограждений из металла, до самых сложных и неповторимых в чугуне, бронзе. <br>Садово-парковая мебель, козырьки, ворота, мангалы с именными гербами, чугунные винтовые, спиральные и маршевые лестницы,  любых параметров и комплектации. 
    <br><br>Каждое изделие индивидуально и неповторимо!`,
    addClass: "traits-container__subTitle",
    parentElement: traitsContainer
  });
  const traitsItems = document.createElement("div");
  traitsItems.classList.add("index-traits-container__items");
  traitsContainer.appendChild(traitsItems);
  const qualityTrait = document.createElement("div");
  qualityTrait.classList.add("traits-container-items__quality");
  traitsItems.appendChild(qualityTrait);
  addElement({
    createdElement: "h1",
    content: "КАЧЕСТВО",
    addClass: "traits-container-items__title",
    parentElement: qualityTrait
  });
  const qualityUl = document.createElement("ul");
  qualityUl.classList.add("traits-container-items__trait-ul");
  qualityTrait.appendChild(qualityUl);
  addElement({
    createdElement: "li",
    content: "Используем качественные материалы",
    parentElement: qualityUl,
    grandParentElement: qualityTrait
  });
  addElement({
    createdElement: "li",
    content: "Мы производство, а не посредник",
    parentElement: qualityUl
  });
  addElement({
    createdElement: "li",
    content: "Бережно доставим и установим",
    parentElement: qualityUl
  });
  addElement({
    createdElement: "img",
    img: _img_quality_png__WEBPACK_IMPORTED_MODULE_19__,
    addClass: "traits-container-items__img",
    parentElement: qualityTrait
  });
  const profitTrait = document.createElement("div");
  profitTrait.classList.add("traits-container-items__profit");
  traitsItems.appendChild(profitTrait);
  addElement({
    createdElement: "h1",
    content: "ВЫГОДА",
    addClass: "traits-container-items__title",
    parentElement: profitTrait,
    grandParentElement: traitsItems
  });
  const profitUl = document.createElement("ul");
  profitUl.classList.add("traits-container-items__trait-ul");
  qualityTrait.appendChild(profitUl);
  addElement({
    createdElement: "li",
    content: "Всегда индивидуально и не дорого",
    parentElement: profitUl,
    grandParentElement: profitTrait
  });
  addElement({
    createdElement: "li",
    content: "Бесплатный выезд на замер",
    parentElement: profitUl
  });
  addElement({
    createdElement: "li",
    content: "Коммерческое предложение за 3 дня",
    parentElement: profitUl
  });
  addElement({
    createdElement: "img",
    img: _img_profit_png__WEBPACK_IMPORTED_MODULE_20__,
    addClass: "traits-container-items__img",
    parentElement: profitTrait
  });
  const confidenceTrait = document.createElement("div");
  confidenceTrait.classList.add("traits-container-items__confidence");
  traitsItems.appendChild(profitTrait);
  addElement({
    createdElement: "h1",
    content: "ДОВЕРИЕ",
    addClass: "traits-container-items__title",
    parentElement: confidenceTrait,
    grandParentElement: traitsItems
  });
  const confidenceUl = document.createElement("ul");
  confidenceUl.classList.add("traits-container-items__trait-ul");
  confidenceTrait.appendChild(confidenceUl);
  addElement({
    createdElement: "li",
    content: "Принимаем заказы по всей России",
    parentElement: confidenceUl,
    grandParentElement: confidenceTrait
  });
  addElement({
    createdElement: "li",
    content: "Более 150 выполненных проектов",
    parentElement: confidenceUl
  });
  addElement({
    createdElement: "li",
    content: "Клиенты всегда довольны результатом",
    parentElement: confidenceUl
  });
  addElement({
    createdElement: "img",
    img: _img_confidence_png__WEBPACK_IMPORTED_MODULE_21__,
    addClass: "traits-container-items__img",
    parentElement: confidenceTrait
  });
  const createSlider = () => {
    const traitsContainer = document.querySelector(".index-traits-container");
    const slider = document.createElement("div");
    slider.classList.add("index-traits-container__slider");
    traitsContainer.appendChild(slider);
    const qualityTrait = document.createElement("div");
    qualityTrait.classList.add("traits-container__slide-items");
    slider.appendChild(qualityTrait);
    addElement({
      createdElement: "h1",
      content: "КАЧЕСТВО",
      addClass: "traits-container-items__title",
      parentElement: qualityTrait
    });
    const qualityUl = document.createElement("ul");
    qualityUl.classList.add("traits-container-items__trait-ul");
    qualityTrait.appendChild(qualityUl);
    addElement({
      createdElement: "li",
      content: "Используем качественные материалы",
      parentElement: qualityUl,
      grandParentElement: qualityTrait
    });
    addElement({
      createdElement: "li",
      content: "Мы производство, а не посредник",
      parentElement: qualityUl
    });
    addElement({
      createdElement: "li",
      content: "Бережно доставим и установим",
      parentElement: qualityUl
    });
    addElement({
      createdElement: "img",
      img: _img_quality_png__WEBPACK_IMPORTED_MODULE_19__,
      addClass: "traits-container-items__img",
      parentElement: qualityTrait
    });
    const profitTrait = document.createElement("div");
    profitTrait.classList.add("traits-container__slide-items");
    slider.appendChild(profitTrait);
    addElement({
      createdElement: "h1",
      content: "ВЫГОДА",
      addClass: "traits-container-items__title",
      parentElement: profitTrait,
      grandParentElement: slider
    });
    const profitUl = document.createElement("ul");
    profitUl.classList.add("traits-container-items__trait-ul");
    qualityTrait.appendChild(profitUl);
    addElement({
      createdElement: "li",
      content: "Всегда индивидуально и не дорого",
      parentElement: profitUl,
      grandParentElement: profitTrait
    });
    addElement({
      createdElement: "li",
      content: "Бесплатный выезд на замер",
      parentElement: profitUl
    });
    addElement({
      createdElement: "li",
      content: "Коммерческое предложение за 3 дня",
      parentElement: profitUl
    });
    addElement({
      createdElement: "img",
      img: _img_profit_png__WEBPACK_IMPORTED_MODULE_20__,
      addClass: "traits-container-items__img",
      parentElement: profitTrait
    });
    const confidenceTrait = document.createElement("div");
    confidenceTrait.classList.add("traits-container__slide-items");
    slider.appendChild(profitTrait);
    addElement({
      createdElement: "h1",
      content: "ДОВЕРИЕ",
      addClass: "traits-container-items__title",
      parentElement: confidenceTrait,
      grandParentElement: slider
    });
    const confidenceUl = document.createElement("ul");
    confidenceUl.classList.add("traits-container-items__trait-ul");
    confidenceTrait.appendChild(confidenceUl);
    addElement({
      createdElement: "li",
      content: "Принимаем заказы по всей России",
      parentElement: confidenceUl,
      grandParentElement: confidenceTrait
    });
    addElement({
      createdElement: "li",
      content: "Более 150 выполненных проектов",
      parentElement: confidenceUl
    });
    addElement({
      createdElement: "li",
      content: "Клиенты всегда довольны результатом",
      parentElement: confidenceUl
    });
    addElement({
      createdElement: "img",
      img: _img_confidence_png__WEBPACK_IMPORTED_MODULE_21__,
      addClass: "traits-container-items__img",
      parentElement: confidenceTrait
    });
  };
  createSlider();
  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК!",
    addClass: "traits-container__btn",
    parentElement: traitsContainer
  });
};
createBody();

//  FOOTER  //
const createFooter = () => {
  const footerContainer = document.querySelector(".footer-container");
  const footerText1st = document.createElement("div");
  const footerText2nd = document.createElement("div");
  const footerText3rd = document.createElement("div");
  [footerText1st, footerText2nd, footerText3rd].map(el => {
    footerContainer.appendChild(el);
  });
  const adrDiv = document.createElement("div");
  footerText2nd.appendChild(adrDiv);
  const contDiv = document.createElement("div");
  footerText2nd.appendChild(contDiv);
  footerText1st.classList.add("footer-container__text-area");
  footerText2nd.classList.add("footer-container__text-area2");
  footerText3rd.classList.add("footer-container__text-area3");
  const textColumns1 = document.createElement("div");
  const textColumns2 = document.createElement("div");
  const textColumns3 = document.createElement("div");
  const textColumns4 = document.createElement("div");
  const textColumns5 = document.createElement("div");
  const textColumns6 = document.createElement("div");
  const textColumns7 = document.createElement("div");
  const textColumns8 = document.createElement("div");
  const textColumns9 = document.createElement("div");
  const textColumns10 = document.createElement("div");
  const textColumns11 = document.createElement("div");
  const textColumns12 = document.createElement("div");
  const textColumns13 = document.createElement("div");
  const textColumns14 = document.createElement("div");
  const textColumns15 = document.createElement("div");
  const textColumns16 = document.createElement("div");
  [textColumns1, textColumns2, textColumns3, textColumns4, textColumns5, textColumns6, textColumns7, textColumns8, textColumns9, textColumns10, textColumns11, textColumns12, textColumns13, textColumns14, textColumns15, textColumns16].map(el => {
    footerText3rd.appendChild(el);
  });
  addElement({
    createdElement: "span",
    content: `© 2022 LLC SBV 
    Художественное литье из <br>
    чугуна, латуни и бронзы. 
    Все права защищены`,
    addClass: "text-area__text",
    parentElement: footerText1st
  });
  addElement({
    createdElement: "h1",
    content: "АДРЕС",
    addClass: "text-area__contacts-title",
    parentElement: adrDiv
  });
  addElement({
    createdElement: "span",
    content: `Московская область 
    г. Ногинск ул. 200 лет Города, д. 2`,
    addClass: "text-area__text",
    parentElement: adrDiv
  });
  addElement({
    createdElement: "h1",
    content: "ГРАФИК",
    addClass: "text-area__contacts-title",
    parentElement: contDiv
  });
  addElement({
    createdElement: "span",
    content: `пн – пт с 9:00 до 17:00`,
    addClass: "text-area__text",
    parentElement: contDiv
  });
  addElement({
    createdElement: "a",
    content: "Ограждения",
    addClass: "text-area__catalog-title",
    parentElement: textColumns1
  });
  addElement({
    createdElement: "a",
    content: "Терассы патио уличные",
    addClass: "text-area__catalog-text",
    parentElement: textColumns1
  });
  addElement({
    createdElement: "a",
    content: "Ритуальные ограждения",
    addClass: "text-area__catalog-text",
    parentElement: textColumns1
  });
  addElement({
    createdElement: "a",
    content: "Ограждения лестничных маршей",
    addClass: "text-area__catalog-text",
    parentElement: textColumns1
  });
  addElement({
    createdElement: "a",
    content: "Столбы и фонари",
    addClass: "text-area__catalog-title",
    parentElement: textColumns2
  });
  addElement({
    createdElement: "a",
    content: "Фонари",
    addClass: "text-area__catalog-text",
    parentElement: textColumns2
  });
  addElement({
    createdElement: "a",
    content: "Заходные чугунные столбы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns2
  });
  addElement({
    createdElement: "a",
    content: "Опорные столбы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns2
  });
  addElement({
    createdElement: "a",
    content: "Камины, мангалы и барбекю",
    addClass: "text-area__catalog-title",
    parentElement: textColumns3
  });
  addElement({
    createdElement: "a",
    content: "Терассы патио уличные",
    addClass: "text-area__catalog-text",
    parentElement: textColumns3
  });
  addElement({
    createdElement: "a",
    content: "Ритуальные ограждения",
    addClass: "text-area__catalog-text",
    parentElement: textColumns3
  });
  addElement({
    createdElement: "a",
    content: "Ограждения лестничных маршей",
    addClass: "text-area__catalog-text",
    parentElement: textColumns3
  });
  addElement({
    createdElement: "a",
    content: "Козырьки, навесы, входные группы",
    addClass: "text-area__catalog-title",
    parentElement: textColumns4
  });
  addElement({
    createdElement: "a",
    content: "Козырьки",
    addClass: "text-area__catalog-text",
    parentElement: textColumns4
  });
  addElement({
    createdElement: "a",
    content: "Металлические навесы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns4
  });
  addElement({
    createdElement: "a",
    content: "Входные группы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns4
  });
  addElement({
    createdElement: "a",
    content: "Лестницы",
    addClass: "text-area__catalog-title",
    parentElement: textColumns5
  });
  addElement({
    createdElement: "a",
    content: "Винтовые лестницы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns5
  });
  addElement({
    createdElement: "a",
    content: "Маршевые лестницы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns5
  });
  addElement({
    createdElement: "a",
    content: "Садово-парковая мебель",
    addClass: "text-area__catalog-title",
    parentElement: textColumns6
  });
  addElement({
    createdElement: "a",
    content: "Оконные решетки",
    addClass: "text-area__catalog-title",
    parentElement: textColumns7
  });
  addElement({
    createdElement: "a",
    content: "Изделия из стали",
    addClass: "text-area__catalog-title",
    parentElement: textColumns8
  });
  addElement({
    createdElement: "a",
    content: "Латунь, бронза",
    addClass: "text-area__catalog-title",
    parentElement: textColumns9
  });
  addElement({
    createdElement: "a",
    content: "Балясины",
    addClass: "text-area__catalog-title",
    parentElement: textColumns10
  });
  addElement({
    createdElement: "a",
    content: "Ворота, калитки",
    addClass: "text-area__catalog-title",
    parentElement: textColumns11
  });
  addElement({
    createdElement: "a",
    content: "Кронштейны",
    addClass: "text-area__catalog-title",
    parentElement: textColumns12
  });
  addElement({
    createdElement: "a",
    content: "Изделия из композитных материалов",
    addClass: "text-area__catalog-title",
    parentElement: textColumns13
  });
  addElement({
    createdElement: "a",
    content: "Балконы и французкие балконы",
    addClass: "text-area__catalog-title",
    parentElement: textColumns14
  });
  addElement({
    createdElement: "a",
    content: "Страница дизайнера",
    addClass: "text-area__catalog-title",
    parentElement: textColumns15
  });
  addElement({
    createdElement: "a",
    content: "Беседки",
    addClass: "text-area__catalog-title",
    parentElement: textColumns5
  });
};
createFooter();

//  FORM  //

const headerButton = document.querySelector(".header-contacts__btn");
const formArea = document.querySelector(".index-form-area");
const formContainer = document.querySelector(".index-form-container");
const inputsContainer = document.querySelectorAll(".form__input-container");
const formInputs = document.querySelectorAll(".form__input");
inputsContainer.forEach(el => {
  el.addEventListener("click", () => {
    el.classList.add("active");
  });
});
const closeForm = () => {
  const inputsContainer = document.querySelector(".form__input-container.active");
  formArea.classList.remove("active");
  formContainer.classList.remove("active");
  inputsContainer?.classList.remove("active");
  formInputs.forEach(el => {
    el.value = "";
  });
  document.body.classList.remove("disabled");
};
const formFunction = () => {
  formArea.classList.add("active");
  formContainer.classList.add("active");
  document.body.classList.add("disabled");
  formArea.addEventListener("click", closeForm);
};
headerButton.addEventListener("click", formFunction);
const serviceBtn = document.querySelector(".index-service__btn");
serviceBtn.addEventListener("click", formFunction);
const traitsBtn = document.querySelector(".traits-container__btn");
traitsBtn.addEventListener("click", formFunction);

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  margin: 0;\n  align-items: center;\n  overflow-x: hidden;\n}\n\n.preloader {\n  display: grid;\n  grid-template-areas: \"a\";\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  z-index: 9;\n  opacity: 1;\n}\n.preloader.loader_success {\n  display: none;\n}\n\n.loader {\n  position: absolute;\n  grid-area: a;\n  width: 80px;\n  height: 80px;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8274509804), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8274509804), rgba(255, 255, 255, 0));\n  background-size: 400% 400%;\n  animation: anim 4s ease infinite;\n  z-index: 10;\n}\n\n.preloader > img {\n  grid-area: a;\n  width: 80px;\n  height: 80px;\n}\n\n@keyframes anim {\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n}\n.index-main-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  font-size: 14px;\n  background-color: white;\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  z-index: 3;\n  justify-content: center;\n  box-shadow: 0 3px 5px 0 rgba(185, 185, 185, 0.3411764706);\n}\n\n.header-container {\n  max-width: 1280px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-self: center;\n  align-items: center;\n  justify-content: space-between;\n  height: 86px;\n}\n\n.header-container__logo {\n  margin-left: 2px;\n}\n\n.header-container__menu {\n  display: none;\n}\n\n.header-menu__item {\n  text-decoration: none;\n  color: black;\n  font-size: 14px;\n}\n.header-menu__item:hover {\n  cursor: pointer;\n}\n\n.header-menu__item::after {\n  content: \"\";\n  border-bottom: 2px solid #7acca6;\n  display: block;\n  width: 0px;\n}\n\n.header-menu__item:hover::after {\n  width: 100%;\n  height: 2px;\n  right: 0;\n  transition: 0.5s;\n}\n\n.header-container__contacts {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  .header-container__menu {\n    display: flex;\n    width: auto;\n    height: 20px;\n    gap: 60px;\n    font-family: \"Roboto Condensed\";\n  }\n  .header-container__contacts {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    margin-right: 20px;\n  }\n}\n.header-contacts__phone {\n  font-family: \"Inter\";\n  color: #333333;\n  text-decoration: none;\n}\n.header-contacts__phone:hover {\n  color: #3c2a99;\n  transition: 0.5s;\n}\n\n.header-contacts__btn {\n  width: 180px;\n  height: 42px;\n  background-color: #3c2a99;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-style: \"Roboto\";\n  transition: 0.5s;\n}\n.header-contacts__btn:hover {\n  background-color: #99a3ff;\n  cursor: pointer;\n}\n\n.header-container-left {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n}\n\n.mob-menu_close {\n  display: none;\n}\n\n.header-container__mob-menu.disabled {\n  display: none;\n}\n\nfooter.disabled {\n  display: none;\n}\n\n.mob-menu_close.active {\n  display: flex;\n}\n\n.header-container__mob-menu {\n  display: none;\n}\n\n@media (max-width: 420px) {\n  .header-container__mob-menu {\n    display: flex;\n  }\n  header {\n    z-index: 3;\n  }\n  .header-container {\n    margin: 0 20px 0 20px;\n  }\n}\n.index__mobile-menu {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  background-color: white;\n  font-family: \"Roboto Condensed\";\n  font-size: 36px;\n  transform: translateX(-110%);\n  transition: all 0.5s ease 0s;\n  margin-top: 85px;\n  z-index: 2;\n  opacity: 0.2;\n}\n\n.index__mobile-menu.active {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.index__mobile-menu.disabled {\n  transform: translateX(-100%);\n}\n\n.mobile-menu__items {\n  display: flex;\n  flex-direction: column;\n  margin: 60px 0px 0px 40px;\n}\n\n.mobile-menu__contacts {\n  display: flex;\n  flex-direction: column;\n  margin: 40px 0px 0px 40px;\n}\n\n.mobile-menu__item {\n  text-decoration: none;\n  color: black;\n  margin-bottom: 66.6px;\n}\n\n.mobile-contacts__phone {\n  font-family: \"Inter\";\n  font-size: 14px;\n  margin-bottom: 20px;\n  text-decoration: none;\n  color: #333333;\n}\n\n.mobile-contacts__btn {\n  width: 180px;\n  height: 42px;\n  background-color: #3c2a99;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-style: \"Roboto\";\n}\n.mobile-contacts__btn:hover {\n  background-color: #99a3ff;\n  transition: 0.5s;\n}\n\nbody.disabled {\n  overflow-y: hidden;\n}\n\n.index-title-container {\n  display: grid;\n  grid-template-areas: \"title img\" \"sub img\";\n  grid-template-rows: auto auto;\n  grid-template-columns: auto auto;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 90%;\n  max-width: 1280px;\n  height: 421px;\n  margin-top: 60px;\n  margin-bottom: 60px;\n  background-color: white;\n}\n\n.index-title__text {\n  width: auto;\n}\n\n.index-title__title {\n  grid-area: title;\n  font-family: \"Bellota\";\n  font-size: 62px;\n  margin: 0;\n}\n\n@media (max-width: 1100px) {\n  .index-title__title {\n    font-size: calc(24px + 2.7777777778vw);\n  }\n}\n.index-title__highlight {\n  color: #3c2a99;\n}\n\n.index-title__sub {\n  display: flex;\n  grid-area: sub;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  max-width: 331px;\n  font-family: \"Roboto Condensed\";\n  font-size: 14px;\n  margin-top: 58px;\n  margin-bottom: 20px;\n}\n\n.index-title-container__img {\n  display: flex;\n  grid-area: img;\n  width: 401px;\n  padding: 10px;\n  align-items: flex-start;\n}\n\n@media (max-width: 940px) {\n  .index-title-container {\n    display: grid;\n    grid-template-areas: \"title title\" \"sub img\";\n    grid-template-rows: auto auto;\n    grid-template-columns: 175px auto;\n    height: auto;\n    margin-top: 34px;\n  }\n  .index-title-container__img {\n    grid-area: img;\n    justify-self: end;\n    width: 100%;\n    max-width: 140px;\n    max-height: 130px;\n    margin-top: 30px;\n    padding: 0;\n  }\n  .index-title__title {\n    grid-area: title;\n    color: #333333;\n  }\n  .index-title__sub {\n    grid-area: sub;\n    width: 200px;\n    height: auto;\n    margin-top: 30px;\n    color: #333333;\n  }\n}\n.index-service-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  background-color: #3c2a99;\n  color: white;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.index-service-container__text {\n  max-width: 645px;\n  margin-right: 20px;\n}\n\n.index-service-container__img {\n  width: 888px;\n  transform: translateX(-10%);\n}\n\n.index-service-text__title {\n  font-family: \"Bellota\";\n  font-size: 36px;\n  margin-bottom: 40px;\n}\n\n.index-service-text__text {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Roboto Serif\";\n  font-weight: 400;\n  font-size: 20px;\n  margin-bottom: 40px;\n  word-wrap: break-word;\n}\n\n.index-service__btn {\n  background-color: #3c2a99;\n  border-radius: 5px;\n  border: 1px solid white;\n  color: white;\n  width: 176px;\n  height: 42px;\n  margin-bottom: 40px;\n  transition: 0.5s;\n}\n.index-service__btn:hover {\n  background-color: rgba(255, 255, 255, 0.0745098039);\n  cursor: pointer;\n}\n\n@media (max-width: 1100px) {\n  .index-service-container {\n    display: grid;\n    grid-template-areas: \"title\" \"other\";\n    align-items: center;\n    justify-content: center;\n  }\n  .index-service-container__text {\n    display: flex;\n    flex-direction: column;\n    padding: 30px;\n    z-index: 1;\n    text-align: justify;\n    justify-self: center;\n  }\n  .index-service-text__title {\n    font-size: calc(24px + 0.8333333333vw);\n    grid-area: title;\n    margin-bottom: 20px;\n  }\n  .index-service-text__text {\n    font-size: calc(16px + 0.2777777778vw);\n    grid-area: other;\n  }\n  .index-service-container__img {\n    transform: translateX(0);\n    width: 70%;\n    grid-area: other;\n    position: absolute;\n    justify-self: center;\n    align-self: flex-end;\n  }\n}\n@media (max-width: 420px) {\n  .index-service__btn {\n    width: 100%;\n  }\n}\n.index-products-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 1354px;\n  height: auto;\n  margin-top: 68px;\n  justify-content: center;\n  align-items: center;\n  width: 90vw;\n  background-color: white;\n  z-index: 0;\n}\n\n.index-products-container__title {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n  text-align: justify;\n  max-width: 1274px;\n}\n\n.products-title__title {\n  font-family: \"Bellota\";\n  font-size: 36px;\n  margin-bottom: 40px;\n  color: #333333;\n}\n\n.products-title__text {\n  font-family: \"Roboto Serif\";\n  font-size: 20px;\n  color: #4f4f4f;\n}\n\n@media (max-width: 1100px) {\n  .products-title__title {\n    font-size: calc(24px + 0.8333333333vw);\n  }\n  .products-title__text {\n    font-size: calc(16px + 0.2777777778vw);\n  }\n}\n.products-items__img {\n  min-height: 100%;\n  min-width: 100%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  max-height: none;\n  display: block;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  object-fit: cover;\n  z-index: 0;\n  grid-area: 1/1/2/2;\n}\n\n.index-products-container__items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-template-rows: repeat(5, 191px);\n  width: 100%;\n  max-width: 1354px;\n  gap: 20px;\n  grid-auto-flow: dense;\n}\n\n.products-items-info__button {\n  display: flex;\n  position: absolute;\n  width: 117px;\n  height: 34px;\n  margin: 0 0 10px 20px;\n  background-color: rgba(0, 0, 0, 0.42);\n  backdrop-filter: blur(7.5px);\n  border-radius: 4px;\n  border: 1px solid white;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  bottom: -50%;\n  transition: 0.3s linear;\n}\n\n.products-items__info {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-end;\n  background-color: rgba(0, 0, 0, 0.42);\n  backdrop-filter: blur(7.5px);\n  background-image: linear-gradient(107.21deg, rgba(255, 255, 255, 0.4) 3.52%, rgba(255, 255, 255, 0.1) 66.81%);\n  width: 100%;\n  font-family: \"Roboto\";\n  color: white;\n  font-size: 13px;\n  height: 140px;\n  transform: translateY(30%);\n  transition: 0.3s linear;\n  grid-area: 1/1/2/2;\n}\n\n.index-products-container__items > div {\n  display: grid;\n  overflow: hidden;\n  flex-direction: column;\n  border-radius: 8px;\n}\n.index-products-container__items > div:hover {\n  cursor: pointer;\n}\n.index-products-container__items > div:hover .products-items__info {\n  transform: translateY(0%);\n}\n.index-products-container__items > div:hover .products-items-info__button {\n  bottom: 0%;\n  cursor: pointer;\n}\n\n.products-items-info__title {\n  font-size: 16px;\n  margin: 32px 0 4px 20px;\n}\n\n.products-items-info__subTitle {\n  margin: 0px 0px 32px 20px;\n}\n\n.products-items__box1:nth-child(1) {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n\n.products-items__box2:nth-child(2) {\n  grid-column: span 2;\n  grid-row: span 1;\n}\n\n.products-items__box3:nth-child(3) {\n  grid-column: span 1;\n  grid-row: span 2;\n}\n\n.products-items__box4:nth-child(4) {\n  grid-column: span 2;\n  grid-row: span 1;\n}\n\n.products-items__box5:nth-child(5) {\n  grid-column: span 1;\n  grid-row: span 2;\n}\n\n.products-items__box6:nth-child(6) {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n\n.products-items__box7:nth-child(7) {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n\n.products-items__box8:nth-child(8) {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n\n.products-items__box9:nth-child(9) {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n\n.products-items__box10:nth-child(10) {\n  grid-column: span 2;\n  grid-row: span 1;\n}\n\n.products-items__box11:nth-child(11) {\n  grid-column: span 2;\n  grid-row: span 1;\n}\n\n.products-items__box12:nth-child(12) {\n  grid-column: span 1;\n  grid-row: span 2;\n}\n\n.products-items__box13:nth-child(13) {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n\n.products-items__box14:nth-child(14) {\n  grid-column: span 1;\n  grid-row: span 1;\n  grid-column: span 2;\n  grid-row: span 2;\n}\n\n.products-items__box15:nth-child(15) {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n\n.products-items__box16:nth-child(16) {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n\n.products-items__box17:nth-child(17) {\n  grid-column: span 1;\n  grid-row: span 1;\n}\n\n.products-items__button-div {\n  max-width: 1280px;\n  width: 100%;\n}\n\n.products-items__button {\n  width: 188px;\n  height: 42px;\n  background-color: #3c2a99;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  margin: 40px 0 0 0;\n  align-self: flex-start;\n  transition: 0.5s;\n}\n.products-items__button:hover {\n  background-color: #99a3ff;\n  cursor: pointer;\n}\n\n@media (max-width: 420px) {\n  .index-products-container__items {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n    grid-template-rows: repeat(15, 145px);\n  }\n  .index-products-container__items {\n    gap: 10px;\n  }\n  .products-items__button {\n    width: 100%;\n  }\n  .products-title__title {\n    margin-bottom: 20px;\n  }\n  .index-products-container__title {\n    margin-bottom: 20px;\n  }\n  .index-products-container {\n    margin-top: 60px;\n  }\n}\n.index-traits-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 1280px;\n  width: 90vw;\n  height: auto;\n  margin-top: 115px;\n  background-color: white;\n}\n\n.traits-container__title {\n  font-family: \"Bellota\";\n  font-size: 36px;\n  margin: 0;\n  color: #333333;\n}\n\n.traits-container__subTitle {\n  font-family: \"Roboto Serif\";\n  font-size: 20px;\n  margin-top: 40px;\n  color: #4f4f4f;\n  text-align: justify;\n}\n\n.index-traits-container__items {\n  display: flex;\n  flex-direction: row;\n  gap: 40px;\n  margin-top: 40px;\n  width: 100%;\n}\n\n.traits-container-items__img {\n  max-width: 400px;\n  width: 100%;\n  border-radius: 8px;\n}\n\n.traits-container-items__title {\n  font-family: \"Roboto Condensed\";\n  font-size: 32px;\n  font-weight: 400;\n  margin-left: 40px;\n  color: #333333;\n}\n\n.traits-container-items__trait-ul {\n  height: 87px;\n  font-weight: 400;\n  font-size: 18px;\n  color: #828282;\n}\n\n.traits-container-items__trait-ul > li {\n  margin-top: 5px;\n}\n\n.index-traits-container__items > div {\n  background: #ffffff;\n  box-shadow: 0px 0px 60px rgba(79, 79, 79, 0.15);\n  border-radius: 8px;\n  width: auto;\n}\n.index-traits-container__items > div:hover {\n  cursor: pointer;\n}\n\n.traits-container__btn {\n  width: 180px;\n  height: 42px;\n  background-color: #3c2a99;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  margin: 40px 0 99px 0;\n  align-self: flex-start;\n  transition: 0.5s;\n}\n.traits-container__btn:hover {\n  background-color: #99a3ff;\n  cursor: pointer;\n}\n\n@media (max-width: 1110px) {\n  .traits-container-items__trait-ul {\n    height: 120px;\n  }\n}\n@media (max-width: 420px) {\n  .index-traits-container {\n    margin-top: 60px;\n  }\n  .traits-container__subTitle {\n    margin-top: 20px;\n  }\n  .traits-container__title {\n    font-size: calc(24px + 0.8333333333vw);\n  }\n  .traits-container__subTitle {\n    font-size: calc(16px + 0.2777777778vw);\n  }\n  .traits-container__btn {\n    width: 100%;\n  }\n}\n.index-traits-container__slider {\n  padding: 1rem;\n  display: none;\n  overflow-x: scroll;\n  scroll-padding: 0 50%;\n  scroll-snap-type: x mandatory;\n  height: auto;\n}\n\n.traits-container__slide-items {\n  scroll-snap-align: center;\n  display: inline-block;\n  border-radius: 3px;\n  font-size: 0;\n  margin-right: 3rem;\n  min-width: 330px;\n  border-radius: 8px;\n}\n\n@media (max-width: 420px) {\n  .index-traits-container__slider {\n    display: flex;\n    margin-top: 20px;\n  }\n  .index-traits-container__items {\n    display: none;\n  }\n}\nfooter {\n  display: flex;\n  width: 100%;\n  background-color: #4f4f4f;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n\n.footer-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 80vw;\n  min-height: 156px;\n  gap: 20px;\n  font-family: \"Roboto Condensed\";\n  font-size: 12px;\n  color: #bdbdbd;\n  font-weight: 400;\n}\n\n.footer-container__logo {\n  width: 90px;\n  height: 46px;\n}\n\n.footer-container__text-area {\n  display: flex;\n  flex-direction: column;\n  width: auto;\n}\n\n.footer-container__text-area2 {\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  max-width: 170px;\n}\n\n.text-area__contacts-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n}\n\n.footer-container__text-area3 {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: end;\n  margin-top: 20px;\n}\n\n.footer-container__text-area3 > div {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 192px;\n}\n.footer-container__text-area3 > div:hover {\n  cursor: pointer;\n}\n\n.text-area__catalog-title {\n  font-weight: 700;\n  color: white;\n}\n\n.text-area__catalog-text {\n  font-weight: 300;\n}\n\n@media (max-width: 1330px) {\n  .footer-container__text-area3 {\n    justify-content: start;\n  }\n  .footer-container__text-area2 {\n    max-width: 130px;\n  }\n  .footer-container__text-area1 {\n    max-width: 130px;\n  }\n  .text-area__text {\n    white-space: normal;\n  }\n  .footer-container {\n    width: 100vw;\n  }\n  .footer-container__logo {\n    margin-left: 40px;\n  }\n}\n@media (max-width: 1050px) {\n  .footer-container {\n    display: grid;\n    grid-template-areas: \"adr adr\" \"logo c\";\n    gap: 0;\n  }\n  .footer-container__text-area {\n    grid-area: c;\n  }\n  .footer-container__text-area2 {\n    grid-area: adr;\n    flex-direction: column;\n    align-items: start;\n    margin-left: 20px;\n    max-width: none;\n  }\n  .footer-container__text-area2 > div {\n    display: flex;\n    gap: 5px;\n    flex-direction: row;\n    align-items: center;\n    max-width: none;\n  }\n  .footer-container__logo {\n    grid-area: logo;\n    margin-left: 20px;\n  }\n  .footer-container__text-area3 {\n    display: none;\n  }\n}\n.index-form-area {\n  display: flex;\n  position: fixed;\n  background-color: rgb(0, 0, 0);\n  height: 100vh;\n  width: 100vw;\n  z-index: -1;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: 0.2s linear;\n}\n\n.index-form-container {\n  display: flex;\n  position: fixed;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  width: 894px;\n  height: auto;\n  opacity: 0.9;\n  transition: 0.2s linear;\n  z-index: -1;\n  top: 25%;\n  box-shadow: 300ms cubic-bezier(0.4, 0, 0.2, 1) 700ms;\n}\n\n.index-form-area.active {\n  z-index: 3;\n  opacity: 0.4;\n  transition: 0.2s linear;\n}\n\n.index-form-container.active {\n  opacity: 1;\n  z-index: 3;\n  transition: 0.2s linear;\n}\n\n.index-form-container > h1 {\n  font-family: \"Bellota\";\n  font-size: 36px;\n  font-weight: 700;\n  color: #333333;\n  align-self: flex-start;\n  margin: 40px 0 40px 40px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  align-self: flex-start;\n}\n\n.form__input-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 0 40px 40px;\n  width: 702px;\n  height: 56px;\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.form__input-container.active > label {\n  transform: translateY(-30px);\n  background-color: white;\n  font-size: 14px;\n  color: #3c2a99;\n}\n\n.form__input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.23);\n  border-radius: 4px;\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-size: 16px;\n  background-color: white;\n}\n.form__input:focus {\n  outline: 1px solid #3c2a99;\n}\n\n.input-label {\n  position: absolute;\n  margin-left: 12px;\n}\n\n.form__btn {\n  width: 180px;\n  height: 42px;\n  background-color: #3c2a99;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  margin: 0 0 59px 40px;\n  align-self: flex-start;\n  transition: 0.5s;\n}\n.form__btn:hover {\n  background-color: #99a3ff;\n  cursor: pointer;\n}\n\n.form__img {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bellota:wght@700&family=Inter&family=Roboto+Condensed:wght@400;700&family=Roboto+Serif:opsz@8..144&family=Roboto:wght@500&display=swap\");\r\n\r\n$blue: #3c2a99;\r\n$lightBlue: #99a3ff;\r\n$green: #00a658;\r\n$lightGreen: #7acca6;\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100vw;\r\n  margin: 0;\r\n  align-items: center;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.preloader {\r\n  display: grid;\r\n  grid-template-areas: \"a\";\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: white;\r\n  z-index: 9;\r\n  opacity: 1;\r\n  &.loader_success {\r\n    display: none;\r\n  }\r\n}\r\n.loader {\r\n  position: absolute;\r\n  grid-area: a;  \r\n  width: 80px;\r\n  height: 80px;\r\n  background: linear-gradient(180deg, #ffffffd3, rgba(255, 255, 255, 0), #ffffffd3, rgba(255, 255, 255, 0));\r\n\tbackground-size: 400% 400%;\r\n\tanimation: anim 4s ease infinite;\r\n  z-index: 10;\r\n}\r\n\r\n.preloader > img {  \r\n  grid-area: a;  \r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n@keyframes anim {\r\n  0% {\r\n\t\tbackground-position: 50% 0%;\r\n\t}\r\n\t50% {\r\n\t\tbackground-position: 50% 100%;\r\n\t}\r\n\t100% {\r\n\t\tbackground-position: 50% 0%;\r\n\t}\r\n}\r\n.index-main-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  font-size: 14px;\r\n  background-color: white;\r\n}\r\n\r\n// HEADER //\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: white;\r\n  z-index: 3;\r\n  justify-content: center;\r\n  box-shadow: 0 3px 5px 0 #b9b9b957;\r\n}\r\n.header-container {\r\n  max-width: 1280px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-self: center;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 86px;\r\n}\r\n.header-container__logo {\r\n  margin-left: 2px;\r\n}\r\n\r\n.header-container__menu {\r\n  display: none;\r\n}\r\n\r\n.header-menu__item {\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 14px;\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.header-menu__item::after {\r\n  content: \"\";\r\n  border-bottom: 2px solid $lightGreen;\r\n  display: block;\r\n  width: 0px;\r\n}\r\n\r\n.header-menu__item:hover::after {\r\n  width: 100%;\r\n  height: 2px;\r\n  right: 0;\r\n  transition: 0.5s;\r\n}\r\n\r\n.header-container__contacts {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .header-container__menu {\r\n    display: flex;\r\n    width: auto;\r\n    height: 20px;\r\n    gap: 60px;\r\n    font-family: \"Roboto Condensed\";\r\n  }\r\n\r\n  .header-container__contacts {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-right: 20px;\r\n  }\r\n}\r\n\r\n.header-contacts__phone {\r\n  font-family: \"Inter\";\r\n  color: #333333;\r\n  text-decoration: none;\r\n  &:hover {\r\n    color: $blue;\r\n    transition: 0.5s;\r\n  }\r\n}\r\n\r\n.header-contacts__btn {\r\n  width: 180px;\r\n  height: 42px;\r\n  background-color: $blue;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-style: \"Roboto\";\r\n  transition: 0.5s;\r\n  &:hover {\r\n    background-color: $lightBlue;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.header-container-left {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 60px;\r\n}\r\n\r\n// MOBILE MENU //\r\n\r\n.mob-menu_close {\r\n  display: none;\r\n}\r\n\r\n.header-container__mob-menu.disabled {\r\n  display: none;\r\n}\r\n\r\nfooter.disabled {\r\n  display: none;\r\n}\r\n\r\n.mob-menu_close.active {\r\n  display: flex;\r\n}\r\n\r\n.header-container__mob-menu {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .header-container__mob-menu {\r\n    display: flex;\r\n  }\r\n  header {\r\n    z-index: 3;\r\n  }\r\n\r\n  .header-container {\r\n    margin: 0 20px 0 20px;\r\n  }\r\n}\r\n\r\n.index__mobile-menu {\r\n  display: flex;\r\n  position: fixed;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: white;\r\n  font-family: \"Roboto Condensed\";\r\n  font-size: 36px;\r\n  transform: translateX(-110%);\r\n  transition: all 0.5s ease 0s;\r\n  margin-top: 85px;\r\n  z-index: 2;\r\n  opacity: 0.2;\r\n}\r\n\r\n.index__mobile-menu.active {\r\n  transform: translateX(0);\r\n  opacity: 1;\r\n}\r\n\r\n.index__mobile-menu.disabled {\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.mobile-menu__items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 60px 0px 0px 40px;\r\n}\r\n\r\n.mobile-menu__contacts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 40px 0px 0px 40px;\r\n}\r\n\r\n.mobile-menu__item {\r\n  text-decoration: none;\r\n  color: black;\r\n  margin-bottom: 66.6px;\r\n}\r\n\r\n.mobile-contacts__phone {\r\n  font-family: \"Inter\";\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  text-decoration: none;\r\n  color: #333333;\r\n}\r\n\r\n.mobile-contacts__btn {\r\n  width: 180px;\r\n  height: 42px;\r\n  background-color: $blue;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-style: \"Roboto\";\r\n  &:hover {\r\n    background-color: $lightBlue;\r\n    transition: 0.5s;\r\n  }\r\n}\r\n\r\nbody.disabled {\r\n  overflow-y: hidden;\r\n}\r\n// TITLE //\r\n\r\n.index-title-container {\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"title img\"\r\n    \"sub img\";\r\n  grid-template-rows: auto auto;\r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  width: 90%;\r\n  max-width: 1280px;\r\n  height: 421px;\r\n  margin-top: 60px;\r\n  margin-bottom: 60px;\r\n  background-color: white;\r\n}\r\n\r\n.index-title__text {\r\n  width: auto;\r\n}\r\n\r\n.index-title__title {\r\n  grid-area: title;\r\n  font-family: \"Bellota\";\r\n  font-size: 62px;\r\n  margin: 0;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .index-title__title {\r\n    font-size: calc(24px + 40 * (100vw / 1440));\r\n  }\r\n}\r\n\r\n.index-title__highlight {\r\n  color: $blue;\r\n}\r\n\r\n.index-title__sub {\r\n  display: flex;\r\n  grid-area: sub;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  max-width: 331px;\r\n  font-family: \"Roboto Condensed\";\r\n  font-size: 14px;\r\n  margin-top: 58px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.index-title-container__img {\r\n  display: flex;\r\n  grid-area: img;\r\n  width: 401px;\r\n  padding: 10px;\r\n  align-items: flex-start;\r\n}\r\n\r\n@media (max-width: 940px) {\r\n  .index-title-container {\r\n    display: grid;\r\n    grid-template-areas:\r\n      \"title title\"\r\n      \"sub img\";\r\n    grid-template-rows: auto auto;\r\n    grid-template-columns: 175px auto;\r\n    height: auto;\r\n    margin-top: 34px;\r\n  }\r\n\r\n  .index-title-container__img {\r\n    grid-area: img;\r\n    justify-self: end;\r\n    width: 100%;\r\n    max-width: 140px;\r\n    max-height: 130px;\r\n    margin-top: 30px;\r\n    padding: 0;\r\n  }\r\n\r\n  .index-title__title {\r\n    grid-area: title;\r\n    color: #333333;\r\n  }\r\n\r\n  .index-title__sub {\r\n    grid-area: sub;\r\n    width: 200px;\r\n    height: auto;\r\n    margin-top: 30px;\r\n    color: #333333;\r\n  }\r\n}\r\n\r\n// SERVICE //\r\n\r\n.index-service-container {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: $blue;\r\n  color: white;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\r\n.index-service-container__text {\r\n  max-width: 645px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.index-service-container__img {\r\n  width: 888px;\r\n  transform: translateX(-10%);\r\n}\r\n\r\n.index-service-text__title {\r\n  font-family: \"Bellota\";\r\n  font-size: 36px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.index-service-text__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: \"Roboto Serif\";\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  margin-bottom: 40px;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.index-service__btn {\r\n  background-color: $blue;\r\n  border-radius: 5px;\r\n  border: 1px solid white;\r\n  color: white;\r\n  width: 176px;\r\n  height: 42px;\r\n  margin-bottom: 40px;\r\n  transition: 0.5s;\r\n  &:hover {\r\n    background-color: #ffffff13;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .index-service-container {\r\n    display: grid;\r\n    grid-template-areas:\r\n      \"title\"\r\n      \"other\";\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .index-service-container__text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 30px;\r\n    z-index: 1;\r\n    text-align: justify;\r\n    justify-self: center;\r\n  }\r\n  .index-service-text__title {\r\n    font-size: calc(24px + 12 * (100vw / 1440));\r\n    grid-area: title;\r\n    margin-bottom: 20px;\r\n  }\r\n  .index-service-text__text {\r\n    font-size: calc(16px + 4 * (100vw / 1440));\r\n    grid-area: other;\r\n  }\r\n\r\n  .index-service-container__img {\r\n    transform: translateX(0);\r\n    width: 70%;\r\n    grid-area: other;\r\n    position: absolute;\r\n    justify-self: center;\r\n    align-self: flex-end;\r\n  }\r\n}\r\n@media (max-width: 420px) {\r\n  .index-service__btn {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n//  PRODUCTS  //\r\n\r\n.index-products-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 1354px;\r\n  height: auto;\r\n  margin-top: 68px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 90vw;\r\n  background-color: white;\r\n  z-index: 0;\r\n}\r\n\r\n.index-products-container__title {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 40px;\r\n  text-align: justify;\r\n  max-width: 1274px;\r\n}\r\n\r\n.products-title__title {\r\n  font-family: \"Bellota\";\r\n  font-size: 36px;\r\n  margin-bottom: 40px;\r\n  color: #333333;\r\n}\r\n\r\n.products-title__text {\r\n  font-family: \"Roboto Serif\";\r\n  font-size: 20px;\r\n  color: #4f4f4f;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .products-title__title {\r\n    font-size: calc(24px + 12 * (100vw / 1440));\r\n  }\r\n  .products-title__text {\r\n    font-size: calc(16px + 4 * (100vw / 1440));\r\n  }\r\n}\r\n\r\n.products-items__img {\r\n  min-height: 100%;\r\n  min-width: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  max-width: none;\r\n  max-height: none;\r\n  display: block;\r\n  position: relative;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  object-fit: cover;\r\n  z-index: 0;\r\n  grid-area: 1 / 1 / 2 / 2;\r\n}\r\n\r\n.index-products-container__items {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  grid-template-rows: repeat(5, 191px);\r\n  width: 100%;\r\n  max-width: 1354px;\r\n  gap: 20px;\r\n  grid-auto-flow: dense;\r\n}\r\n\r\n.products-items-info__button {\r\n  display: flex;\r\n  position: absolute;\r\n  width: 117px;\r\n  height: 34px;\r\n  margin: 0 0 10px 20px;\r\n  background-color: rgba(0, 0, 0, 0.42);\r\n  backdrop-filter: blur(7.5px);\r\n  border-radius: 4px;\r\n  border: 1px solid white;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n  font-family: \"Roboto\";\r\n  font-size: 14px;\r\n  bottom: -50%;\r\n  transition: 0.3s linear;\r\n}\r\n\r\n.products-items__info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: flex-end;\r\n  background-color: rgba(0, 0, 0, 0.42);\r\n  backdrop-filter: blur(7.5px);\r\n  background-image: linear-gradient(\r\n    107.21deg,\r\n    rgba(255, 255, 255, 0.4) 3.52%,\r\n    rgba(255, 255, 255, 0.1) 66.81%\r\n  );\r\n  width: 100%;\r\n  font-family: \"Roboto\";\r\n  color: white;\r\n  font-size: 13px;\r\n  height: 140px;\r\n  transform: translateY(30%);\r\n  transition: 0.3s linear;\r\n  grid-area: 1 / 1 / 2 / 2;\r\n}\r\n\r\n.index-products-container__items > div {\r\n  display: grid;\r\n  overflow: hidden;\r\n  flex-direction: column;\r\n  border-radius: 8px;\r\n  &:hover {\r\n    cursor: pointer;\r\n    .products-items__info {\r\n      transform: translateY(0%);\r\n    }\r\n    .products-items-info__button {\r\n      bottom: 0%;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n.products-items-info__title {\r\n  font-size: 16px;\r\n  margin: 32px 0 4px 20px;\r\n}\r\n\r\n.products-items-info__subTitle {\r\n  margin: 0px 0px 32px 20px;\r\n}\r\n\r\n.products-items__box1:nth-child(1) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n}\r\n.products-items__box2:nth-child(2) {\r\n  grid-column: span 2;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__box3:nth-child(3) {\r\n  grid-column: span 1;\r\n  grid-row: span 2;\r\n}\r\n\r\n.products-items__box4:nth-child(4) {\r\n  grid-column: span 2;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__box5:nth-child(5) {\r\n  grid-column: span 1;\r\n  grid-row: span 2;\r\n}\r\n\r\n.products-items__box6:nth-child(6) {\r\n  grid-column: span 2;\r\n  grid-row: span 2;\r\n}\r\n.products-items__box7:nth-child(7) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n}\r\n.products-items__box8:nth-child(8) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__box9:nth-child(9) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n}\r\n.products-items__box10:nth-child(10) {\r\n  grid-column: span 2;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__box11:nth-child(11) {\r\n  grid-column: span 2;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__box12:nth-child(12) {\r\n  grid-column: span 1;\r\n  grid-row: span 2;\r\n}\r\n\r\n.products-items__box13:nth-child(13) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__box14:nth-child(14) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n  grid-column: span 2;\r\n  grid-row: span 2;\r\n}\r\n\r\n.products-items__box15:nth-child(15) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__box16:nth-child(16) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__box17:nth-child(17) {\r\n  grid-column: span 1;\r\n  grid-row: span 1;\r\n}\r\n\r\n.products-items__button-div {\r\n  max-width: 1280px;\r\n  width: 100%;\r\n}\r\n\r\n.products-items__button {\r\n  width: 188px;\r\n  height: 42px;\r\n  background-color: $blue;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin: 40px 0 0 0;\r\n  align-self: flex-start;\r\n  transition: 0.5s;\r\n  &:hover {\r\n    background-color: $lightBlue;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .index-products-container__items {\r\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\r\n    grid-template-rows: repeat(15, 145px);\r\n  }\r\n  .index-products-container__items {\r\n    gap: 10px;\r\n  }\r\n  .products-items__button {\r\n    width: 100%;\r\n  }\r\n  .products-title__title {\r\n    margin-bottom: 20px;\r\n  }\r\n  .index-products-container__title {\r\n    margin-bottom: 20px;\r\n  }\r\n  .index-products-container {\r\n    margin-top: 60px;\r\n  }\r\n}\r\n//  TRAITS  //\r\n\r\n.index-traits-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 1280px;\r\n  width: 90vw;\r\n  height: auto;\r\n  margin-top: 115px;\r\n  background-color: white;\r\n}\r\n\r\n.traits-container__title {\r\n  font-family: \"Bellota\";\r\n  font-size: 36px;\r\n  margin: 0;\r\n  color: #333333;\r\n}\r\n.traits-container__subTitle {\r\n  font-family: \"Roboto Serif\";\r\n  font-size: 20px;\r\n  margin-top: 40px;\r\n  color: #4f4f4f;\r\n  text-align: justify;\r\n}\r\n\r\n.index-traits-container__items {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 40px;\r\n  margin-top: 40px;\r\n  width: 100%;\r\n}\r\n\r\n.traits-container-items__img {\r\n  max-width: 400px;\r\n  width: 100%;\r\n  border-radius: 8px;\r\n}\r\n.traits-container-items__title {\r\n  font-family: \"Roboto Condensed\";\r\n  font-size: 32px;\r\n  font-weight: 400;\r\n  margin-left: 40px;\r\n  color: #333333;\r\n}\r\n\r\n.traits-container-items__trait-ul {\r\n  height: 87px;\r\n  font-weight: 400;\r\n  font-size: 18px;\r\n  color: #828282;\r\n}\r\n\r\n.traits-container-items__trait-ul > li {\r\n  margin-top: 5px;\r\n}\r\n\r\n.index-traits-container__items > div {\r\n  background: #ffffff;\r\n  box-shadow: 0px 0px 60px rgba(79, 79, 79, 0.15);\r\n  border-radius: 8px;\r\n  width: auto;\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.traits-container__btn {\r\n  width: 180px;\r\n  height: 42px;\r\n  background-color: $blue;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin: 40px 0 99px 0;\r\n  align-self: flex-start;\r\n  transition: 0.5s;\r\n  &:hover {\r\n    background-color: $lightBlue;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@media (max-width: 1110px) {\r\n  .traits-container-items__trait-ul {\r\n    height: 120px;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .index-traits-container {\r\n    margin-top: 60px;\r\n  }\r\n  .traits-container__subTitle {\r\n    margin-top: 20px;\r\n  }\r\n  .traits-container__title {\r\n    font-size: calc(24px + 12 * (100vw / 1440));\r\n  }\r\n\r\n  .traits-container__subTitle {\r\n    font-size: calc(16px + 4 * (100vw / 1440));\r\n  }\r\n  .traits-container__btn {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n//  slider  //\r\n\r\n.index-traits-container__slider {\r\n  padding: 1rem;\r\n  display: none;\r\n  overflow-x: scroll;\r\n  scroll-padding: 0 50%;\r\n  scroll-snap-type: x mandatory;\r\n  height: auto;\r\n}\r\n\r\n.traits-container__slide-items {\r\n  scroll-snap-align: center;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  font-size: 0;\r\n  margin-right: 3rem;\r\n  min-width: 330px;\r\n  border-radius: 8px;\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .index-traits-container__slider {\r\n    display: flex;\r\n    margin-top: 20px;\r\n  }\r\n  .index-traits-container__items {\r\n    display: none;\r\n  }\r\n}\r\n\r\n//  FOOTER  //\r\n\r\nfooter {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #4f4f4f;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  width: 80vw;\r\n  min-height: 156px;\r\n  gap: 20px;\r\n  font-family: \"Roboto Condensed\";\r\n  font-size: 12px;\r\n  color: #bdbdbd;\r\n  font-weight: 400;\r\n}\r\n\r\n.footer-container__logo {\r\n  width: 90px;\r\n  height: 46px;\r\n}\r\n\r\n.footer-container__text-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: auto;\r\n}\r\n\r\n.footer-container__text-area2 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: auto;\r\n  max-width: 170px;\r\n}\r\n\r\n.text-area__contacts-title {\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n.footer-container__text-area3 {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  gap: 20px;\r\n  flex-wrap: wrap;\r\n  justify-content: end;\r\n  margin-top: 20px;\r\n}\r\n.footer-container__text-area3 > div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n  min-width: 192px;\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.text-area__catalog-title {\r\n  font-weight: 700;\r\n  color: white;\r\n}\r\n\r\n.text-area__catalog-text {\r\n  font-weight: 300;\r\n}\r\n\r\n@media (max-width: 1330px) {\r\n  .footer-container__text-area3 {\r\n    justify-content: start;\r\n  }\r\n  .footer-container__text-area2 {\r\n    max-width: 130px;\r\n  }\r\n  .footer-container__text-area1 {\r\n    max-width: 130px;\r\n  }\r\n  .text-area__text {\r\n    white-space: normal;\r\n  }\r\n  .footer-container {\r\n    width: 100vw;\r\n  }\r\n  .footer-container__logo {\r\n    margin-left: 40px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n  .footer-container {\r\n    display: grid;\r\n    grid-template-areas:\r\n      \"adr adr\"\r\n      \"logo c\";\r\n    gap: 0;\r\n  }\r\n  .footer-container__text-area {\r\n    grid-area: c;\r\n  }\r\n  .footer-container__text-area2 {\r\n    grid-area: adr;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    margin-left: 20px;\r\n    max-width: none;\r\n  }\r\n  .footer-container__text-area2 > div {\r\n    display: flex;\r\n    gap: 5px;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    max-width: none;\r\n  }\r\n  .footer-container__logo {\r\n    grid-area: logo;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .footer-container__text-area3 {\r\n    display: none;\r\n  }\r\n}\r\n\r\n//  FORM  //\r\n\r\n.index-form-area {\r\n  display: flex;\r\n  position: fixed;\r\n  background-color: rgb(0, 0, 0);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  z-index: -1;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: 0.2s linear;\r\n}\r\n\r\n.index-form-container {\r\n  display: flex;\r\n  position: fixed;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  width: 894px;\r\n  height: auto;\r\n  opacity: 0.9;\r\n  transition: 0.2s linear;\r\n  z-index: -1;\r\n  top: 25%;\r\n  box-shadow: 300ms cubic-bezier(0.4, 0, 0.2, 1) 700ms;\r\n}\r\n.index-form-area.active {\r\n  z-index: 3;\r\n  opacity: 0.4;\r\n  transition: 0.2s linear;\r\n}\r\n\r\n.index-form-container.active {\r\n  opacity: 1;\r\n  z-index: 3;\r\n  transition: 0.2s linear;\r\n}\r\n.index-form-container > h1 {\r\n  font-family: \"Bellota\";\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  color: #333333;\r\n  align-self: flex-start;\r\n  margin: 40px 0 40px 40px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  align-self: flex-start;\r\n}\r\n\r\n.form__input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 0 40px 40px;\r\n  width: 702px;\r\n  height: 56px;\r\n  font-family: \"Roboto\";\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n.form__input-container.active > label {\r\n  transform: translateY(-30px);\r\n  background-color: white;\r\n  font-size: 14px;\r\n  color: #3c2a99;\r\n}\r\n\r\n.form__input {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid rgba(0, 0, 0, 0.23);\r\n  border-radius: 4px;\r\n  font-family: \"Roboto\";\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  &:focus {\r\n    outline: 1px solid#3c2a99;\r\n  }\r\n  background-color: white;\r\n}\r\n\r\n.input-label {\r\n  position: absolute;\r\n  margin-left: 12px;\r\n}\r\n\r\n.form__btn {\r\n  width: 180px;\r\n  height: 42px;\r\n  background-color: $blue;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin: 0 0 59px 40px;\r\n  align-self: flex-start;\r\n  transition: 0.5s;\r\n  &:hover {\r\n    background-color: $lightBlue;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.form__img {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: -1;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ico.png */ "./src/img/ico.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./loader.js */ "./src/loader.js"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
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

/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e12f9778057b1e059bf.js";

/***/ }),

/***/ "./src/img/confidence.png":
/*!********************************!*\
  !*** ./src/img/confidence.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66a1d9cd74951cb726af.png";

/***/ }),

/***/ "./src/img/ico.png":
/*!*************************!*\
  !*** ./src/img/ico.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "483878bd4c97aa27ac15.png";

/***/ }),

/***/ "./src/img/prod1.png":
/*!***************************!*\
  !*** ./src/img/prod1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod10.png":
/*!****************************!*\
  !*** ./src/img/prod10.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod11.png":
/*!****************************!*\
  !*** ./src/img/prod11.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod12.png":
/*!****************************!*\
  !*** ./src/img/prod12.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod13.png":
/*!****************************!*\
  !*** ./src/img/prod13.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod14.png":
/*!****************************!*\
  !*** ./src/img/prod14.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod15.png":
/*!****************************!*\
  !*** ./src/img/prod15.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod16.png":
/*!****************************!*\
  !*** ./src/img/prod16.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod17.png":
/*!****************************!*\
  !*** ./src/img/prod17.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod2.png":
/*!***************************!*\
  !*** ./src/img/prod2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod3.png":
/*!***************************!*\
  !*** ./src/img/prod3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod4.png":
/*!***************************!*\
  !*** ./src/img/prod4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod5.png":
/*!***************************!*\
  !*** ./src/img/prod5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod6.png":
/*!***************************!*\
  !*** ./src/img/prod6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod7.png":
/*!***************************!*\
  !*** ./src/img/prod7.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod8.png":
/*!***************************!*\
  !*** ./src/img/prod8.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/prod9.png":
/*!***************************!*\
  !*** ./src/img/prod9.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17e0b2251b34dc900692.png";

/***/ }),

/***/ "./src/img/profit.png":
/*!****************************!*\
  !*** ./src/img/profit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27a71e80d9d15b3fcc3d.png";

/***/ }),

/***/ "./src/img/quality.png":
/*!*****************************!*\
  !*** ./src/img/quality.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e68e91c7cc5eeddc01c3.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=index.36e6ec3f78e6fe59affa.js.map