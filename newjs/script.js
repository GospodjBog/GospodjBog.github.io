// const h1 = document.querySelector("h1");
// const arrayH = [];
// const input = document.querySelector("input");
// const btnSet = document.querySelector("#btnSet");
// const btnWrite = document.querySelector("#btnWrite");

// // h1.innerText = `Вас зовут: ${prompt("Как вас зовут?")}`;

// // btnSet.addEventListener("click", () => {
// //   arrayH.push(input.value);
// // });
// // btnWrite.addEventListener("click", () => {
// //   const newDiv = document.createElement("div");
// //   newDiv.innerText = arrayH.join(" ");
// //   document.body.appendChild(newDiv);
// // });

// let confirmS;

// btnSet.addEventListener("click", () => {
//   confirmS = confirm("do u wanna create h1?");

//   if (confirmS == true) {
//     let h2 = document.createElement("h2");
//     h2.innerText = input.value;
//     document.body.appendChild(h2);
//     console.log(confirmS);
//   } else if (confirmS == false) {
//     console.log(confirmS);
//   }
// });
// btnWrite.addEventListener("click", () => {

// });
// btnSet.addEventListener("click", () => {

// });
const inpSet = document.querySelector("#inpSet");
const inpWrite = document.querySelector("#inpWrite");
const inpDel = document.querySelector("#inpDel");
const btnDel = document.querySelector("#btnDel");
const btnWrite = document.querySelector("#btnWrite");
const colorSelect = document.querySelector("#colorSelect");
const idDelSelect = document.querySelector("#idDelSelect");

// let btnRemove = document.querySelector(".btn-remove");
// let idSelect;
let newEl;
let i = 0;
// let btnDiv;

btnWrite.addEventListener("click", () => {
  i++;
  newEl = document.createElement(inpSet.value);

  newEl.id = `${i}`;
  //   newEl.id = `${inpSet.value} ${inpWrite.value}`;
  newEl.className = colorSelect.value;
  newEl.innerText = `${inpWrite.value} id=${i}`;

  //   btnDiv = document.createElement("button");
  //   btnDiv.className = "btn-remove";
  //   newEl.append(btnDiv);

  //   idSelect = document.createElement("option");
  //   idSelect.innerText = `${inpSet.value} ${inpWrite.value}`;
  //   idSelect.value = `${inpSet.value} ${inpWrite.value}`;
  //   idDelSelect.append(idSelect);

  document.body.appendChild(newEl);
});

btnDel.addEventListener("click", () => {
  let del = document.getElementById(inpDel.value);
  //   let del = document.getElementById(`${idSelect.value}`);
  //   idSelect.remove();
  del.remove();
  i--;
});

// btnRemove.addEventListener("click", () => {
//   let del = document.getElementById(`${i}`);
//   console.log(btnRemove);
//   del.remove();
// });
