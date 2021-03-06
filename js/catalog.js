// Отображение ссылок при наведении на карточку и фокусе на ссылку
const deviceCards = document.querySelectorAll(".devices-item");
const deviceLinks = document.querySelectorAll(".devices-link");

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
