/* eslint-disable import/no-named-as-default-member */
/* eslint-disable quotes */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import logInModel from "../model/logIn.model.js";
import logInView from "../view/logIn.view.js";
import validateEmail from "../utils/validator.js";
import {
  authGmail,
  authEmailPassword,
  authFacebook,
} from "../model/logIn.model.js";

export const authEmailWithPassword = () => {
  const email = logInView.querySelector("#email").value;
  const password = logInView.querySelector("#password").value;
  const correctEmail = validateEmail(email);
  if (!correctEmail) {
    return;
  }
  logInModel.authEmailPassword(email, password);
};
const btnLogIn = logInView.querySelector("#logIn");
btnLogIn.addEventListener("click", authEmailPassword);

const gmailButton = logInView.querySelector("#gmail");
gmailButton.addEventListener("click", authGmail);

const facebookButton = logInView.querySelector("#facebook");
facebookButton.addEventListener("click", authFacebook);
