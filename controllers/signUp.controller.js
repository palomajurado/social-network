/* eslint-disable no-console */
/* eslint-disable quotes */
// exporta un modulo( y hace que se pueda importar sin llaves y con el nombre que uno quiera )
import signUpView from "../view/signUp.view.js";
import { signUpEmailPassword } from "../model/signUp.model.js";

export default () => {
  const view = signUpView();
  const signUpBtn = view.querySelector(".SignUp");

  signUpBtn.addEventListener("click", () => {
    const email = view.querySelector("#email").value;
    const password = view.querySelector("#password").value;
    signUpEmailPassword(email, password)
      .then(() => console.log("Funciono"))
      .catch(() => console.log("no funciono"));
  });

  return view;
};
