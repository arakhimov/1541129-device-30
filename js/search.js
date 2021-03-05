// Активация кнопки поиска и отправки формы
const $searchForm = document.querySelector(".header-search");
const $searchField = $searchForm["search-field"];
const $searchSubmit = $searchForm.querySelector(".header-search-submit");

$searchField.addEventListener("focus", () => {
  $searchSubmit.classList.add("header-search-submit_active");
  $searchForm.classList.add("header-search_active");
  $searchForm.reset();
});

$searchForm.addEventListener("submit", (event) => {
  $searchSubmit.classList.remove("header-search-submit_active");
  $searchForm.classList.remove("header-search_active");
});
