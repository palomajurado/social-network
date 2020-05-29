// el index.js de la caprte views sirve para importar todas las vistas y las llamamos views.profile o views.logIn
import { views } from "../view/index.js";
import loginOut from "../model/profile.model.js";

export default () => {
  const view = views.profile(); // llamando la views.pofile
  const postViews = views.publications();
  const storiesPublication = view.querySelector(".stories");
  storiesPublication.appendChild(postViews);

  const logOut = view.querySelector(".logOut");
  logOut.addEventListener("click", loginOut);

  return view;
};
