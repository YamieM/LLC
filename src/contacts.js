import "./index.html";
import "./contacts.scss";
import {
  createHeader,
  createFooter,
  createMobMenu,
  addElement,
  form,
} from "./index.js";
import logoWhite from "./img/logoHeaderWhite.svg";
import mobMenuBtnWhite from "./img/mobMenuBtnWhite.svg";
import closeBtnWhite from "./img/closeBtnWhite.svg";
import titleImg from "./img/contactsTitleImg.svg";

createFooter();
const mainContainer = document.querySelector(".contacts-main-container");

// HEADER //
createHeader("contacts");
const logoHeader = document.querySelector(".contacts-header-container__logo");
const logoImg = document.querySelector(".contacts-header-container__logo>img");
logoHeader?.removeChild(logoImg);

addElement({
  createdElement: "img",
  img: logoWhite,
  parentElement: logoHeader,
});

//  MOB MENU //
createMobMenu("contacts");

const mobMenuBtn = document.querySelector(
  ".contacts-header-container__mob-menu"
);
const mobMenuImg = document.querySelector(
  ".contacts-header-container__mob-menu>img"
);
mobMenuBtn?.removeChild(mobMenuImg);

addElement({
  createdElement: "img",
  img: mobMenuBtnWhite,
  parentElement: mobMenuBtn,
});

const closeBtn = document.querySelector(".contacts-mob-menu_close");
const closeBtnImg = document.querySelector(".contacts-mob-menu_close>img");
closeBtn?.removeChild(closeBtnImg);

addElement({
  createdElement: "img",
  img: closeBtnWhite,
  parentElement: closeBtn,
});

