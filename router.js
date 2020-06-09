import { auth } from "./firebase.js";
import { controllers } from "./controllers/index.controller.js";

const changeView = (path) => {
  const container = document.querySelector("#container");

  let next;
  switch (path) {
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

  // Midleware
  const publicAllowedRoutes = [
    "#/",
    "#/signUp",
    "#/recovery-pass",
    "#/notFound",
  ];
  auth.onAuthStateChanged((user) => {
    const allowedRoute = publicAllowedRoutes.find((route) => route === path);
    container.innerHTML = "";
    if (user) {
      container.appendChild(next());
    } else if (allowedRoute) {
      container.appendChild(next());
    } else {
      window.location.hash = "#/";
      container.appendChild(next());
    }
  });
};

export { changeView };
