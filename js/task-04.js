const spanValue = document.querySelector("#value");
let counterValue = 0;
//
//decrement:
const buttonDecrement = document.querySelector('[data-action="decrement"]');

const handleClicDown = () => {
  spanValue.textContent = counterValue -= 1;
};
buttonDecrement.addEventListener("click", handleClicDown);
//
//increment:
const buttonIncrement = document.querySelector('[data-action="increment"]');

const handleClickUp = () => {
  spanValue.textContent = counterValue += 1;
};
buttonIncrement.addEventListener("click", handleClickUp);

//console.log(counterValue);
//console.log(spanText);
