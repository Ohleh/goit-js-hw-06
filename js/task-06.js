const inputHtml = document.querySelector("#validation-input");

const inputLength = Number(inputHtml.getAttribute("data-length"));

inputHtml.addEventListener("blur", () => {
  inputHtml.classList.add("invalid");
  if (inputHtml.value.length === inputLength) {
    inputHtml.classList.remove("invalid");
    inputHtml.classList.add("valid");
  }
});
