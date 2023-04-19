const loginBtn = document.querySelector("#login-btn");
const loginModal = document.querySelector(".modal");

loginBtn.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

loginModal.addEventListener("click", (e) => {
  if (e.target.matches(".modal")) {
    loginModal.classList.add("hidden");
  }
});
