"use strict";
import { champions } from "./champion.js";
import { summoners } from "./summoner.js";

const modals = document.querySelectorAll(".modal");
const playBtn = document.querySelector(".play-btn");

const profileBtn = document.querySelector(".profile-btn");
const profileModal = document.querySelector(".prof");

const shopBtn = document.querySelector(".shop-btn");
const shopModal = document.querySelector(".shop");

const buildsBtn = document.querySelector(".builds-btn");
const buildsModal = document.querySelector(".build");

const collectionBtn = document.querySelector(".collection-btn");
const collectionModal = document.querySelector(".coll");
const heroCollection = document.querySelector(".hero_collection_block");
const heroBlockModal = document.querySelector(".hero");
const heroBlock = document.querySelector(".hero_block");

const statisticsBtn = document.querySelector(".statistics-btn");
const statisticsModal = document.querySelector(".stat");
const statisticsBlock = document.querySelector(".statistics_block");

const storageBtn = document.querySelector(".storage-btn");
const storageModal = document.querySelector(".stor");

const questBtn = document.querySelector(".quest-btn");
const questModal = document.querySelector(".quest");
const questBlock = document.querySelector(".quest_block");

const guildBtn = document.querySelector(".guild-btn");
const guildModal = document.querySelector(".guild");

let heroArr = [];
let summonerArr = [];

for (let hero in champions.data) {
  heroArr.push(champions.data[hero]);
}

for (let hero in summoners) {
  summonerArr.push(summoners[hero]);
}

// перевод числа 90 в минуты:секунды (1:30)
function getDecimalTime(value) {
  let min = Math.floor(value / 60);
  let sec = value % 60;
  if (sec < 10 || sec == 0) sec = `0${Math.floor(sec)}`;
  return `${min}:${sec}`;
}

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

// profileBtn.addEventListener("click", () => {
//   showModal(profileModal);
// });

for (const modal of modals) {
  modal.addEventListener("click", (e) => {
    if (e.target.matches(".modal")) {
      modal.classList.add("hidden");
    }
  });
}

// КНОПКИ И БЛОКИ

// shop block
shopBtn.addEventListener("click", () => {
  showModal(shopModal);
  if (shopModal.hasChildNodes()) return;
});

