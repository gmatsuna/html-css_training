let hamburgerButton = document.querySelector("#hamburgerButton");
let closeButton = document.querySelector("#closeButton");

let mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});