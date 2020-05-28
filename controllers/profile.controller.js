/* eslint-disable quotes */
import profileView from "../view/profile.view.js";
import publicationsViews from "../view/publications.view.js";

export default () => {
  const view = profileView();
  const postViews = publicationsViews();
  const storiesPublication = view.querySelector(".stories");
  storiesPublication.appendChild(postViews);

  return view;
};
