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

ingredients.forEach((number) => {
  const IngItemFirstNew = document.createElement("li");
  IngItemFirstNew.textContent = number;
  IngItemFirstNew.classList.add("item");
  listIngredients.append(IngItemFirstNew);
});
