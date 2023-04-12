const dropBtn = document.getElementById("drop-btn");
const dropList = document.getElementById("drop-list");
const switchTheme = document.getElementById("switch-1");

dropBtn.addEventListener("click", () => {
  dropList.classList.toggle("hidden");
});
window.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") return;
  if (!dropList.classList.contains("hidden")) dropList.classList.add("hidden");
});

switchTheme.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
