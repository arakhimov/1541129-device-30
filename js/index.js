// Активация кнопки поиска и отправки формы
const $searchForm = document.querySelector(".header-search");
const $searchField = $searchForm["search-field"];
const $searchSubmit = $searchForm["search-submit"];

$searchField.addEventListener("focus", () => {
  $searchSubmit.classList.add("header-search-submit_active");
  $searchForm.classList.add("header-search_active");
});

$searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  $searchField.value = "";
  $searchSubmit.classList.remove("header-search-submit_active");
  $searchForm.classList.remove("header-search_active");
});

// Отображение ссылок при наведении на карточку и фокусе на ссылку
const deviceCards = document.querySelectorAll(".devices-item");
for (let $card of deviceCards) {
  $card.addEventListener("mouseover", (event) => {
    event.target
      .closest(".devices-item")
      .querySelector(".devices-button-wrapper")
      .classList.remove("visually-hidden");
  });
  $card.addEventListener("mouseout", (event) => {
    event.target
      .closest(".devices-item")
      .querySelector(".devices-button-wrapper")
      .classList.add("visually-hidden");
  });
}

const deviceLinks = document.querySelectorAll(".devices-button");
for (let $link of deviceLinks) {
  $link.addEventListener("focus", (event) => {
    event.target
      .closest(".devices-button-wrapper")
      .classList.remove("visually-hidden");
  });
  $link.addEventListener("blur", (event) => {
    event.target
      .closest(".devices-button-wrapper")
      .classList.add("visually-hidden");
  });
}

// слайдер promo
const $promoCards = document.querySelectorAll(".promo-product-item");
const $promoSelects = document.querySelectorAll(".promo-choise-label");
const $promoFields = document.querySelectorAll(".promo-choise");

function changePromo() {
  for (let card of $promoCards) {
    if (card.dataset.type === event.target.dataset.choice) {
      card.classList.add("promo-product-item_active");
    } else {
      card.classList.remove("promo-product-item_active");
    }
  }
}
// по клику
for (let item of $promoSelects) {
  item.addEventListener("click", changePromo);
}
// по изменению состояния input
for (let item of $promoFields) {
  item.addEventListener("change", changePromo);
}

// слайдер services
const $servicesCards = document.querySelectorAll(".services-item");
const $servicesFields = document.querySelectorAll(".services-choise");
const $servicesSelects = document.querySelectorAll(".services-choise-label");

function changeService() {
  for (let card of $servicesCards) {
    if (card.dataset.servicesType === event.target.dataset.servicesChoice) {
      card.classList.add("services-item_active");
    } else {
      card.classList.remove("services-item_active");
    }
  }
}
// по клику
for (let item of $servicesSelects) {
  item.addEventListener("click", changeService);
}
// по изменинию состояния input
for (let item of $servicesFields) {
  item.addEventListener("change", changeService);
}
// модальное окно напишите нам
const $linkMessage = document.querySelector(".contacts-link-message");
const $modalMessage = document.querySelector(".modal-message");
const $closeMessage = document.querySelector(".modal-close_message");
const $formMessage = document.querySelector(".message-form");
let focusElementPage = null;
// открытие окна
$linkMessage.addEventListener("click", (event) => {
  event.preventDefault();
  focusElementPage = document.activeElement;
  $modalMessage.classList.add("modal-message_active");
  $formMessage["message-author"].focus();
  $formMessage["message-author"].value = "";
  $formMessage["message-email"].value = "";
  $formMessage["message-text"].value = "";
});
// закрытие по клику
$closeMessage.addEventListener("click", () => {
  $modalMessage.classList.remove("modal-message_active");
  focusElementPage.focus();
});
// закрытие клавишей Escape
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    $modalMessage.classList.contains("modal-message_active")
  ) {
    $modalMessage.classList.remove("modal-message_active");
    focusElementPage.focus();
  }
});
// отправка сообщения
$formMessage.addEventListener("submit", (event) => {
  $modalMessage.classList.remove("modal-message_active");
});

// модальное окно как до нас добраться
const $linkMap = document.querySelector(".contacts-link");
const $modalMap = document.querySelector(".modal-map");
const $closeMap = document.querySelector(".modal-close_map");
// открытие окна
$linkMap.addEventListener("click", (event) => {
  event.preventDefault();
  $modalMap.classList.add("modal-map_active");
});
// закрытие по клику
$closeMap.addEventListener("click", () => {
  $modalMap.classList.remove("modal-map_active");
});
// закрытие клавишей Escape
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    $modalMap.classList.contains("modal-map_active")
  ) {
    $modalMap.classList.remove("modal-map_active");
  }
});
