"use strict";
import { champions } from "./champion.js";
import { summoners } from "./summoner.js";
import { runes } from "./runes.js";
import { items } from "./items.js";

const modals = document.querySelectorAll(".modal");
const playBtn = document.querySelector(".play-btn");

const profileBtn = document.querySelector(".profile-btn");
const profileModal = document.querySelector(".prof");

const shopBtn = document.querySelector(".shop-btn");
const shopModal = document.querySelector(".shop");
const shopBlock = document.querySelector(".shop_block");

const buildsBtn = document.querySelector(".builds-btn");
const buildsModal = document.querySelector(".builds");
const buildsBlock = document.querySelector(".builds_block");

const collectionBtn = document.querySelector(".collection-btn");
const collectionModal = document.querySelector(".coll");
const collectionBlock = document.querySelector(".hero_collection_block");
const heroBlockModal = document.querySelector(".hero");
const heroBlock = document.querySelector(".hero_block");

const statisticsBtn = document.querySelector(".statistics-btn");
const statisticsModal = document.querySelector(".stat");
const statisticsBlock = document.querySelector(".statistics_block");

const storageBtn = document.querySelector(".storage-btn");
const storageModal = document.querySelector(".stor");
const storageBlock = document.querySelector(".storage_block");

const questBtn = document.querySelector(".quest-btn");
const questModal = document.querySelector(".quest");
const questBlock = document.querySelector(".quest_block");

const runeBtn = document.querySelector(".rune-btn");
const runeModal = document.querySelector(".rune");
const runeBlock = document.querySelector(".rune_block");

// Глобальные массивы и данные

const heroArr = [];
const summonerArr = [];
const runesArr = [];
const itemsArr = [];
const itemsSet = new Set();

for (const hero in champions.data) {
  heroArr.push(champions.data[hero]);
}

for (const spell in summoners) {
  summonerArr.push(summoners[spell]);
}

for (const rune in runes) {
  runesArr.push(runes[rune]);
}

for (const item in items.data) {
  itemsArr.push(items.data[item]);
}

// Предметы

for (let i = 0; i < itemsArr.length; i++) {
  for (let j = 0; j < itemsArr[i].tags.length; j++) {
    itemsSet.add(itemsArr[i].tags[j]);
  }
}

const classItemsList = ["boots", "defense", "magic", "physical"];
const rarityItemsList = ["upgraded", "mid-tier", "basic"];

const sortedTotalGoldItems = [...itemsArr].sort((a, b) => b.gold.total - a.gold.total);

// модальные окна
for (const modal of modals) {
  modal.addEventListener("click", (e) => {
    if (e.target.matches(".modal")) {
      modal.classList.add("hidden");
    }
  });
}

const attrList = [
  "Attack Damage",
  "Health Points",
  "Mana Points",
  "Physical Resistance",
  "Magical Resistance",
  "Attack Speed",
  "Critical Damage",
  "Health Point Regeneration",
  "Mana Point Regeneration",
  "Movement Speed",
];

// FUNCTIONS

// перевод числа 90 в минуты:секунды (1:30)
function getDecimalTime(value) {
  let min = Math.floor(value / 60);
  let sec = (value % 60).toFixed();
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

function showTooltips(wrapper, arr, i) {
  let tooltip;

  wrapper.addEventListener("mouseover", (e) => {
    let anchorElem = e.target.closest("[data-tooltip]");

    if (!anchorElem) return;

    tooltip = showTooltip(anchorElem, anchorElem.id);
  });

  wrapper.addEventListener("mouseout", () => {
    if (tooltip) {
      tooltip.remove();
      tooltip = false;
    }
  });

  function showTooltip(anchorElem, html) {
    let tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = html;

    const itemName = document.createElement("div");
    itemName.className = "item-name";
    itemName.textContent = `${sortedTotalGoldItems[i].name}`;
    tooltipElem.append(itemName);

    // const itemDescription = document.createElement("div");
    // itemDescription.className = "item-description";
    // itemDescription.innerHTML = `${sortedTotalGoldItems[i].description}`;
    // tooltipElem.append(itemDescription);

    const statTitle = document.createElement("p");
    statTitle.className = "item-description";
    statTitle.innerHTML = `Stats`;
    tooltipElem.append(statTitle);

    for (const stat in arr[i].stats) {
      let text = document.createElement("p");
      text.className = "tooltip-stats-text";
      text.textContent = `${stat}: ${arr[i].stats[stat]}`;
      tooltipElem.append(text);
    }

    // if (arr[i].passive) {
    //   const passiveTitle = document.createElement("p");
    //   passiveTitle.className = "item-description";
    //   passiveTitle.innerHTML = `Passive`;
    //   tooltipElem.append(passiveTitle);

    //   for (const stat in arr[i].passive) {
    //     let text = document.createElement("p");
    //     text.className = "tooltip-stats-text";
    //     text.textContent = `${stat}: ${arr[i].passive[stat]}`;
    //     tooltipElem.append(text);
    //   }
    // }

    document.body.append(tooltipElem);

    let coords = anchorElem.getBoundingClientRect();

    // позиционируем подсказку над центром элемента
    let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + anchorElem.offsetHeight + 5;
    }

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";

    return tooltipElem;
  }
}

