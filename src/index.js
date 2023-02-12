import "./index.scss";
import "./index.html";
import itemsImg1 from "./img/prod1.png";
import itemsImg2 from "./img/prod2.png";
import itemsImg3 from "./img/prod3.png";
import itemsImg4 from "./img/prod4.png";
import itemsImg5 from "./img/prod5.png";
import itemsImg6 from "./img/prod6.png";
import itemsImg7 from "./img/prod7.png";
import itemsImg8 from "./img/prod8.png";
import itemsImg9 from "./img/prod9.png";
import itemsImg10 from "./img/prod10.png";
import itemsImg11 from "./img/prod11.png";
import itemsImg12 from "./img/prod12.png";
import itemsImg13 from "./img/prod13.png";
import itemsImg14 from "./img/prod14.png";
import itemsImg15 from "./img/prod15.png";
import itemsImg16 from "./img/prod16.png";
import itemsImg17 from "./img/prod17.png";
import qualityImg from "./img/quality.png";
import profitImg from "./img/profit.png";
import confidenceImg from "./img/confidence.png";
import imageForm from "./img/imageForm.svg";
import logoHeader from "./img/logoHeader.svg";
import mobMenuBtnImg from "./img/mobMenuBtn.svg";
import mobMenuBtnClose from "./img/closeBtn.svg";
import titleImg from "./img/titleImg.svg";
import serviceImg from "./img/serviceImg.svg";
import footerLogoImg from "./img/footerLogo.svg";

