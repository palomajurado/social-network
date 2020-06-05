import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default () => {
  const view = views.logIn();
  const email = view.querySelector("#email");
  const password = view.querySelector("#password");

  const authEmailWithPassword = () => {
    models.logInModel
      .authEmailPassword(email.value, password.value)
      .then(() => (window.location.hash = "#/profile"))
      .catch((error) => {
        console.log(error);
        let message = "";
        if (error.code === "auth/invalid-email") message = "Correo inválido";
        else if (error.code === "auth/user-not-found")
          message = "Usuario no existe";
        else if (error.code === "auth/wrong-password")
          message = "Contraseña incorrecta";
        else if (error.code === "auth/too-many-requests")
          message = "Hizo muchos intentos, refresque la página";
        const signInSpan = view.querySelector("#signInSpan");
        signInSpan.innerHTML = message;
        setTimeout(
          () => (signInSpan.innerHTML = "También puedes logearte con..."),
          2000
        );
      });
  };
  const btnLogIn = view.querySelector("#logIn");
  btnLogIn.addEventListener("click", authEmailWithPassword);

  const gmailButton = view.querySelector("#gmail");
  gmailButton.addEventListener("click", () => {
    models.logInModel
      .authGmail()
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        window.location.hash = "#/profile";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  });

  const facebookButton = view.querySelector("#facebook");
  facebookButton.addEventListener("click", () => {
    models.logInModel
      .authFacebook()
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        window.location.hash = "#/profile";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  });

  //--------------------------------------- Eye de password
  const eye = view.querySelector("#eye");
  eye.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (password.type === "password") password.type = "text";
    else password.type = "password";
  });

  return view;
};
