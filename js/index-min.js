const $searchForm = document.querySelector(".header-search"),
  $searchField = $searchForm["search-field"],
  $searchSubmit = $searchForm["search-submit"];
$searchField.addEventListener("focus", () => {
  $searchSubmit.classList.add("header-search-submit_active"),
    $searchForm.classList.add("header-search_active");
}),
  $searchForm.addEventListener("submit", (e) => {
    e.preventDefault(),
      ($searchField.value = ""),
      $searchSubmit.classList.remove("header-search-submit_active"),
      $searchForm.classList.remove("header-search_active");
  });
const deviceCards = document.querySelectorAll(".devices-item");
for (let e of deviceCards)
  e.addEventListener("mouseover", (e) => {
    e.target
      .closest(".devices-item")
      .querySelector(".devices-link-wrapper")
      .classList.remove("visually-hidden");
  }),
    e.addEventListener("mouseout", (e) => {
      e.target
        .closest(".devices-item")
        .querySelector(".devices-link-wrapper")
        .classList.add("visually-hidden");
    });
const deviceLinks = document.querySelectorAll(".devices-link");
for (let e of deviceLinks)
  e.addEventListener("focus", (e) => {
    e.target
      .closest(".devices-link-wrapper")
      .classList.remove("visually-hidden");
  }),
    e.addEventListener("blur", (e) => {
      e.target
        .closest(".devices-link-wrapper")
        .classList.add("visually-hidden");
    });
const $menuItem = document.querySelector(".content-menu-item"),
  $openSubmenu = $menuItem.querySelector(".header-show-submenu"),
  $submenu = $menuItem.querySelector(".content-menu-advanced");
$openSubmenu.addEventListener("click", () => {
  $submenu.classList.remove("visually-hidden");
}),
  $openSubmenu.addEventListener("focus", () => {
    $submenu.classList.remove("visually-hidden");
  }),
  document.addEventListener("keydown", (e) => {
    "Escape" !== e.key ||
      $submenu.classList.contains("visually-hidden") ||
      $submenu.classList.add("visually-hidden");
  });
const $promoCards = document.querySelectorAll(".promo-product-item"),
  $promoSelects = document.querySelectorAll(".promo-choise-label"),
  $promoFields = document.querySelectorAll(".promo-choise");
function changePromo() {
  for (let e of $promoCards)
    e.dataset.type === event.target.dataset.choice
      ? e.classList.add("promo-product-item_active")
      : e.classList.remove("promo-product-item_active");
}
for (let e of $promoSelects) e.addEventListener("click", changePromo);
for (let e of $promoFields) e.addEventListener("change", changePromo);
const $servicesCards = document.querySelectorAll(".services-item"),
  $servicesFields = document.querySelectorAll(".services-choise"),
  $servicesSelects = document.querySelectorAll(".services-choise-label");
function changeService() {
  for (let e of $servicesCards)
    e.dataset.servicesType === event.target.dataset.servicesChoice
      ? e.classList.add("services-item_active")
      : e.classList.remove("services-item_active");
}
for (let e of $servicesSelects) e.addEventListener("click", changeService);
for (let e of $servicesFields) e.addEventListener("change", changeService);
const $linkMessage = document.querySelector(".contacts-link-message"),
  $modalMessage = document.querySelector(".modal-message"),
  $closeMessage = document.querySelector(".modal-close_message"),
  $formMessage = document.querySelector(".message-form");
let currentFocusElement;
$linkMessage.addEventListener("click", (e) => {
  e.preventDefault(),
    (currentFocusElement = document.activeElement),
    $modalMessage.classList.add("modal-message_active"),
    $formMessage["message-author"].focus();
}),
  $closeMessage.addEventListener("click", () => {
    $modalMessage.classList.remove("modal-message_active"),
      currentFocusElement.focus();
  }),
  document.addEventListener("keydown", (e) => {
    "Escape" === e.key &&
      $modalMessage.classList.contains("modal-message_active") &&
      ($modalMessage.classList.remove("modal-message_active"),
      currentFocusElement.focus());
  }),
  $formMessage.addEventListener("submit", (e) => {
    e.preventDefault(),
      ($formMessage["message-author"].value = ""),
      ($formMessage["message-email"].value = ""),
      ($formMessage["message-text"].value = ""),
      $modalMessage.classList.remove("modal-message_active");
  });
const $linkMap = document.querySelector(".contacts-link"),
  $modalMap = document.querySelector(".modal-map"),
  $closeMap = document.querySelector(".modal-close_map");
$linkMap.addEventListener("click", (e) => {
  e.preventDefault(), $modalMap.classList.add("modal-map_active");
}),
  $closeMap.addEventListener("click", () => {
    $modalMap.classList.remove("modal-map_active");
  }),
  document.addEventListener("keydown", (e) => {
    "Escape" === e.key &&
      $modalMap.classList.contains("modal-map_active") &&
      $modalMap.classList.remove("modal-map_active");
  });
