import { views } from "../view/index.js";
import { models } from "../model/index.model.js";
import { controllers } from "../controllers/index.controller.js";

export default () => {
  // importamos la vista de profile, capturamos eventos como el logout
  let view = views.profile();
  const logOut = view.querySelector(".logOut");

  // llamamos al metodo de firebase de auth.current user
  const user = models.profileModel.getCurrentNameUser();
  const shownName = view.querySelector("#shownName");
  const userPhoto = view.querySelector("#userPhoto");
  shownName.innerHTML = user.displayName; // mostramos el nombre del usuario debajo de la foto de perfil
  userPhoto.src = user.photoURL; // mostramos la foto del usuario

  logOut.addEventListener("click", () =>
    models.profileModel.signOut().then(() => (window.location.hash = "#/logIn"))
  );
  // profile es un componente padre y publications el componente hijo
  view = controllers.publicationController(view); // pinta las publicaciones en el navegador, SI LE QUITO ESTO no se pintan las publicaciones
  //por que el router se encarga tan solo de cambiar de pagina NO de pintar las interfaces en el navegador
  return view;
};
