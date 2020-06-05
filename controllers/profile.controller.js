import { views } from "../view/index.js";
import { models } from "../model/index.model.js";
import { controllers } from "../controllers/index.controller.js";

export default () => {
  let view = views.profile();
  const logOut = view.querySelector(".logOut");

  const user = models.profileModel.getCurrentNameUser();
  const shownName = view.querySelector("#shownName");
  const userPhoto = view.querySelector("#userPhoto");
  const background = view.querySelector("#background");
  if (user) {
    shownName.innerHTML = user.displayName; // mostramos el nombre del usuario debajo de la foto de perfil
    if (user.photoURL) userPhoto.src = user.photoURL; // mostramos la foto del usuario

    models.user
      .getBackgroundUser(user.uid) // Aqui le paso el id de user y me devolvera un objeto con la config de ese user
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          let settings = querySnapshot.docs[0].data(); // devuelve la config
          background.src = settings.backgroundImg;
        }
      })
      .catch((err) => console.log(err));
  }

  logOut.addEventListener("click", () =>
    models.profileModel.signOut().then(() => (window.location.hash = "#/logIn"))
  );
  view = controllers.publicationController(view);
  return view;
};
