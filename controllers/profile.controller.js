import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default () => {
  const view = views.profile();
  const postViews = views.publications();
  const storiesPublication = view.querySelector(".stories");
  const userDisplayName = view.querySelector(".displayUserName");
  const user = models.profileModel.getCurrentNameUser();
  if (user) userDisplayName.innerHTML += ` ${user.displayName}!`;

  const logOut = view.querySelector(".logOut");
  logOut.addEventListener("click", () =>
    models.profileModel.signOut().then(() => (window.location.hash = "#/logIn"))
  );
  return view;
};
