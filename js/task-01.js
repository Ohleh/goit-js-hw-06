const numberOfcategories = document.querySelectorAll(".item");
//console.log("Number of categories:", numberOfcat.length);
console.log(`Number of categories:  ${numberOfcategories.length}`);

const findTitles = document.querySelectorAll("h2");
//console.log(`Category: ${findTitles[0].textContent}`);
const itemTitleAnimals = findTitles[0].textContent;
//console.log(`Category: ${findTitles[1].textContent}`);
const itemTitleProducts = findTitles[1].textContent;
//console.log(`Category: ${findTitles[2].textContent}`);
const itemTitleTechnologies = findTitles[2].textContent;

//const categories = document.querySelector("#categories");
const firstCatTitleLi = categories.firstElementChild;
//console.log(firstCatTitleLi.children);

const firstCat = firstCatTitleLi.children[1]; // обрали ul, li-шок. [0] це h2.

const firstCatText = firstCatTitleLi.children[0];
//  тайтл через Nodes:
//console.log(firstCatText.childNodes[0]);
// тайтл через textContent:
//console.log(firstCatText.firstChild.textContent);

//console.log(firstCat.children.length);
const itemNumberAnimals = firstCat.children.length;

const secondCat = firstCatTitleLi.nextElementSibling.children[1];
//console.log(secondCat.children.length);
const itemNumberProducts = secondCat.children.length;

const thirdCat =
  firstCatTitleLi.nextElementSibling.nextElementSibling.children[1];
//console.log(thirdCat.children.length);
const itemNumberTech = thirdCat.children.length;

const masTitles = [itemTitleAnimals, itemTitleProducts, itemTitleTechnologies];
//console.log(masTitles);
const masNumbers = [itemNumberAnimals, itemNumberProducts, itemNumberTech];
//console.log(masNumbers);

for (let i = 0; i < numberOfcategories.length; i += 1) {
  console.log("");
  console.log(`Category: ${masTitles[i]}`);
  console.log(`Elements: ${masNumbers[i]}`);
}

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
