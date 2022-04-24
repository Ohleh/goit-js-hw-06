const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
console.log(listIngredients);

const IngItemFirst = document.createElement("li");
IngItemFirst.textContent = ingredients[0];
IngItemFirst.classList.add("item");
//console.log(IngItemFirst);

const IngItemSecond = document.createElement("li");
IngItemSecond.textContent = ingredients[1];
IngItemSecond.classList.add("item");

const IngItemThird = document.createElement("li");
IngItemThird.textContent = ingredients[2];
IngItemThird.classList.add("item");

const IngItemFourth = document.createElement("li");
IngItemFourth.textContent = ingredients[3];
IngItemFourth.classList.add("item");

const IngItemFifth = document.createElement("li");
IngItemFifth.textContent = ingredients[4];
IngItemFifth.classList.add("item");

const IngItemsixth = document.createElement("li");
IngItemsixth.textContent = ingredients[5];
IngItemsixth.classList.add("item");

listIngredients.append(
  IngItemFirst,
  IngItemSecond,
  IngItemThird,
  IngItemFourth,
  IngItemFifth,
  IngItemsixth
);
