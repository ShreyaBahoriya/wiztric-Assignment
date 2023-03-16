const loginButton = document.getElementById("login-button");
const popup = document.getElementById("popup");

loginButton.addEventListener("click", function () {
  popup.classList.remove("hidden");
});
