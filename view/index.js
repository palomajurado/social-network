/* eslint-disable quotes */
import logIn from "./logIn.view.js";
import signUp from "./signUp.view.js";
import profile from "./profile.view.js";
import notFound from "./404.js";
import publications from "./publications.view.js";
import recoveryPass from "./recoveryPass.view.js";

// este index sirve para exportar todas las vistas cuando necesitemos manipular
// todas las vistas en un mismo archivo al llamar a la importacion
export const views = {
  logIn,
  signUp,
  profile,
  notFound,
  publications,
  recoveryPass,
};
