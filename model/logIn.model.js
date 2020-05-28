/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-undef */
import { auth } from "../firebase.js";

export const authEmailPassword = (email, password) => {
  auth // llamar la autenticacion , va enviar la contrasenia e email a firebase
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log({ result });
      window.location.hash = "#/profile";
    })
    .catch((error) => {
      let message = "";
      if (error.code === "auth/invalid-email") {
        message = "Contraseña o correo inválido";
      } else if (error.code === "auth/user-not-found") {
        message = "usario no extiste";
      }
      const logInForm = divElement.querySelector("#logInForm"); // estoy creando un elemento al finalizar el form para que se muestre el mensaje
      logInForm.outerHTML += `<span class="signIn">${message}</span>`;
    });
};

export const authGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
      window.location.hash = "#/profile";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });
};

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth
    .signInWithPopup(provider) //
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
      window.location.hash = "#/profile";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });
};
