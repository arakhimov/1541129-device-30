// слайдер promo
const $promoCards = document.querySelectorAll(".promo-product-item");
const $promoButtons = document.querySelectorAll(".promo-choiсe-button");

function changePromo() {
  for (let button of $promoButtons) {
    if (button.dataset.choice === event.target.dataset.choice) {
      button.classList.add("promo-choiсe-button_active");
      button.setAttribute("aria-pressed", true);
    } else {
      button.classList.remove("promo-choiсe-button_active");
      button.setAttribute("aria-pressed", false);
    }
  }
  for (let card of $promoCards) {
    if (card.dataset.type === event.target.dataset.choice) {
      card.classList.add("promo-product-item_active");
    } else {
      card.classList.remove("promo-product-item_active");
    }
  }
}

for (let item of $promoButtons) {
  item.addEventListener("focus", changePromo);
}

// слайдер services
const $servicesCards = document.querySelectorAll(".services-item");
const $servicesButtons = document.querySelectorAll(".services-button");

function changeService() {
  for (let button of $servicesButtons) {
    if (button.dataset.servicesChoice === event.target.dataset.servicesChoice) {
      button.classList.add("services-button_active");
      button.setAttribute("aria-pressed", true);
    } else {
      button.classList.remove("services-button_active");
      button.setAttribute("aria-pressed", false);
    }
  }

  for (let card of $servicesCards) {
    if (card.dataset.servicesType === event.target.dataset.servicesChoice) {
      card.classList.add("services-item_active");
    } else {
      card.classList.remove("services-item_active");
    }
  }
}

for (let item of $servicesButtons) {
  item.addEventListener("focus", changeService);
}

// модальное окно напишите нам
const $linkMessage = document.querySelector(".contacts-link-message");
const $modalMessage = document.querySelector(".modal-message");
const $closeMessage = document.querySelector(".modal-close_message");
const $formMessage = document.querySelector(".message-form");
const fields = [$formMessage.author, $formMessage.email, $formMessage.text];
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
function openForm(event) {
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
}
$linkMessage.addEventListener("click", openForm);

// закрытие по клику
$closeMessage.addEventListener("click", () => {
  $modalMessage.classList.remove("modal-message_active");
  $modalMessage.classList.remove("modal-message_error");
  fields.forEach((item) => item.classList.remove("message-form-field_invalid"));
  focusElementPage.focus();
});

// закрытие клавишей Escape
function closeForm(event) {
  if (
    event.key === "Escape" &&
    $modalMessage.classList.contains("modal-message_active")
  ) {
    $modalMessage.classList.remove("modal-message_active");
    $modalMessage.classList.remove("modal-message_error");
    fields.forEach((item) =>
      item.classList.remove("message-form-field_invalid")
    );
    focusElementPage.focus();
  }
}
document.addEventListener("keydown", closeForm);

// валидация полей
function isValidField(field) {
  if (field.value === "") {
    field.classList.add("message-form-field_invalid");
    return false;
  } else {
    field.classList.remove("message-form-field_invalid");
    return true;
  }
}

// слушатели на изменение текстового поля
for (let field of fields) {
  field.addEventListener("input", (event) => isValidField(event.target));
}

// отправка сообщения
function submitForm(event) {
  if (!fields.every((item) => isValidField(item))) {
    event.preventDefault();
    $modalMessage.classList.remove("modal-message_error");
    $modalMessage.offsetWidth = $modalMessage.offsetWidth;
    $modalMessage.classList.add("modal-message_error");
    let invalidField = fields.find((item) => !isValidField(item));
    invalidField.focus();
  } else {
    if (isStoragesupport) {
      localStorage.setItem("storageAuthor", $formMessage.author.value);
      localStorage.setItem("storageEmail", $formMessage.email.value);
    }
    $modalMessage.classList.remove("modal-message_active");
    $modalMessage.classList.remove("modal-message_error");
  }
}
$formMessage.addEventListener("submit", submitForm);

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
