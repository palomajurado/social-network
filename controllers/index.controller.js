import notFound from "../controllers/404.controller.js";
import logInController from "../controllers/logIn.controller.js";
import signUpController from "../controllers/signUp.controller.js";
import profileController from "../controllers/profile.controller.js";
import recoveryPassController from "../controllers/recoveryPass.controller.js";

export const controllers = {
  notFound,
  logInController,
  signUpController,
  profileController,
  recoveryPassController,
};
