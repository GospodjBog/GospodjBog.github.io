const darkModeBtn = document.querySelector(".dark-mode-btn");

if (localStorage.getItem("darkMode") === "dark") {
  darkModeBtn.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {
  darkModeBtn.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
});