const mainContainer = document.querySelector(".index-main-container");
const addElement = ({
  createdElement,
  content = "",
  img = "",
  link = "",
  addClass = "",
  parentElement = undefined,
  grandParentElement = undefined,
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
  const headerLogo = document.querySelector(".header-container__logo");
  addElement({
    createdElement: "img",
    img: logoHeader,
    parentElement: headerLogo,
  });
  addElement({
    createdElement: "a",
    content: "ГЛАВНАЯ",
    link: "/",
    addClass: `header-menu__item`,
    parentElement: headerMenu,
  });

  addElement({
    createdElement: "a",
    content: "КАТАЛОГ",
    addClass: `header-menu__item`,
    parentElement: headerMenu,
  });

  addElement({
    createdElement: "a",
    content: "СТАТЬИ",
    addClass: `header-menu__item`,
    parentElement: headerMenu,
  });

  addElement({
    createdElement: "a",
    content: "КОНТАКТЫ",
    link: "/contacts/",
    addClass: `header-menu__item`,
    parentElement: headerMenu,
  });

  addElement({
    createdElement: "a",
    content: "О НАС",
    addClass: `header-menu__item`,
    parentElement: headerMenu,
  });

  addElement({
    createdElement: "a",
    content: "+7 (495) 369-39-61",
    link: "tel: +7 (495) 369-39-61",
    parentElement: headerContacts,
    addClass: "header-contacts__phone",
  });

  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК!",
    parentElement: headerContacts,
    addClass: "header-contacts__btn",
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
    createdElement: "img",
    img: mobMenuBtnImg,
    parentElement: mobMenuBtn,
  });

  addElement({
    createdElement: "img",
    img: mobMenuBtnClose,
    parentElement: mobMenuCloseBtn,
  });

  addElement({
    createdElement: "a",
    content: "ГЛАВНАЯ",
    link: "/",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu,
    grandParentElement: mobMenuContainer,
  });

  addElement({
    createdElement: "a",
    content: "КАТАЛОГ",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu,
  });

  addElement({
    createdElement: "a",
    content: "СТАТЬИ",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu,
  });

  addElement({
    createdElement: "a",
    content: "КОНТАКТЫ",
    link: "/contacts/",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu,
  });

  addElement({
    createdElement: "a",
    content: "О НАС",
    addClass: `mobile-menu__item`,
    parentElement: mobMenu,
  });

  addElement({
    createdElement: "a",
    content: "+7 (495) 369-39-61",
    link: "tel: +7 (495) 369-39-61",
    addClass: "mobile-contacts__phone",
    parentElement: mobMenuContacts,
    grandParentElement: mobMenuContainer,
  });

  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК!",
    addClass: "mobile-contacts__btn",
    parentElement: mobMenuContacts,
  });
  mobMenu.classList.add("index__mobile-menu");
  document.body.appendChild(mobMenuContainer);

  mobMenuBtn.addEventListener("click", () => {
    document.body.classList.add("disabled");
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
  const titleImgContainer = document.querySelector(
    ".index-title-container__img"
  );
  addElement({
    createdElement: "img",
    img: titleImg,
    parentElement: titleImgContainer,
  });

  addElement({
    createdElement: "h1",
    content: `<span class = 'index-title__highlight'>ХУДОЖЕСТВЕННОЕ</span> 
    </br>
    ЛИТЬЕ ИЗ
    </br>
    ЧУГУНА, ЛАТУНИ, БРОНЗЫ`,
    parentElement: titleContainer,
    addClass: "index-title__title",
  });

  const titleSub = document.createElement("div");
  titleSub.classList.add("index-title__sub");

  addElement({
    createdElement: "div",
    content: `<span>ГРАФИК
    <br>пн – пт с 9:00 до 17:00</span`,
    parentElement: titleSub,
    grandParentElement: titleContainer,
  });

  addElement({
    createdElement: "div",
    content: `<span>АДРЕС
    <br>Московская область г. Ногинск ул. 200 лет Города, д. 2</span`,
    parentElement: titleSub,
    grandParentElement: titleContainer,
  });

  //  SERVICE  //
  const serviceContainer = document.querySelector(".index-service-container");
  const serviceTextContainer = document.createElement("div");
  serviceTextContainer.classList.add("index-service-container__text");
  const serviceImgContainer = document.querySelector(
    ".index-service-container__img"
  );

  addElement({
    createdElement: "img",
    img: serviceImg,
    parentElement: serviceImgContainer,
  });

  addElement({
    createdElement: "h1",
    content: "ПРОДАЮЩИЙ ЗАГОЛОВОК",
    addClass: "index-service-text__title",
    parentElement: serviceTextContainer,
    grandParentElement: serviceContainer,
  });

  addElement({
    createdElement: "span",
    content: `Мы готовы изготовить для Вас Изделия из чугуна, латуни и бронзы во всех направлениях, кроме технического литья. 
    <br><br>
    От простых ограждений из металла, до самых сложных и неповторимых в чугуне, бронзе. <br><br>
    Садово-парковая мебель, козырьки, ворота, мангалы с именными гербами, чугунные винтовые, спиральные и маршевые лестницы,  любых параметров и комплектации. <br><br>
    Каждое изделие индивидуально и неповторимо!`,
    addClass: "index-service-text__text",
    parentElement: serviceTextContainer,
  });

  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК",
    addClass: "index-service__btn",
    parentElement: serviceTextContainer,
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
    grandParentElement: productsContainer,
  });

  addElement({
    createdElement: "span",
    content: `От простых ограждений из металла, до самых сложных и неповторимых в чугуне, бронзе. <br>Садово-парковая мебель, козырьки, ворота, мангалы с именными гербами, чугунные винтовые, спиральные и маршевые лестницы,  любых параметров и комплектации. 
    <br><br>Каждое изделие индивидуально и неповторимо!`,
    addClass: "products-title__text",
    parentElement: productsText,
  });
  const images = [
    itemsImg1,
    itemsImg2,
    itemsImg3,
    itemsImg4,
    itemsImg5,
    itemsImg6,
    itemsImg7,
    itemsImg8,
    itemsImg9,
    itemsImg10,
    itemsImg11,
    itemsImg12,
    itemsImg13,
    itemsImg14,
    itemsImg15,
    itemsImg16,
    itemsImg17,
  ];

  const titlesProd = [
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
    "Название",
  ];

  const subTitlesProd = [
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
    "Подзаголовок (опционально)",
  ];
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
      grandParentElement: productsItems,
    });

    const itemInfo = document.createElement("div");
    itemInfo.classList.add(`products-items__info`);

    addElement({
      createdElement: "h1",
      content: titlesProd[i - 1],
      addClass: "products-items-info__title",
      parentElement: itemInfo,
      grandParentElement: itemBox,
    });

    addElement({
      createdElement: "span",
      content: subTitlesProd[i - 1],
      addClass: "products-items-info__subTitle",
      parentElement: itemInfo,
    });

    addElement({
      createdElement: "button",
      content: "ПОДРОБНЕЕ",
      addClass: "products-items-info__button",
      parentElement: itemInfo,
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
    parentElement: btnDiv,
  });

  //  TRAITS  //

  const traitsContainer = document.querySelector(".index-traits-container");

  addElement({
    createdElement: "h1",
    content: "ПОЧЕМУ МЫ?",
    addClass: "traits-container__title",
    parentElement: traitsContainer,
  });

  addElement({
    createdElement: "span",
    content: `От простых ограждений из металла, до самых сложных и неповторимых в чугуне, бронзе. <br>Садово-парковая мебель, козырьки, ворота, мангалы с именными гербами, чугунные винтовые, спиральные и маршевые лестницы,  любых параметров и комплектации. 
    <br><br>Каждое изделие индивидуально и неповторимо!`,
    addClass: "traits-container__subTitle",
    parentElement: traitsContainer,
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
    parentElement: qualityTrait,
  });

  const qualityUl = document.createElement("ul");
  qualityUl.classList.add("traits-container-items__trait-ul");
  qualityTrait.appendChild(qualityUl);

  addElement({
    createdElement: "li",
    content: "Используем качественные материалы",
    parentElement: qualityUl,
    grandParentElement: qualityTrait,
  });

  addElement({
    createdElement: "li",
    content: "Мы производство, а не посредник",
    parentElement: qualityUl,
  });

  addElement({
    createdElement: "li",
    content: "Бережно доставим и установим",
    parentElement: qualityUl,
  });

  addElement({
    createdElement: "img",
    img: qualityImg,
    addClass: "traits-container-items__img",
    parentElement: qualityTrait,
  });

  const profitTrait = document.createElement("div");
  profitTrait.classList.add("traits-container-items__profit");
  traitsItems.appendChild(profitTrait);
  addElement({
    createdElement: "h1",
    content: "ВЫГОДА",
    addClass: "traits-container-items__title",
    parentElement: profitTrait,
    grandParentElement: traitsItems,
  });

  const profitUl = document.createElement("ul");
  profitUl.classList.add("traits-container-items__trait-ul");
  qualityTrait.appendChild(profitUl);

  addElement({
    createdElement: "li",
    content: "Всегда индивидуально и не дорого",
    parentElement: profitUl,
    grandParentElement: profitTrait,
  });

  addElement({
    createdElement: "li",
    content: "Бесплатный выезд на замер",
    parentElement: profitUl,
  });

  addElement({
    createdElement: "li",
    content: "Коммерческое предложение за 3 дня",
    parentElement: profitUl,
  });

  addElement({
    createdElement: "img",
    img: profitImg,
    addClass: "traits-container-items__img",
    parentElement: profitTrait,
  });

  const confidenceTrait = document.createElement("div");
  confidenceTrait.classList.add("traits-container-items__confidence");
  traitsItems.appendChild(profitTrait);
  addElement({
    createdElement: "h1",
    content: "ДОВЕРИЕ",
    addClass: "traits-container-items__title",
    parentElement: confidenceTrait,
    grandParentElement: traitsItems,
  });

  const confidenceUl = document.createElement("ul");
  confidenceUl.classList.add("traits-container-items__trait-ul");
  confidenceTrait.appendChild(confidenceUl);

  addElement({
    createdElement: "li",
    content: "Принимаем заказы по всей России",
    parentElement: confidenceUl,
    grandParentElement: confidenceTrait,
  });

  addElement({
    createdElement: "li",
    content: "Более 150 выполненных проектов",
    parentElement: confidenceUl,
  });

  addElement({
    createdElement: "li",
    content: "Клиенты всегда довольны результатом",
    parentElement: confidenceUl,
  });

  addElement({
    createdElement: "img",
    img: confidenceImg,
    addClass: "traits-container-items__img",
    parentElement: confidenceTrait,
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
      parentElement: qualityTrait,
    });

    const qualityUl = document.createElement("ul");
    qualityUl.classList.add("traits-container-items__trait-ul");
    qualityTrait.appendChild(qualityUl);

    addElement({
      createdElement: "li",
      content: "Используем качественные материалы",
      parentElement: qualityUl,
      grandParentElement: qualityTrait,
    });

    addElement({
      createdElement: "li",
      content: "Мы производство, а не посредник",
      parentElement: qualityUl,
    });

    addElement({
      createdElement: "li",
      content: "Бережно доставим и установим",
      parentElement: qualityUl,
    });

    addElement({
      createdElement: "img",
      img: qualityImg,
      addClass: "traits-container-items__img",
      parentElement: qualityTrait,
    });

    const profitTrait = document.createElement("div");
    profitTrait.classList.add("traits-container__slide-items");
    slider.appendChild(profitTrait);
    addElement({
      createdElement: "h1",
      content: "ВЫГОДА",
      addClass: "traits-container-items__title",
      parentElement: profitTrait,
      grandParentElement: slider,
    });

    const profitUl = document.createElement("ul");
    profitUl.classList.add("traits-container-items__trait-ul");
    qualityTrait.appendChild(profitUl);

    addElement({
      createdElement: "li",
      content: "Всегда индивидуально и не дорого",
      parentElement: profitUl,
      grandParentElement: profitTrait,
    });

    addElement({
      createdElement: "li",
      content: "Бесплатный выезд на замер",
      parentElement: profitUl,
    });

    addElement({
      createdElement: "li",
      content: "Коммерческое предложение за 3 дня",
      parentElement: profitUl,
    });

    addElement({
      createdElement: "img",
      img: profitImg,
      addClass: "traits-container-items__img",
      parentElement: profitTrait,
    });

    const confidenceTrait = document.createElement("div");
    confidenceTrait.classList.add("traits-container__slide-items");
    slider.appendChild(profitTrait);
    addElement({
      createdElement: "h1",
      content: "ДОВЕРИЕ",
      addClass: "traits-container-items__title",
      parentElement: confidenceTrait,
      grandParentElement: slider,
    });

    const confidenceUl = document.createElement("ul");
    confidenceUl.classList.add("traits-container-items__trait-ul");
    confidenceTrait.appendChild(confidenceUl);

    addElement({
      createdElement: "li",
      content: "Принимаем заказы по всей России",
      parentElement: confidenceUl,
      grandParentElement: confidenceTrait,
    });

    addElement({
      createdElement: "li",
      content: "Более 150 выполненных проектов",
      parentElement: confidenceUl,
    });

    addElement({
      createdElement: "li",
      content: "Клиенты всегда довольны результатом",
      parentElement: confidenceUl,
    });

    addElement({
      createdElement: "img",
      img: confidenceImg,
      addClass: "traits-container-items__img",
      parentElement: confidenceTrait,
    });
  };
  createSlider();

  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК!",
    addClass: "traits-container__btn",
    parentElement: traitsContainer,
  });
};
createBody();

