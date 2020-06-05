import { auth } from "./firebase.js";
import { controllers } from "./controllers/index.controller.js";

const changeView = (route) => {
  const container = document.querySelector("#container");
  const routesWithoutAuth = ["#/login", "#/register", "#/recovery-pass"];

  let next;
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

  // Midleware: Es una capa intermedia : falta asegurar!!
  auth.onAuthStateChanged((user) => {
    const noAuthNedeed = routesWithoutAuth.find((route) => route === route);
    container.innerHTML = "";
    if (user) {
      container.appendChild(next());
    } else if (noAuthNedeed) {
      container.appendChild(next());
    } else {
      window.location.hash = "#/logIn";
    }
  });
};

export { changeView };
