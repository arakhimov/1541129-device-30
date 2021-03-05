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
let storageAuthor = "";
let storageEmail = "";
let isStoragesupport = true;

// проверка поддержки localStorage
try {
  storageAuthor = localStorage.getItem("storageAuthor");
  storageEmail = localStorage.getItem("storageEmail");
} catch {
  isStoragesupport = false;
}

// открытие окна
$linkMessage.addEventListener("click", (event) => {
  event.preventDefault();
  $formMessage.reset();
  focusElementPage = document.activeElement;
  $modalMessage.classList.add("modal-message_active");
  if (storageAuthor && storageEmail) {
    $formMessage.author.value = storageAuthor;
    $formMessage.email.value = storageEmail;
    $formMessage.text.focus();
  } else {
    $formMessage.author.focus();
  }
});

// закрытие по клику
$closeMessage.addEventListener("click", () => {
  $modalMessage.classList.remove("modal-message_active");
  $modalMessage.classList.remove("modal-message_error");
  focusElementPage.focus();
});

// закрытие клавишей Escape
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    $modalMessage.classList.contains("modal-message_active")
  ) {
    $modalMessage.classList.remove("modal-message_active");
    $modalMessage.classList.remove("modal-message_error");
    focusElementPage.focus();
  }
});

// отправка сообщения
$formMessage.addEventListener("submit", (event) => {
  const fields = [$formMessage.author, $formMessage.email, $formMessage.text];
  if (!fields.every((item) => item.value !== "")) {
    event.preventDefault();
    $modalMessage.classList.remove("modal-message_error");
    $modalMessage.offsetWidth = $modalMessage.offsetWidth;
    $modalMessage.classList.add("modal-message_error");
    fields.find((item) => item.value === "").focus();
  } else {
    if (isStoragesupport) {
      localStorage.setItem("storageAuthor", $formMessage.author.value);
      localStorage.setItem("storageEmail", $formMessage.email.value);
    }
    $modalMessage.classList.remove("modal-message_active");
  }
  focusElementPage.focus();
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
