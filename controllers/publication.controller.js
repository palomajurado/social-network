import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default (viewProfile) => {
  const btnShare = viewProfile.querySelector("#btnShare");

  btnShare.addEventListener("click", () => {
    const textAreaComentary = viewProfile.querySelector("#textAreaComentary")
      .value;
    models.publicationsModel
      .createNewPublication({
        content: textAreaComentary,
        userId: "IdLoginUserTODO",
        punctuation: 0,
      })
      .then((data) => {
        console.log(data);
        viewProfile.querySelector("#textAreaComentary").value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const stories = viewProfile.querySelector(".stories");
  const dataPublications = models.publicationsModel.getPublications();
  dataPublications.onSnapshot((collectionPost) => {
    stories.innerHTML = "";
    collectionPost.forEach((post) => {
      const view = views.publications(post.data());
      stories.appendChild(view);
      console.log(post.data());
    });
  });
  return viewProfile;
};
