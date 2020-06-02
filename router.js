// llamamos a los controller por que tienen las vistas y modelos en uno solo
import logInController from "./controllers/logIn.controller.js";
import signUpController from "./controllers/signUp.controller.js";
import profileController from "./controllers/profile.controller.js";
import publicationController from "./controllers/publication.controller.js"
import { views } from "./view/index.js";

const changeView = (route) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";

  switch (route) {
    case "":
    case "#/logIn":
    case "#/": {
      return container.appendChild(logInController());
    }
    case "#/signUp": {
      return container.appendChild(signUpController());
    }
    case "#/profile": {
      const profileViewDOM = profileController();
      const publicationProfileView = publicationController(profileViewDOM);
      return container.appendChild(publicationProfileView);
    }
    default: {
      return container.appendChild(views.notFound()); // ponerle un set interval
    }
  }
};

export { changeView };
