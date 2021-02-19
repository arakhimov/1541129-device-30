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
      .querySelector(".devices-link-wrapper")
      .classList.remove("visually-hidden");
  });
  $card.addEventListener("mouseout", (event) => {
    event.target
      .closest(".devices-item")
      .querySelector(".devices-link-wrapper")
      .classList.add("visually-hidden");
  });
}

const deviceLinks = document.querySelectorAll(".devices-link");
for (let $link of deviceLinks) {
  $link.addEventListener("focus", (event) => {
    event.target
      .closest(".devices-link-wrapper")
      .classList.remove("visually-hidden");
  });
  $link.addEventListener("blur", (event) => {
    event.target
      .closest(".devices-link-wrapper")
      .classList.add("visually-hidden");
  });
}

// открытие подменю
const $menuItem = document.querySelector(".content-menu-item");
const $openSubmenu = $menuItem.querySelector(".header-show-submenu");
const $submenu = $menuItem.querySelector(".content-menu-advanced");
$openSubmenu.addEventListener("click", () => {
  $submenu.classList.remove("visually-hidden");
});
$menuItem.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    $submenu.classList.add("visually-hidden");
  }
});

// слайдер promo
const $promoCards = document.querySelectorAll(".promo-product-item");
const $promoSelects = document.querySelectorAll(".promo-choise-label");
for (let item of $promoSelects) {
  item.addEventListener("click", (event) => {
    for (let card of $promoCards) {
      if (card.dataset.type === event.target.dataset.choise) {
        card.classList.add("promo-product-item_active");
      } else {
        card.classList.remove("promo-product-item_active");
      }
    }
  });
}

// слайдер services
const $servicesCards = document.querySelectorAll(".services-item");
const $servicesSelects = document.querySelectorAll(".services-choise-label");
for (let item of $servicesSelects) {
  item.addEventListener("click", (event) => {
    for (let card of $servicesCards) {
      if (card.dataset.servicesType === event.target.dataset.servicesChoice) {
        card.classList.add("services-item_active");
      } else {
        card.classList.remove("services-item_active");
      }
    }
  });
}
