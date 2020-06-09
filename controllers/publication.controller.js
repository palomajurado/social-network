import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default (viewProfile) => {
  const btnShare = viewProfile.querySelector("#btnShare");
  const imageViewer = viewProfile.querySelector("#addImg");
  const iconCamera = viewProfile.querySelector("#iconCamera");
  const displayImage = viewProfile.querySelector("#displayImage");
  const loadingPanel = viewProfile.querySelector("#idLoading");
  const messajePostEmpty = viewProfile.querySelector("#messajePostEmpty");
  const user = models.profileModel.getCurrentNameUser();

  btnShare.addEventListener("click", () => {
    const textAreaComentary = viewProfile.querySelector("#textAreaComentary")
      .value;
    const optionPublicPrivate = viewProfile.querySelector(
      "#optionPublicPrivate"
    ).value;

    loadingPanel.classList.remove("clsLoadingHide");

    if (imageViewer.files[0] === undefined) {
      models.publicationsModel
        .createNewPublication({
          userId: user.uid,
          content: textAreaComentary,
          image: null,
          privacyAction: optionPublicPrivate,
          punctuation: 0,
        })
        .then((data) => {
          loadingPanel.classList.add("clsLoadingHide");
          viewProfile.querySelector("#textAreaComentary").value = "";
          imageViewer.value = "";
          imageViewer.dispatchEvent(new Event("change"));
        })
        .catch((err) => loadingPanel.classList.add("clsLoadingHide"));
    } else {
      uploadImageUrl()
        .then((url) => {
          models.publicationsModel
            .createNewPublication({
              userId: user.uid,
              content: textAreaComentary,
              image: url,
              privacyAction: optionPublicPrivate,
              punctuation: 0,
            })
            .then((data) => {
              loadingPanel.classList.add("clsLoadingHide");
              viewProfile.querySelector("#textAreaComentary").value = "";
              imageViewer.value = "";
              imageViewer.dispatchEvent(new Event("change"));
            });
        })
        .catch((err) => loadingPanel.classList.add("clsLoadingHide"));
    }
  });

  const stories = viewProfile.querySelector(".stories");

  const dataPublications = models.publicationsModel.getPublications();

  loadingPanel.classList.remove("clsLoadingHide");

  // actualiza los contenidos
  dataPublications.onSnapshot((collectionPost) => {
    loadingPanel.classList.add("clsLoadingHide");
    stories.innerHTML = "";
    collectionPost.forEach((post) => {
      const postObj = post.data();
      if (postObj.userId) {
        postObj.id = post.id;
        const view = views.publications(postObj);
        const heart = view.querySelector("#heart");
        heart.addEventListener("click", (e) => {
          e.preventDefault();
          models.publicationsModel.incrementPunctuation(
            e.currentTarget.dataset.publication
          );
        });
        stories.appendChild(view);
      }
    });
  });

  imageViewer.addEventListener("change", () => {
    if (imageViewer.files && imageViewer.files[0]) {
      displayImage.classList.remove("clsDisplayImage");
      const reader = new FileReader();
      reader.onload = (e) => {
        const idViewProfile = viewProfile.querySelector("#loadedImage");
        idViewProfile.setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(imageViewer.files[0]);
    } else displayImage.classList.add("clsDisplayImage");
  });

  const uploadImageUrl = () => {
    return new Promise((resolve, reject) => {
      const file = viewProfile.querySelector("#addImg").files[0];
      const name = +new Date() + "-" + file.name;
      const metadata = {
        contentType: file.type,
      };
      const imageAdd = models.publicationsModel
        .getStorageRef()
        .child(name)
        .put(file, metadata);
      imageAdd
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => resolve(url))
        .catch((error) => reject(error));
    });
  };

  iconCamera.addEventListener("click", () => imageViewer.click());

  return viewProfile;
};
