function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let inputNumber = document.querySelector("input");
const boxeDiv = document.querySelector("#boxes");
//
// Create_button
const createElemButton = document.querySelector("[data-create]");
function createBoxes() {
  let iPx = 30;
  for (let i = 0; i < inputNumber.value; i += 1) {
    boxeDiv.insertAdjacentHTML(
      "beforeend",
      `<div style="width:${iPx}px;height:${iPx}px;border:0.5px solid #000; background-color:${getRandomHexColor()}; margin:10px "></div>`
    );
    iPx += 10;
  }
}
createElemButton.addEventListener("click", createBoxes);
//
// Destroy_button
const dectrElemButton = document.querySelector("[data-destroy]");
function dectrBoxes() {
  inputNumber.value = "";
  boxeDiv.innerHTML = "";
}
dectrElemButton.addEventListener("click", dectrBoxes);
