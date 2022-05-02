const numberOfcategories = document.querySelectorAll(".item");

console.log(`Number of categories:  ${numberOfcategories.length}`);

const count = document.querySelectorAll(".item");

count.forEach((ele) => {
  console.log("");
  console.log(`Category: ${ele.children[0].textContent}`);
  console.log(`Elements: ${ele.children[1].children.length}`);
});
