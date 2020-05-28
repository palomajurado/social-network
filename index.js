/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { changeView } from "./router.js";

const init = () => {
  changeView(window.location.hash);
  window.addEventListener("hashchange", () => {
    changeView(window.location.hash);
  });
};

window.addEventListener("load", init);
