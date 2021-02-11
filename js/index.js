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
