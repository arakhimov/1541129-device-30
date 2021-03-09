// Активация кнопки поиска и отправки формы
const $searchForm = document.querySelector(".header-search");
const $searchField = $searchForm["search-field"];
const $searchSubmit = $searchForm.querySelector(".header-search-submit");

$searchForm.addEventListener("submit", () => {
  $searchSubmit.classList.remove("header-search-submit_active");
  $searchForm.classList.remove("header-search_active");
  setTimeout(() => $searchForm.reset(), 100);
});