const createBody = () => {
  const titleContainer = document.querySelector(".contacts-title-container");
  const titleContent = document.createElement("div");
  titleContent.classList.add("contacts-title-container__content");
  titleContainer?.appendChild(titleContent);
  const titleContainerText = document.createElement("div");
  titleContainerText.classList.add("contacts-title-container__text");
  titleContent.appendChild(titleContainerText);

  addElement({
    createdElement: "h1",
    content: "Все явки и пароли здесь.",
    addClass: "contacts-title-text__title",
    parentElement: titleContainerText,
  });

  addElement({
    createdElement: "span",
    content: `Давайте будем оставаться на связи! Мы всегда готовы проконсультировать и помочь.
    <br><br>Связаться с нами и сделать заказ можно разными способами
    <br>Самый простой из них - `,
    addClass: "contacts-title-text__subtitle",
    parentElement: titleContainerText,
  });

  addElement({
    createdElement: "button",
    content: "ЗАКАЗАТЬ ЗВОНОК",
    addClass: "contacts-title-container__btn",
    parentElement: titleContainerText,
  });

  const titleImgContainer = document.createElement("div");
  titleImgContainer.classList.add("contacts-title-container__img");

  addElement({
    createdElement: "img",
    img: titleImg,
    parentElement: titleImgContainer,
    grandParentElement: titleContent,
  });

  //  ADDRESS //

  const addressContainer = document.querySelector(
    ".contacts-address-container"
  );

  addElement({
    createdElement: "h1",
    content: "АДРЕС И КОНТАКТЫ",
    addClass: "contacts__title",
    parentElement: addressContainer,
  });

  const addressSub = document.createElement("div");
  addressSub.classList.add("contacts-address__sub");
  addressContainer?.appendChild(addressSub);

  const textColumns1 = document.createElement("div");
  const textColumns2 = document.createElement("div");
  const textColumns3 = document.createElement("div");
  const textColumns4 = document.createElement("div");
  const textColumns5 = document.createElement("div");
  const textColumns6 = document.createElement("div");
  const textColumns7 = document.createElement("div");
  const textColumns8 = document.createElement("div");
  const textColumns9 = document.createElement("div");

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
  ].forEach((el) => {
    addressSub.appendChild(el);
    el.classList.add("contacts-address-sub__item");
  });

  addElement({
    createdElement: "span",
    content: "Название комании",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns1,
  });

  addElement({
    createdElement: "span",
    content: 'ООО "ЭСБИВИ" (SBV)',
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns1,
  });

  addElement({
    createdElement: "span",
    content: "Генеральный директор",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns2,
  });

  addElement({
    createdElement: "span",
    content: "Бирюков Вадим Геннадьевич",
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns2,
  });

  addElement({
    createdElement: "span",
    content: "ИНН",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns3,
  });

  addElement({
    createdElement: "span",
    content: "5031085613",
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns3,
  });

  addElement({
    createdElement: "span",
    content: "КПП",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns4,
  });

  addElement({
    createdElement: "span",
    content: "505301001",
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns4,
  });

  addElement({
    createdElement: "span",
    content: "ОГРН",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns5,
  });

  addElement({
    createdElement: "span",
    content: "1095031002010",
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns5,
  });

  addElement({
    createdElement: "span",
    content: "Основной телефон",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns6,
  });

  addElement({
    createdElement: "span",
    content: "+7 (495) 369-39-61",
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns6,
  });

  addElement({
    createdElement: "span",
    content: "Дополнительный телефон",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns7,
  });

  addElement({
    createdElement: "span",
    content: "8 (963) 770-58-45",
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns7,
  });

  addElement({
    createdElement: "span",
    content: "Электронная почта",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns8,
  });

  addElement({
    createdElement: "span",
    content: "2009sbv@gmail.com",
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns8,
  });

  addElement({
    createdElement: "span",
    content: "Адрес",
    addClass: "contacts-address-sub-item__top",
    parentElement: textColumns9,
  });

  addElement({
    createdElement: "span",
    content: `142400 Московская область, г. Ногинск, <br>ул. 200 лет Города, д. 2`,
    addClass: "contacts-address-sub-item__sub",
    parentElement: textColumns9,
  });

  //  MAP  //

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.87718034, 38.44256216],
        controls: ["routeButtonControl"],
        zoom: 17,
      }),
      control = myMap.controls.get("routeButtonControl");
    control.routePanel.state.set("to", "200 лет города, дом 2");
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [55.87718034, 38.44256216],
      },
    });
    myMap.geoObjects.add(myGeoObject);
  }

  //  FORM  //

  const formContainer = document.querySelector(".contacts-form-container");

  formContainer.innerHTML = `<h1 class = 'contacts__title'>НАПИСАТЬ НАМ</h1>
<form action="" class = 'contacts-form'>
  <div class="contacts-form__input-container">
    <label for="contacts-name-input" class="contacts-input-label">Имя </label>
    <input
      type="text"
      required="required"
      id="contacts-name-input"
      title="Заполните поле"
      name="name"
      class="contacts-form__input"
    />
  </div>
  <div class="contacts-form__input-container">
    <label for="contacts-phone-input" class="contacts-input-label">Телефон </label>
    <input
      type="text"
      id="contacts-phone-input"
      title="Заполните поле"
      name="phone"
      class="contacts-form__input"
    />
  </div>
  <div class="contacts-form__input-container">
    <label for="contacts-mail-input" class="contacts-input-label">Почта </label>
    <input
      type="text"
      required="required"
      id="contacts-mail-input"
      title="Заполните поле"
      name="mail"
      class="contacts-form__input"
    />
  </div>
  <div class="contacts-form__input-container">
    <label for="contacts-text-input" class="contacts-input-label">Сообщение </label>
    <textarea       
      id="contacts-text-input"
      title="Заполните поле"     
      class="contacts-form__input">
         
    </textarea>
  </div>
  <button class="contacts-form__btn" type="submit">ОТПРАВИТЬ СООБЩЕНИЕ</button>
</form>`;

  const inputsContainer = document.querySelectorAll(
    ".contacts-form__input-container"
  );

  inputsContainer.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.add("active");
    });
  });
  
};

createBody();

form('contacts');
