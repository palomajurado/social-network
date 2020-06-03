import { auth } from "./firebase.js";
import { controllers } from "./controllers/index.controller.js";

const changeView = (route) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  const routesWithoutAuth = ["#/login", "#/register"]; // qu rutas no necesitan autorizacion las definimos aqui

  let next; // guardaremos en un let a los controladores para ejecutarlos despues
  switch (route) {
    case "":
    case "#/logIn":
    case "#/": {
      next = controllers.logInController;
      break;
    }
    case "#/signUp": {
      next = controllers.signUpController;
      break;
    }
    case "#/profile": {
      next = controllers.profileController;
      break;
    }
    case "#/recovery-pass": {
      next = controllers.recoveryPassController;
      break;
    }
    case "#/user": {
      next = controllers.user;
      break;
    }
    default: {
      next = controllers.notFound;
    }
  }

  // Midleware: Es una capa intermedia
  auth.onAuthStateChanged((user) => {
    const noAuthNedeed = routesWithoutAuth.find((route) => route === route);
    if (user) {
      // if (noAuthNedeed) window.location.hash = "#/logIn";
      container.appendChild(next());
    } else if (noAuthNedeed) {
      container.appendChild(next());
    } else {
      window.location.hash = "#/logIn";
    }
  });
};

export { changeView };
