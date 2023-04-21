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

let dataObj = {};
let heroArr = [];
let url = "./champion.json";
// let url =
//   "https://ddragon.leagueoflegends.com/cdn/12.6.1/data/ru_RU/champion.json";

fetch(url)
  .then((response) => response.json())
  .then((commits) => (dataObj = commits));

function showModal(modalName) {
  modalName.classList.remove("hidden");
}

function hideModal(modalName) {
  modalName.classList.add("hidden");
}

function createReturnBtn(parent, hideParent, returnTo = null) {
  const returnBtn = document.createElement("button");
  returnBtn.className = "return-btn";
  parent.append(returnBtn);

  returnBtn.addEventListener("click", () => {
    hideModal(hideParent);
    if (!returnTo) return;
    showModal(returnTo);
  });
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

collectionBtn.addEventListener("click", () => {
  showModal(collectionModal);

  if (heroCollection.hasChildNodes()) return;
  createReturnBtn(heroCollection, collectionModal);
  let champs = dataObj.data;
  for (let hero in champs) {
    heroArr.push(champs[hero]);
  }

  for (let i = 0; i < heroArr.length; i++) {
    // сделать switch case для выбора роли чемпионов и их отображения
    // if (heroArr[i].role === "adc") {
    // adc
    let heroIcon = document.createElement("img");

    heroIcon.className = "hero-icon";
    heroIcon.title = heroArr[i].name;
    heroIcon.id = heroArr[i].id;
    heroIcon.id = i;

    // heroIcon.src = `../dragontail-12.6.1/12.6.1/img/champion/${heroArr[i].image.full}`;
    heroIcon.src = `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${heroArr[i].image.full}`;
    heroCollection.append(heroIcon);
    // }
  }
});

// hero block
heroCollection.addEventListener("click", function createHeroBlock(e) {
  if (e.target.className !== "hero-icon") return;
  hideModal(collectionModal);

  showModal(heroBlockModal);

  heroBlock.innerHTML = "";

  const id = e.target.id;

  createReturnBtn(heroBlock, heroBlockModal, collectionModal);

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const heroIcon = document.createElement("img");
  heroIcon.title = heroArr[id].name;
  heroIcon.className = heroArr[id].id;
  heroIcon.src = `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${heroArr[id].image.full}`;
  heroBlock.append(heroIcon);

  const heroName = document.createElement("h2");
  heroName.className = "hero-name";
  heroName.textContent = `${heroArr[id].name}`;
  heroBlock.append(heroName);

  for (const prop in heroArr[id].stats) {
    const stats = document.createElement("p");
    stats.textContent = `${prop.toUpperCase()}: ${heroArr[id].stats[prop][0]}`;
    heroBlock.append(stats);
  }
});
