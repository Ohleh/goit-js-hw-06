const spanValue = document.querySelector("#value");
let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');

const buttonIncrement = document.querySelector('[data-action="increment"]');

const handleClicDown = () => {
  spanValue.textContent = counterValue -= 1;
};

const handleClickUp = () => {
  spanValue.textContent = counterValue += 1;
};

buttonDecrement.addEventListener("click", handleClicDown);

buttonIncrement.addEventListener("click", handleClickUp);

//console.log(counterValue);
//console.log(spanText);
