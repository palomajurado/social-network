/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import logInController from "./controllers/logIn.controller.js";
import signUpController from "./controllers/signUp.controller.js";
import profileController from "./controllers/profile.controller.js";

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
      return container.appendChild(profileController());
    }
    default:
      break;
  }
  return true;
};

export { changeView };
