/* eslint-disable import/no-named-as-default-member */
/* eslint-disable quotes */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import { views } from "../view/index.js";
import { validateEmail } from "../utils/validator.js";
import {
  authGmail,
  authEmailPassword,
  authFacebook,
} from "../model/logIn.model.js";

export default () => {
  const view = views.logIn();
  const authEmailWithPassword = () => {
    const email = view.querySelector("#email").value;
    const password = view.querySelector("#password").value;
    const correctEmail = validateEmail(email);

    if (!correctEmail) {
      const logInForm = view.querySelector("#logInForm");
      logInForm.outerHTML += `<span class="signIn">Email mal escrito</span>`;
      return;
    }
    authEmailPassword(email, password)
      .then(() => {
        window.location.hash = "#/profile";
      })
      .catch((error) => {
        let message = "";
        if (error.code === "auth/invalid-email") {
          message = "Contraseña o correo inválido";
        } else if (error.code === "auth/user-not-found") {
          message = "usario no extiste";
        }
        const logInForm = view.querySelector("#logInForm");
        logInForm.outerHTML += `<span class="signIn">${message}</span>`;
      });
  };

  const btnLogIn = view.querySelector("#logIn");
  btnLogIn.addEventListener("click", authEmailWithPassword);

  const gmailButton = view.querySelector("#gmail");
  gmailButton.addEventListener("click", authGmail);

  const facebookButton = view.querySelector("#facebook");
  facebookButton.addEventListener("click", authFacebook);
  return view;
};
