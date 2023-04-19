"use strict";

const modals = document.querySelectorAll(".modal");
const playBtn = document.querySelector(".play-btn");
const profileBtn = document.querySelector(".profile-btn");
const profileModal = document.querySelector(".prof");
const collectionBtn = document.querySelector(".collection");
const collectionModal = document.querySelector(".coll");

const heroCollection = document.querySelector(".hero_collection_block");

const heroBlockModal = document.querySelector(".hero");
const heroBlock = document.querySelector(".hero_block");

function showModal(modalName) {
  modalName.classList.remove("hidden");
}

function hideModal(modalName) {
  modalName.classList.add("hidden");
}

profileBtn.addEventListener("click", () => {
  showModal(profileModal);
});
for (const modal of modals) {
  modal.addEventListener("click", (e) => {
    if (e.target.matches(".modal")) {
      modal.classList.add("hidden");
    }
  });
}

// hero collection block

let dataObj = {};
let heroArr = [];
// let url = "../dragontail-12.6.1/12.6.1/data/ru_RU/champion.json";
let url =
  "http://ddragon.leagueoflegends.com/cdn/12.6.1/data/ru_RU/champion.json";

fetch(url)
  .then((response) => response.json())
  .then((commits) => (dataObj = commits));

collectionBtn.addEventListener("click", () => {
  showModal(collectionModal);
  if (heroCollection.hasChildNodes()) return;

  let champs = dataObj.data;
  for (let hero in champs) {
    heroArr.push(champs[hero]);
  }
  for (let i = 0; i < heroArr.length; i++) {
    let heroIcon = document.createElement("img");

    heroIcon.className = "hero-icon";
    heroIcon.title = heroArr[i].name;
    heroIcon.id = heroArr[i].id;
    heroIcon.id = i;

    // heroIcon.src = `../dragontail-12.6.1/12.6.1/img/champion/${heroArr[i].image.full}`;
    heroIcon.src = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${heroArr[i].image.full}`;
    heroCollection.append(heroIcon);
  }
});

heroCollection.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.className !== "hero-icon") return;
  hideModal(collectionModal);

  showModal(heroBlockModal);

  heroBlock.innerHTML = "";

  const id = e.target.id;

  let heroIcon = document.createElement("img");
  heroIcon.title = heroArr[id].name;
  heroIcon.src = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${heroArr[id].image.full}`;
  heroBlock.append(heroIcon);

  let name = document.createElement("p");
  name.textContent = `${heroArr[id].name}`;
  heroBlock.append(name);

  for (const prop in heroArr[id].stats) {
    let stats = document.createElement("p");
    stats.textContent = `${prop.toUpperCase()}: ${heroArr[id].stats[prop]}`;
    heroBlock.append(stats);
  }
});
// json
