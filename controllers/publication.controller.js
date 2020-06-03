import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

// tomamos la vista
export default (viewProfile) => {
  // le estamos pasando un div de la vsta profile
  const btnShare = viewProfile.querySelector("#btnShare");
  const user = models.profileModel.getCurrentNameUser();

  btnShare.addEventListener("click", () => {
    const textAreaComentary = viewProfile.querySelector("#textAreaComentary")
      .value;
    models.publicationsModel
      .createNewPublication({
        content: textAreaComentary,
        userId: user.uid, // este valor es el ID real de un usuario para identificarlos en firebase, y asignarle nombre a cada quien que comente
        punctuation: 0, //
      })
      .then(() => (viewProfile.querySelector("#textAreaComentary").value = "")) // limpia textarea
      .catch((err) => console.log(err));
  });

  const dataPublications = models.publicationsModel.getPublications();
  const stories = viewProfile.querySelector(".stories");
  // snapchot: cuando cambie algo quiero hacer lo que este dentro de esta funcion
  dataPublications.onSnapshot((collectionPost) => {
    // que es?
    stories.innerHTML = ""; // limpio la lista de publicaciones que ya se muestran en el html
    collectionPost.forEach((post) => {
      // y recorro las nuevas publicaciones uqe ya han llegado
      const view = views.publications(post.data()); // por cada nueva publicacion se la paso el view publications
      stories.appendChild(view); // le aniade las publications al view profile
    });
  });
  return viewProfile; // el view profile que empezo sin publications ya contien publications
};
