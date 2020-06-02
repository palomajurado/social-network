import { auth } from "./firebase.js";
import { controllers } from "./controllers/index.controller.js";

const changeView = (route) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  const routesWithoutAuth = ["#/login", "#/register"];

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
      next = controllers.profileController();
      const profileViewDOM = next;
      const publicationProfileView = controllers.publicationController(
        profileViewDOM
      );
      return container.appendChild(publicationProfileView);
    }
    case "#/recovery-pass": {
      next = controllers.recoveryPassController;
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
