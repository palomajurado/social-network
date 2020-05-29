import { changeView } from "./router.js";

const init = () => {
  changeView(window.location.hash);
  window.addEventListener("hashchange", () => {
    changeView(window.location.hash);
  });
};

window.addEventListener("load", init);

// esa funcion lo que hace es que cuando carga tu pagina por primer vez llama a la funcion init, dentro de la funcion init se ejecuta el router
// y se le pasa el cambio de hash cada vez que pasa