// КНОПКИ И БЛОКИ

// shop block
shopBtn.addEventListener("click", () => {
  showModal(shopModal);
  if (shopBlock.hasChildNodes()) return;
  createReturnBtn(shopBlock, shopModal);

  const itemBlockWrapper = document.createElement("div");
  itemBlockWrapper.className = "item_block-wrapper";

  const btnWrapper = document.createElement("div");
  btnWrapper.className = "btn-wrapper";

  const classBtnWrapper = document.createElement("div");
  classBtnWrapper.className = "class-btn-wrapper";

  const selectList = document.createElement("select");
  selectList.className = "item-select";

  for (let value of itemsSet) {
    const sortBtn = document.createElement("option");
    sortBtn.value = `${value}`;
    sortBtn.textContent = `${value}`;

    selectList.append(sortBtn);
  }

  selectList.addEventListener("change", function (e) {
    itemBlockWrapper.innerHTML = "";
    createTagItems(e.target.value);
  });

  for (let i = 0; i < classItemsList.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = classItemsList[i];
    btn.className = "sort-btn";
    btn.id = classItemsList[i];
    btn.addEventListener("click", (e) => {
      itemBlockWrapper.innerHTML = "";
      createClassItems(e.target.id);
    });
    classBtnWrapper.append(btn);
  }

  for (let i = 0; i < sortedTotalGoldItems.length; i++) {
    createItemsCards(sortedTotalGoldItems, itemBlockWrapper, i);
  }

  btnWrapper.append(classBtnWrapper);
  shopBlock.append(selectList);
  shopBlock.append(btnWrapper);
  shopBlock.append(itemBlockWrapper);

  function createClassItems(value) {
    for (let j = 0; j < rarityItemsList.length; j++) {
      const itemCardWrapper = document.createElement("div");
      itemCardWrapper.className = "item_card-wrapper";

      const itemCardTitle = document.createElement("div");
      itemCardTitle.className = "item_card-title";
      itemCardTitle.textContent = rarityItemsList[j][0].toUpperCase() + rarityItemsList[j].slice(1);

      itemBlockWrapper.append(itemCardTitle);

      for (let i = 0; i < sortedTotalGoldItems.length; i++) {
        if (
          sortedTotalGoldItems[i].rarity !== rarityItemsList[j] ||
          sortedTotalGoldItems[i].class !== value ||
          !sortedTotalGoldItems[i].gold.purchasable
        )
          continue;

        createItemsCards(sortedTotalGoldItems, itemCardWrapper, i);
        itemBlockWrapper.append(itemCardWrapper);
      }
    }

    shopBlock.append(itemBlockWrapper);
  }

  function createTagItems(value) {
    for (let i = 0; i < sortedTotalGoldItems.length; i++) {
      for (let j = 0; j < sortedTotalGoldItems[i].tags.length; j++) {
        if (sortedTotalGoldItems[i].tags[j] !== value) continue;
        createItemsCards(sortedTotalGoldItems, itemBlockWrapper, i);
      }
    }
  }

  // Блок предметов с картинкой и всплывающим окном
  function createItemsCards(array, block, i) {
    const itemWrapper = document.createElement("div");
    itemWrapper.className = "item-wrapper";
    itemWrapper.dataset.tooltip = array[i].name;

    const itemIcon = document.createElement("img");
    itemIcon.className = "item-icon";
    itemIcon.id = i;
    itemIcon.src = `images/item/${array[i].image.full}`;

    const itemPrice = document.createElement("div");
    itemPrice.className = "item-price";
    itemPrice.textContent = `${array[i].gold.total}`;

    showTooltips(itemWrapper, array, i);

    itemWrapper.append(itemPrice);
    itemWrapper.append(itemIcon);
    block.append(itemWrapper);
  }
});

