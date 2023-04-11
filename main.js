const dropBtn = document.getElementById("drop-btn");
const dropList = document.getElementById("drop-list");

dropBtn.addEventListener("click", (e) => {
  dropList.classList.toggle("hidden");
});
window.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") return;
  if (!dropList.classList.contains("hidden")) dropList.classList.add("hidden");
});
