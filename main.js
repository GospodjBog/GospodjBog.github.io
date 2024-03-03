const dropBtn = document.getElementById("drop-btn");
const dropList = document.getElementById("drop-list");
const switchTheme = document.getElementById("switch-1");
const storage = window.localStorage

storage.getItem("theme")

dropBtn.addEventListener("click", () => {
  dropList.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") return;
  if (!dropList.classList.contains("hidden")) dropList.classList.add("hidden");
});

switchTheme.addEventListener("click", () => {
  if (storage.getItem("theme") == "white") {
    storage.setItem("theme", "black");
  } else {
    storage.setItem("theme", "white");
  }
  if (storage.getItem("theme") == "white") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
});
