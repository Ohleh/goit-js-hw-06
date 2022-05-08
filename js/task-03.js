const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryJs = document.querySelector(".gallery");
console.log(galleryJs);
//
// 3 varik
//
const mass = [];
const imgages = images.map((imgage) => {
  const newGalery = `<li class="galleryListTaskTree"> <img src="${imgage.url}" alt="${imgage.alt}" width=700px> </li>`;
  mass.push(newGalery);
});
galleryJs.insertAdjacentHTML("beforeend", mass.join(""));
//
// 2 varik
//
// images.forEach((element) => {
//   galleryJs.insertAdjacentHTML(
//     "beforeend",
//     `<li class="galleryListTaskTree"> <img src="${element.url}" alt="${element.alt}" width = 700px>  </li>`
//   );
// });
//
// 1 varik
//
// for (const image of images) {
//   galleryJs.insertAdjacentHTML(
//     "beforeend",
//     `<li class="galleryListTaskTree"> <img src="${image.url}" alt="${image.alt}" width = 700px>  </li>`
//   );
// }

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
