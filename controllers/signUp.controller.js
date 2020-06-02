import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default () => {
  const view = views.signUp();
  const signUpBtn = view.querySelector("#btnSignUp");
  const password = view.querySelector("#password");
  const confirmPassword = view.querySelector("#confirmPassword");
  const messageResult = view.querySelector("#messageResult");

  confirmPassword.addEventListener("keyup", (e) => {
    e.preventDefault();
    const buttonRemoveClass = view.querySelector(".loginButton");
    if (password.value !== confirmPassword.value) {
      messageResult.innerHTML = "Las contraseñas no coinciden";
      buttonRemoveClass.classList.add("disabled-button");
    } else {
      messageResult.innerHTML = "También puedes registrarte con... ";
      buttonRemoveClass.classList.remove("disabled-button");
    }
  });
  signUpBtn.addEventListener("click", () => {
    const email = view.querySelector("#email").value;
    const name = view.querySelector("#name").value;
    const passwordAuth = view.querySelector(".passwordAuth").value;

    let messageElm = view.querySelector("#messageResult");
    models.signUpModel
      .signUpEmailPassword(email, passwordAuth)
      .then(() => models.signUpModel.updateDisplayName(name))
      .then(() => {
        messageElm.innerHTML = "Registro exitoso: redireccionando";
        setTimeout(() => (window.location.hash = "#/"), 1000);
      })
      .catch((error) => {
        let message = "";
        if (error.code === "auth/invalid-email")
          message = "Ingrese un correo válido";
        else if (error.code === "auth/weak-password") {
          message = "Contraseña débil, mínimo 6 carácteres";
        }
        setTimeout(() => (messageElm.innerHTML = message), 1000);
      });
  });

  const gmailButton = view.querySelector("#gmail");
  gmailButton.addEventListener("click", models.logInModel.authGmail);

  const facebookButton = view.querySelector("#facebook");
  facebookButton.addEventListener("click", models.logInModel.authFacebook);

  return view;
};
