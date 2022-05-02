const form = {
  loginForm: document.querySelector(".login-form"),
};

const formOk = {};

form.loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please, fill empty fields!");
    return;
  }
  // console.log(`Login: ${email.value}, Password: ${password.value}`);
  formOk.login = email.value;
  formOk.password = password.value;
  console.log(formOk);
  event.currentTarget.reset();
}
