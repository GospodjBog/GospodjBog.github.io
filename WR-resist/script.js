const tableE = document.createElement("table");

const numberResistInput = document.getElementById("number");
const stepResistInput = document.getElementById("step");
const damageInput = document.getElementById("damage");
const healthInput = document.getElementById("health");
const attackNameInput = document.getElementById("attackName");
const defenseNameInput = document.getElementById("defenseName");
const resultBtn = document.getElementById("resultBtn");
const resultDiv = document.querySelector(".result");
const calcDiv = document.querySelector(".calculations");
const bodyE = document.body;

function calculateResist() {
  let multiplier;
  let reducer;
  let resistMultiplier;
  let reflect;
  let damageDeal;
  let numberOfHits;

  const COEF = 100;
  let resistAmount;

  function createResistArray(number, step) {
    if (step < 0) return;

    let resistArray = [];
    for (let i = number; i >= 0; ) {
      resistArray.push(i);
      if (step === 0) break;
      i = i - step;
    }
    return resistArray;
  }

  resultBtn.addEventListener("click", () => {
    resistAmount = createResistArray(
      +numberResistInput.value,
      +stepResistInput.value
    );
    // таблица
    let tdE = "";

    for (let i = 0; i < resistAmount.length; i++) {
      multiplier = COEF / (COEF + resistAmount[i]);
      reducer = COEF * multiplier - COEF;
      resistMultiplier = COEF / reducer;
      reflect = +damageInput.value / resistMultiplier;
      damageDeal = +damageInput.value + reflect;
      numberOfHits = Math.ceil(healthInput.value / damageDeal);
      tdE += `<tr><td>${multiplier.toFixed(2)}</td><td>${
        resistAmount[i]
      }</td><td>${reducer.toFixed(2)}</td><td>${
        damageInput.value
      }</td><td>${reflect.toFixed(2)}</td><td>${damageDeal.toFixed(
        2
      )}</td><td>${healthInput.value}</td><td>${numberOfHits}</td></tr>`;
    }

    const theadE =
      "<thead><tr><th>множ</th><th>сопр</th><th>%защиты</th><th>нач. урон</th><th>отраж</th><th>нанос</th><th>жизни</th><th>ударов</th></tr></thead>";
    const tbodyE = `<tbody>${tdE}</tbody>`;

    tableE.className = "table";
    tableE.innerHTML = theadE + tbodyE;

    bodyE.append(tableE);

    //   строка
    const conclusion = document.createElement("p");
    conclusion.textContent = `${attackNameInput.value} против ${defenseNameInput.value}. Атаки нападающего наносят ${damageInput.value} урона, у жертвы ${healthInput.value} жизней. Нападавший убивает жертву за ${numberOfHits} ударов`;
    resultDiv.append(conclusion);
  });
}
calculateResist();
