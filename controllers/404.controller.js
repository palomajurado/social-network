import { views } from "../view/index.js";

export default () => {
  const view = views.notFound();
  const redirectBtn = view.querySelector(".redirect");
  redirectBtn.addEventListener("click", () => (window.location.hash = "#/"));
  return view;
};