// hero collection block
collectionBtn.addEventListener("click", () => {
  showModal(collectionModal);

  if (heroCollection.hasChildNodes()) return;
  createReturnBtn(heroCollection, collectionModal);

  for (let i = 0; i < heroArr.length; i++) {
    // сделать switch case для выбора роли чемпионов и их отображения
    if (heroArr[i].role === "adc") {
      // adc

      let heroIcon = document.createElement("img");
      heroIcon.className = "hero-icon";
      heroIcon.title = heroArr[i].name;
      heroIcon.id = heroArr[i].id;
      heroIcon.id = i;
      heroIcon.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${heroArr[i].id.split(" ").join("")}_0.jpg`;

      heroCollection.append(heroIcon);
    }
  }
});

// hero block

heroCollection.addEventListener("click", (e) => {
  if (e.target.className !== "hero-icon") return;
  hideModal(collectionModal);
  showModal(heroBlockModal);
  heroBlock.innerHTML = "";
  const id = e.target.id;

  const mq = window.matchMedia("(max-width: 900px)");

  createReturnBtn(heroBlock, heroBlockModal, collectionModal);
  createFirstLayer();
  if (heroArr[id].stats.armor) return;
  createHeroAttrTable();
  function createFirstLayer() {
    const heroWrapper = document.createElement("div");
    heroWrapper.className = "hero_block-wrapper";

    heroBlock.style.backgroundImage = `url(http://ddragon.leagueoflegends.com/cdn/img/champion/centered/${heroArr[id].id}_0.jpg)`;
    heroBlock.style.backgroundSize = "cover";

    // const heroIcon = document.createElement("img");
    // heroIcon.title = heroArr[id].name;
    // heroIcon.className = heroArr[id].id;
    // heroIcon.src = `https://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${heroArr[id].image.full}`;
    // wrapper.append(heroIcon);

    const heroName = document.createElement("h2");
    heroName.className = "hero-name";
    heroName.textContent = `${heroArr[id].name}`;
    heroBlock.append(heroName);

    const lvlText = document.createElement("h3");
    lvlText.className = "hero-title";
    lvlText.textContent = "Характеристики";
    heroBlock.append(lvlText);

    for (const prop in heroArr[id].stats) {
      if (prop === "lvl" || heroArr[id].stats[prop][0] === 0) continue;
      const stats = document.createElement("p");
      stats.textContent = `${prop.toUpperCase()}: ${heroArr[id].stats[prop][0]}`;
      heroWrapper.append(stats);
    }

    heroBlock.append(heroWrapper);
  }
  function createHeroAttrTable() {
    const tableE = document.createElement("table");

    let chars = heroArr[id].stats;
    let tdE;
    let trE;

    const tableWrapper = document.createElement("div");
    tableWrapper.className = "hero_table-wrapper";

    for (const stat in chars) {
      if (stat === "lvl" || chars[stat][0] === 0) continue;
      tdE = `<td>${stat}</td>`;
      for (const oneStat of chars[stat]) {
        tdE += `<td>${oneStat}</td>`;
      }
      trE += `<tr>${tdE}</tr>`;
    }

    let thE = "<th>lvl</th>";
    for (const lvls of chars.lvl) {
      thE += `<th>${lvls}</th>`;
    }

    const theadE = `<thead><tr>${thE}</tr></thead>`;
    const tbodyE = `<tbody>${trE}</tbody>`;

    tableE.className = "table";
    tableE.innerHTML = theadE + tbodyE;
    tableE.childNodes[2].remove();
    tableWrapper.append(tableE);
    heroBlock.append(tableWrapper);
  }
});

// builds block
buildsBtn.addEventListener("click", () => {
  showModal(buildsModal);
});

// statistics block
statisticsBtn.addEventListener("click", () => {
  showModal(statisticsModal);
  if (statisticsBlock.hasChildNodes()) return;
  createReturnBtn(statisticsBlock, statisticsModal);
  createStatTable();
  function createStatTable() {
    const tableE = document.createElement("table");

    // сделать конструктор таблиц для разных ролей
    let adcArr = [];
    for (let i = 0; i < heroArr.length; i++) {
      if (heroArr[i].role === "adc") adcArr.push(heroArr[i]);
    }

    let heroAttributes = adcArr[0].stats;
    let tdE;
    let trE;

    const tableWrapper = document.createElement("div");
    tableWrapper.className = "statistics_table-wrapper";

    for (const stat in adcArr[0].stats) {
      if (stat === "lvl" || heroAttributes[stat][0] === 0) continue;
      tdE = `<td>${stat}</td>`;
      for (let i = 0; i < adcArr.length; i++) {
        tdE += `<td>${adcArr[i].stats[stat][0]}</td>`;
      }

      trE += `<tr>${tdE}</tr>`;
    }

    let thE = "<th>ADC</th>"; // 1 заголовок
    for (let i = 0; i < adcArr.length; i++) {
      // заголовки
      thE += `<th>${adcArr[i].id}</th>`;
    }

    const theadE = `<thead><tr>${thE}</tr></thead>`;
    const tbodyE = `<tbody>${trE}</tbody>`;

    tableE.className = "table";
    tableE.innerHTML = theadE + tbodyE;
    tableE.childNodes[2].remove();
    tableWrapper.append(tableE);
    statisticsBlock.append(tableWrapper);
  }
});

// storage block
storageBtn.addEventListener("click", () => {
  showModal(storageModal);
});

// quest block
questBtn.addEventListener("click", () => {
  showModal(questModal);

  if (questBlock.hasChildNodes()) return;
  createReturnBtn(questBlock, questModal);
  createSummonersList();
  createStatTable();
  function createSummonersList() {
    for (let i = 0; i < summonerArr.length; i++) {
      const summonerTitleWrapper = document.createElement("div");
      summonerTitleWrapper.className = "summoner_title-wrapper";

      const summonerIcon = document.createElement("img");
      summonerIcon.className = "summoner-icon";
      summonerIcon.title = summonerArr[i].name;
      summonerIcon.id = summonerArr[i].id;
      summonerIcon.id = i;
      summonerIcon.src = `http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${summonerArr[i].image.full}`;

      const summonerName = document.createElement("p");

      summonerName.className = "summoners_title-name";
      summonerName.textContent = `${summonerArr[i].name}`;

      const summonerDescription = document.createElement("p");
      summonerDescription.textContent = `${summonerArr[i].description}`;

      const summonerCooldown = document.createElement("p");
      summonerCooldown.textContent = `Кд: ${summonerArr[i].cooldown}s (${getDecimalTime(summonerArr[i].cooldown)})`;

      // const reducedCooldown = document.createElement("p");
      // reducedCooldown.textContent = `Кд: ${summonerArr[i].reducedCooldown}s (${getDecimalTime(summonerArr[i].reducedCooldown)}) -15%`;

      summonerTitleWrapper.append(summonerIcon);
      summonerTitleWrapper.append(summonerName);
      summonerTitleWrapper.append(summonerCooldown);
      // summonerTitleWrapper.append(reducedCooldown);
      summonerTitleWrapper.append(summonerDescription);

      questBlock.append(summonerTitleWrapper);
    }
  }
  function createStatTable() {
    const tableE = document.createElement("table");
    console.log(summonerArr);
    // сделать конструктор таблиц для разных ролей

    let tdE;
    let trE;

    const tableWrapper = document.createElement("div");
    tableWrapper.className = "summoner_table-wrapper";

    for (let i = 0; i < summonerArr.length; i++) {
      tdE = `<td>${summonerArr[i].name}</td><td>${summonerArr[i].cooldown}</td><td>${getDecimalTime(summonerArr[i].cooldown)}</td><td>${
        summonerArr[i].reducedCooldown
      }</td><td>${getDecimalTime(summonerArr[i].reducedCooldown)}</td>`;
      trE += `<tr>${tdE}</tr>`;
    }

    let thE = `<th></th><th>s</th><th>m:s</th><th>s (-15%)</th><th>m:s (-15%)</th>`;

    const theadE = `<thead><tr>${thE}</tr></thead>`;
    const tbodyE = `<tbody>${trE}</tbody>`;

    tableE.className = "table";
    tableE.innerHTML = theadE + tbodyE;
    tableE.childNodes[2].remove();
    tableWrapper.append(tableE);
    questBlock.append(tableWrapper);
  }
});

// guild block
guildBtn.addEventListener("click", () => {
  showModal(guildModal);
});
