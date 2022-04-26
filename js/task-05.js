const inputEl = document.querySelector("#name-input");

const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("keypress", (event) => {
  if (outputEl.innerHTML === "Anonymous") {
    outputEl.innerHTML = "";
  }
  outputEl.innerHTML += event.key;
});

inputEl.addEventListener("keydown", (event) => {
  if (event.code === "Backspace" || event.code === "Delete") {
    outputEl.innerHTML = "Anonymous";
  }
});