// hero collection block
collectionBtn.addEventListener("click", () => {
  showModal(collectionModal);
  if (collectionBlock.hasChildNodes()) return;
  createReturnBtn(collectionBlock, collectionModal);
  for (let i = 0; i < heroArr.length; i++) {
    // сделать switch case для выбора роли чемпионов и их отображения
    // if (heroArr[i].role === "adc") {
    // adc
    const heroIconWrapper = document.createElement("div");
    heroIconWrapper.className = "hero-icon-wrapper";

    const heroName = document.createElement("div");
    heroName.className = "hero-icon-name";
    heroName.textContent = heroArr[i].name;

    const heroIcon = document.createElement("img");
    heroIcon.className = "hero-icon";
    heroIcon.title = heroArr[i].name;
    heroIcon.id = i;
    heroIcon.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${heroArr[i].id.split(" ").join("")}_0.jpg`;

    heroIconWrapper.append(heroName);
    heroIconWrapper.append(heroIcon);
    collectionBlock.append(heroIconWrapper);

    // }
  }
});

// hero block
collectionBlock.addEventListener("click", (e) => {
  if (e.target.className !== "hero-icon") return;
  hideModal(collectionModal);
  showModal(heroBlockModal);
  heroBlock.innerHTML = "";
  const id = e.target.id;

  createReturnBtn(heroBlock, heroBlockModal, collectionModal);
  createFirstLayer();
  if (heroArr[id].stats.armor) return;
  createSkillLayer();
  createHeroAttrTable();

  function createFirstLayer() {
    const heroWrapper = document.createElement("div");
    heroWrapper.className = "hero_block-wrapper";

    heroBlock.style.backgroundImage = `url(http://ddragon.leagueoflegends.com/cdn/img/champion/centered/${heroArr[id].id}_0.jpg)`;
    heroBlock.style.backgroundSize = "cover";

    const heroName = document.createElement("h2");
    heroName.className = "hero-name";
    heroName.textContent = `${heroArr[id].name}`;
    heroBlock.append(heroName);

    const lvlText = document.createElement("h3");
    lvlText.className = "hero-title";
    lvlText.textContent = "Характеристики";
    heroBlock.append(lvlText);

    let attrName = 0;
    for (const prop in heroArr[id].stats) {
      if (prop === "lvl" || heroArr[id].stats[prop][0] === 0) continue;
      const stats = document.createElement("p");
      stats.textContent = `${prop.toUpperCase()}: ${heroArr[id].stats[prop][0]}`;
      stats.title = attrList[attrName];
      attrName++;

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
  function createSkillLayer() {
    const skillWrapper = document.createElement("div");
    skillWrapper.className = "hero_block-skill-wrapper";

    const skillIcon = document.createElement("img");
    skillIcon.className = "skill-icon";
    skillIcon.id = id;
    skillIcon.src = `http://ddragon.leagueoflegends.com/cdn/13.8.1/img/passive/${heroArr[id].id.split(" ").join("")}_Passive.png`;
    skillWrapper.append(skillIcon);

    let skillArr = ["Q", "W", "E", "R"];

    for (let i = 0; i < skillArr.length; i++) {
      const skillIcon = document.createElement("img");
      skillIcon.className = "skill-icon";
      skillIcon.id = id;
      skillIcon.src = `http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${heroArr[id].id.split(" ").join("")}${skillArr[i]}.png`;
      skillWrapper.append(skillIcon);
    }

    heroBlock.append(skillWrapper);
  }
});

// builds block
buildsBtn.addEventListener("click", () => {
  showModal(buildsModal);
  if (buildsBlock.hasChildNodes()) return;
  createReturnBtn(buildsBlock, buildsModal);
});

// statistics block
statisticsBtn.addEventListener("click", () => {
  showModal(statisticsModal);
  if (statisticsBlock.hasChildNodes()) return;
  createReturnBtn(statisticsBlock, statisticsModal);

  // Создаем таблички по количеству уровней
  for (let i = 0; i < 15; i++) {
    createStatTable(i);
  }
  // Табличка всех характеристик героев по уровню
  function createStatTable(lvl) {
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
        tdE += `<td>${adcArr[i].stats[stat][lvl]}</td>`; // уровень героя
      }

      trE += `<tr>${tdE}</tr>`;
    }

    let thE = "<th>ADC</th>"; // 1 заголовок
    for (let i = 0; i < adcArr.length; i++) {
      // заголовки
      thE += `<th>${adcArr[i].id}</th>`;
    }

    const caption = document.createElement("caption");
    caption.textContent = `${lvl + 1}`;

    const theadE = `<thead><tr>${thE}</tr></thead>`;
    const tbodyE = `<tbody>${trE}</tbody>`;

    tableE.className = "table";
    tableE.innerHTML = theadE + tbodyE;
    tableE.childNodes[2].remove();
    tableE.append(caption);
    tableWrapper.append(tableE);
    statisticsBlock.append(tableWrapper);

    // Цветные ячейки в зависимости от числа
    const rows = tableE.rows;
    const numCols = rows[0].cells.length - 1;

    for (let i = 1; i < rows.length; i++) {
      let sum = 0;
      let numArr = [];
      const cells = rows[i].cells;
      for (let j = 1; j < cells.length; j++) {
        sum += Number(cells[j].innerHTML);
        numArr.push(Number(cells[j].innerHTML));
      }

      const avg = sum / numCols;
      const min = Math.min.apply(null, numArr);
      const max = Math.max.apply(null, numArr);

      for (let j = 1; j < cells.length; j++) {
        const cell = cells[j];
        const value = Number(cell.innerHTML);
        if (value === max) {
          cell.style.color = "GreenYellow";
          cell.style.backgroundColor = "green";
        } else if (value === min) {
          cell.style.color = "red";
          cell.style.backgroundColor = "Maroon";
        } else if (value < avg) {
          cell.style.color = "orange";
        } else if (value > avg) {
          cell.style.color = "YellowGreen";
        }
      }
    }
  }
});

// storage block
storageBtn.addEventListener("click", () => {
  showModal(storageModal);
  if (storageBlock.hasChildNodes()) return;
  createReturnBtn(storageBlock, storageModal);
});

// quest block
questBtn.addEventListener("click", () => {
  showModal(questModal);
  if (questBlock.hasChildNodes()) return;
  createReturnBtn(questBlock, questModal);
  createStatTable();
  createSummonersList();

  function createSummonersList() {
    for (let i = 0; i < summonerArr.length; i++) {
      const summonerTitleWrapper = document.createElement("div");
      summonerTitleWrapper.className = "summoner_title-wrapper";

      const summonerIcon = document.createElement("img");
      summonerIcon.className = "summoner-icon";
      summonerIcon.title = summonerArr[i].name;
      summonerIcon.src = `http://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${summonerArr[i].image.full}`;

      const summonerName = document.createElement("p");

      summonerName.className = "summoners_title-name";
      summonerName.textContent = `${summonerArr[i].name}`;

      const summonerDescription = document.createElement("p");
      summonerDescription.textContent = `${summonerArr[i].description}`;

      const summonerCooldown = document.createElement("p");
      summonerCooldown.textContent = `Кд: ${summonerArr[i].cooldown}s (${getDecimalTime(summonerArr[i].cooldown)})`;

      summonerTitleWrapper.append(summonerIcon);
      summonerTitleWrapper.append(summonerName);
      summonerTitleWrapper.append(summonerCooldown);
      summonerTitleWrapper.append(summonerDescription);

      questBlock.append(summonerTitleWrapper);
    }
  }
  function createStatTable() {
    const tableE = document.createElement("table");

    const conclusions = document.createElement("p");
    conclusions.textContent = "Диапазон кд заклинаний от 1:30(1:17) до 2:30(2:08).";
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
    tableWrapper.append(conclusions);
    questBlock.append(tableWrapper);
  }
});

// rune block
runeBtn.addEventListener("click", () => {
  showModal(runeModal);
  if (runeBlock.hasChildNodes()) return;
  createReturnBtn(runeBlock, runeModal);

  createRunesList("keystone");
  createRunesList("domination");
  createRunesList("resolve");
  createRunesList("inspiration");

  function createRunesList(runeTypeName) {
    const runeTitleWrapper = document.createElement("div");
    runeTitleWrapper.className = "rune_title-wrapper";

    for (let i = 0; i < runesArr.length; i++) {
      if (runesArr[i].typeName !== runeTypeName) continue;

      const runeItem = document.createElement("div");
      runeItem.className = "rune-item";

      const runeIcon = document.createElement("img");
      runeIcon.className = "rune-icon";
      runeIcon.title = runesArr[i].name;
      runeIcon.src = `images/runes/${runesArr[i].typeName}/${runesArr[i].icon}`;

      const runeName = document.createElement("p");
      runeName.className = "rune_title-name";
      runeName.textContent = `${runesArr[i].name}`;

      const runeDescription = document.createElement("p");
      runeDescription.textContent = `${runesArr[i].description}`;

      const runeCooldown = document.createElement("p");
      runeCooldown.textContent = `Кд: ${runesArr[i].cooldown}s (${getDecimalTime(runesArr[i].cooldown)})`;
      runeItem.append(runeIcon);
      runeItem.append(runeName);
      runeTitleWrapper.append(runeItem);
      // runeTitleWrapper.append(summonerCooldown);
      // runeTitleWrapper.append(summonerDescription);

      runeBlock.append(runeTitleWrapper);
    }
  }
});
