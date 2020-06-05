import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default (viewProfile) => {
  const user = models.profileModel.getCurrentNameUser();
  const btnShare = viewProfile.querySelector("#btnShare");
  const textAreaComentary = viewProfile.querySelector("#textAreaComentary");

  btnShare.addEventListener("click", () => {
    models.publicationsModel
      .createNewPublication({
        content: textAreaComentary.value,
        userId: user.uid, // ID unico de user
        punctuation: 0,
      })
      .then(() => (viewProfile.querySelector("#textAreaComentary").value = "")) // limpia textarea
      .catch((err) => console.log(err));
  });

  const stories = viewProfile.querySelector(".stories");
  const dataPublications = models.publicationsModel.getPublications();

  // snapchot: cuando cambie algo quiero hacer lo que este dentro de esta funcion
  dataPublications.onSnapshot((collectionPost) => {
    stories.innerHTML = ""; // limpio la lista de publicaciones que ya se muestran en el html
    collectionPost.forEach((post) => {
      // y recorro las nuevas publicaciones uqe ya han llegado
      const view = views.publications(post.data()); // por cada nueva publicacion se la paso el view publications
      stories.appendChild(view); // le aniade las publications al view profile
    });
  });
  return viewProfile; // el view profile que empezo sin publications ya contien publications
};