//  FOOTER  //
const createFooter = () => {
  const footerContainer = document.querySelector(".footer-container");
  const footerText1st = document.createElement("div");
  const footerText2nd = document.createElement("div");
  const footerText3rd = document.createElement("div");
  [footerText1st, footerText2nd, footerText3rd].map((el) => {
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

  [
    textColumns1,
    textColumns2,
    textColumns3,
    textColumns4,
    textColumns5,
    textColumns6,
    textColumns7,
    textColumns8,
    textColumns9,
    textColumns10,
    textColumns11,
    textColumns12,
    textColumns13,
    textColumns14,
    textColumns15,
    textColumns16,
  ].map((el) => {
    footerText3rd.appendChild(el);
  });

  const footerLogo = document.querySelector(".footer-container__logo");

  addElement({
    createdElement: "img",
    img: footerLogoImg,
    parentElement: footerLogo,
  });

  addElement({
    createdElement: "span",
    content: `© 2022 LLC SBV 
    Художественное литье из <br>
    чугуна, латуни и бронзы. 
    Все права защищены`,
    addClass: "text-area__text",
    parentElement: footerText1st,
  });

  addElement({
    createdElement: "h1",
    content: "АДРЕС",
    addClass: "text-area__contacts-title",
    parentElement: adrDiv,
  });

  addElement({
    createdElement: "span",
    content: `Московская область 
    г. Ногинск ул. 200 лет Города, д. 2`,
    addClass: "text-area__text",
    parentElement: adrDiv,
  });

  addElement({
    createdElement: "h1",
    content: "ГРАФИК",
    addClass: "text-area__contacts-title",
    parentElement: contDiv,
  });

  addElement({
    createdElement: "span",
    content: `пн – пт с 9:00 до 17:00`,
    addClass: "text-area__text",
    parentElement: contDiv,
  });

  addElement({
    createdElement: "a",
    content: "Ограждения",
    addClass: "text-area__catalog-title",
    parentElement: textColumns1,
  });

  addElement({
    createdElement: "a",
    content: "Терассы патио уличные",
    addClass: "text-area__catalog-text",
    parentElement: textColumns1,
  });

  addElement({
    createdElement: "a",
    content: "Ритуальные ограждения",
    addClass: "text-area__catalog-text",
    parentElement: textColumns1,
  });

  addElement({
    createdElement: "a",
    content: "Ограждения лестничных маршей",
    addClass: "text-area__catalog-text",
    parentElement: textColumns1,
  });

  addElement({
    createdElement: "a",
    content: "Столбы и фонари",
    addClass: "text-area__catalog-title",
    parentElement: textColumns2,
  });

  addElement({
    createdElement: "a",
    content: "Фонари",
    addClass: "text-area__catalog-text",
    parentElement: textColumns2,
  });

  addElement({
    createdElement: "a",
    content: "Заходные чугунные столбы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns2,
  });

  addElement({
    createdElement: "a",
    content: "Опорные столбы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns2,
  });

  addElement({
    createdElement: "a",
    content: "Камины, мангалы и барбекю",
    addClass: "text-area__catalog-title",
    parentElement: textColumns3,
  });

  addElement({
    createdElement: "a",
    content: "Терассы патио уличные",
    addClass: "text-area__catalog-text",
    parentElement: textColumns3,
  });

  addElement({
    createdElement: "a",
    content: "Ритуальные ограждения",
    addClass: "text-area__catalog-text",
    parentElement: textColumns3,
  });

  addElement({
    createdElement: "a",
    content: "Ограждения лестничных маршей",
    addClass: "text-area__catalog-text",
    parentElement: textColumns3,
  });

  addElement({
    createdElement: "a",
    content: "Козырьки, навесы, входные группы",
    addClass: "text-area__catalog-title",
    parentElement: textColumns4,
  });

  addElement({
    createdElement: "a",
    content: "Козырьки",
    addClass: "text-area__catalog-text",
    parentElement: textColumns4,
  });

  addElement({
    createdElement: "a",
    content: "Металлические навесы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns4,
  });

  addElement({
    createdElement: "a",
    content: "Входные группы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns4,
  });

  addElement({
    createdElement: "a",
    content: "Лестницы",
    addClass: "text-area__catalog-title",
    parentElement: textColumns5,
  });

  addElement({
    createdElement: "a",
    content: "Винтовые лестницы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns5,
  });

  addElement({
    createdElement: "a",
    content: "Маршевые лестницы",
    addClass: "text-area__catalog-text",
    parentElement: textColumns5,
  });

  addElement({
    createdElement: "a",
    content: "Садово-парковая мебель",
    addClass: "text-area__catalog-title",
    parentElement: textColumns6,
  });

  addElement({
    createdElement: "a",
    content: "Оконные решетки",
    addClass: "text-area__catalog-title",
    parentElement: textColumns7,
  });

  addElement({
    createdElement: "a",
    content: "Изделия из стали",
    addClass: "text-area__catalog-title",
    parentElement: textColumns8,
  });

  addElement({
    createdElement: "a",
    content: "Латунь, бронза",
    addClass: "text-area__catalog-title",
    parentElement: textColumns9,
  });

  addElement({
    createdElement: "a",
    content: "Балясины",
    addClass: "text-area__catalog-title",
    parentElement: textColumns10,
  });

  addElement({
    createdElement: "a",
    content: "Ворота, калитки",
    addClass: "text-area__catalog-title",
    parentElement: textColumns11,
  });

  addElement({
    createdElement: "a",
    content: "Кронштейны",
    addClass: "text-area__catalog-title",
    parentElement: textColumns12,
  });

  addElement({
    createdElement: "a",
    content: "Изделия из композитных материалов",
    addClass: "text-area__catalog-title",
    parentElement: textColumns13,
  });

  addElement({
    createdElement: "a",
    content: "Балконы и французкие балконы",
    addClass: "text-area__catalog-title",
    parentElement: textColumns14,
  });

  addElement({
    createdElement: "a",
    content: "Страница дизайнера",
    addClass: "text-area__catalog-title",
    parentElement: textColumns15,
  });

  addElement({
    createdElement: "a",
    content: "Беседки",
    addClass: "text-area__catalog-title",
    parentElement: textColumns5,
  });
};
createFooter();

//  FORM  //

const headerButton = document.querySelector(".header-contacts__btn");
const formArea = document.querySelector(".index-form-area");
const formContainer = document.querySelector(".index-form-container");
const mobileMenuBtn = document.querySelector('.mobile-contacts__btn');

formContainer.innerHTML = `<h1>ЗАКАЗАТЬ ЗВОНОК</h1>
<form action="">
  <div class="form__input-container">
    <label for="name-input" class="input-label">Имя *</label>
    <input
      type="text"
      required="required"
      id="name-input"
      title="Заполните поле"
      name="name"
      class="form__input"
    />
  </div>
  <div class="form__input-container">
    <label for="phone-input" class="input-label">Телефон *</label>
    <input
      type="text"
      required="required"
      id="phone-input"
      title="Заполните поле"
      name="phone"
      class="form__input"
    />
  </div>
  <div class="form__input-container">
    <label for="theme-input" class="input-label">Темя обращения </label>
    <input
      type="text"
      required="required"
      id="theme-input"
      title="Заполните поле"
      name="theme"
      class="form__input"
    />
  </div>
  <button class="form__btn" type="submit">ЗАКАЗАТЬ ЗВОНОК!</button>
</form>`;

addElement({
  createdElement: "img",
  img: imageForm,
  addClass: "form__img",
  parentElement: formContainer,
});

const inputsContainer = document.querySelectorAll(".form__input-container");
const formInputs = document.querySelectorAll(".form__input");

inputsContainer.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("active");
  });
});

const closeForm = () => {
  const inputsContainer = document.querySelectorAll(
    ".form__input-container.active"
  );
  formArea.classList.remove("active");
  inputsContainer.forEach((el) => {
    el?.classList.remove("active");
  });
  formContainer.classList.remove("active");
  formInputs.forEach((el) => {
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

mobileMenuBtn.addEventListener('click', formFunction);
