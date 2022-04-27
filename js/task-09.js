function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const bodyHtml = document.querySelector("body");
const chColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

chColorBtn.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  let changeColor = getRandomHexColor();
  spanColor.textContent = changeColor;
  bodyHtml.style.backgroundColor = changeColor;
  console.log(changeColor);
}
