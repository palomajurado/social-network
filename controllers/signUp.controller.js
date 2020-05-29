import { views } from "../view/index.js";
import { signUpEmailPassword } from "../model/signUp.model.js";
import { authGmail, authFacebook } from "../model/logIn.model.js";

export default () => {
  const view = views.signUp();
  const signUpBtn = view.querySelector(".SignUp-button");

  signUpBtn.addEventListener("click", () => {
    const email = view.querySelector("#email").value;
    const password = view.querySelector("#password").value;

    signUpEmailPassword(email, password)
      .then(() => {
        // const formContainer = view.querySelector(".container");
        // formContainer.outerHTML += `<span class="correctSignUp">Registro exitoso</span>`;
        window.location.hash = "#/";
      })
      .catch(() => alert("Ingrese un correo o contraseña correctos"));
  });

  const gmailButton = view.querySelector("#gmail");
  gmailButton.addEventListener("click", authGmail);

  const facebookButton = view.querySelector("#facebook");
  facebookButton.addEventListener("click", authFacebook);

  return view;
};
