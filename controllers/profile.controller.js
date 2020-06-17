import { views } from "../view/index.js";
import { models } from "../model/index.model.js";
import { controllers } from "../controllers/index.controller.js";

export default () => {
  let view = views.profile();
  const logOut = view.querySelector(".logOut");
  const shownName = view.querySelector("#shownName");
  const userPhoto = view.querySelector("#userPhoto");
  const background = view.querySelector("#background");
  const user = models.profileModel.getCurrentNameUser();

  // QuerySnapshot es un obj de rspta de firebase, trae datos de ese user.uid
  if (user) {
    shownName.innerHTML = user.displayName;
    if (user.photoURL) userPhoto.src = user.photoURL;
    models.user
      .getBackgroundUser(user.uid)
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          const settings = querySnapshot.docs[0].data();
          background.src = settings.backgroundImg;
        }
      })
      .catch((err) => console.error(err));
  }

  logOut.addEventListener("click", () =>
    models.profileModel.signOut().then(() => (window.location.hash = "#/logIn"))
  );

  view = controllers.publicationController(view);
  return view;
};
