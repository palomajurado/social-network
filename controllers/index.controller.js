import user from "../controllers/user.controller.js";
import notFound from "../controllers/404.controller.js";
import logInController from "../controllers/logIn.controller.js";
import signUpController from "../controllers/signUp.controller.js";
import profileController from "../controllers/profile.controller.js";
import publicationController from "../controllers/publication.controller.js";
import recoveryPassController from "../controllers/recoveryPass.controller.js";

export const controllers = {
  user,
  notFound,
  logInController,
  signUpController,
  profileController,
  publicationController,
  recoveryPassController,
};
