import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default (viewProfile) => {
  const stories = viewProfile.querySelector(".stories");
  const btnShare = viewProfile.querySelector("#btnShare");
  const imageViewer = viewProfile.querySelector("#addImg");
  const iconCamera = viewProfile.querySelector("#iconCamera");
  const loadingPanel = viewProfile.querySelector("#idLoading");
  const displayImage = viewProfile.querySelector("#displayImage");
  const dataPublications = models.publicationsModel.getPublications();
  const user = models.profileModel.getCurrentNameUser();

  // --------------------------------------- Evento compartir publicacion texto & img
  btnShare.addEventListener("click", () => {
    const textAreaComentary = viewProfile.querySelector("#textAreaComentary")
      .value;
    const optionPublicPrivate = viewProfile.querySelector(
      "#optionPublicPrivate"
    ).value;

    if (imageViewer.files[0] === undefined && textAreaComentary === "") {
      PNotify.notice({
        title: "Notice",
        text: "No hay nada para compartir.",
        delay: 1500,
      });
      return false;
    }

    loadingPanel.classList.remove("clsLoadingHide");

    if (imageViewer.files[0] === undefined) {
      models.publicationsModel
        .createNewPublication({
          userId: user.uid,
          userName: user.displayName,
          userPhoto: user.photoURL,
          content: textAreaComentary,
          image: null,
          privacyAction: optionPublicPrivate,
          punctuation: 0,
        })
        .then(() => {
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
              userName: user.displayName,
              userPhoto: user.photoURL,
              content: textAreaComentary,
              image: url,
              privacyAction: optionPublicPrivate,
              punctuation: 0,
            })
            .then(() => {
              loadingPanel.classList.add("clsLoadingHide");
              viewProfile.querySelector("#textAreaComentary").value = "";
              imageViewer.value = "";
              imageViewer.dispatchEvent(new Event("change"));
            });
        })
        .catch(() => loadingPanel.classList.add("clsLoadingHide"));
    }
  });

  // --------------------------------------- Funciones edit y eliminar (ejecutadas, linea 199 y 200) en funcion onsnapshot linea 152
  const eventDeletePublication = () => {
    const deletePublication = viewProfile.querySelectorAll(
      ".deletePublication"
    );
    deletePublication.forEach((delet) => {
      delet.addEventListener("click", () => {
        const idPublication = delet
          .closest(".authorPublication")
          .querySelector(".idPublication").value;
        const notice = PNotify.notice({
          title: "Eliminar publicación",
          text: "¿Estas segur@?",
          icon: "fas fa-question-circle",
          hide: false,
          closer: false,
          sticker: false,
          destroy: true,
          stack: new PNotify.Stack({
            dir1: "down",
            modal: true,
            firstpos1: 25,
            overlayClose: false,
          }),
          modules: new Map([
            ...PNotify.defaultModules,
            [
              PNotifyConfirm,
              {
                confirm: true,
              },
            ],
          ]),
        });
        notice.on("pnotify:confirm", () =>
          models.publicationsModel.deletePublication(idPublication)
        );
      });
    });
  };

  const eventUpdatePublication = () => {
    const updatePublication = viewProfile.querySelectorAll(
      ".updatePublication"
    );
    updatePublication.forEach((updatePost) => {
      updatePost.addEventListener("click", () => {
        const idPublication = updatePost
          .closest(".authorPublication")
          .querySelector(".idPublication").value;
        updatePost
          .closest(".publication")
          .querySelector(".currentContent").contentEditable = "true";
        const clsGuardarUpdate = updatePost
          .closest(".publication")
          .querySelector(".clsGuardarUpdate");
        clsGuardarUpdate.classList.remove("clsHide");
        const btnGuardarUpdate = updatePost
          .closest(".publication")
          .querySelector(".btnGuardarUpdate");
        btnGuardarUpdate.addEventListener("click", () => {
          const newContent = updatePost
            .closest(".publication")
            .querySelector(".currentContent").innerText;
          models.publicationsModel.updatePublication(idPublication, newContent);
          PNotify.success({
            title: "Éxito!",
            text: "Actualizaste tu publicación.",
            delay: 500,
          });
        });
      });
    });
  };

  loadingPanel.classList.remove("clsLoadingHide");
  dataPublications.onSnapshot((collectionPost) => {
    loadingPanel.classList.add("clsLoadingHide");
    stories.innerHTML = "";
    collectionPost.forEach((post) => {
      const postObj = post.data();
      if (postObj.userId) {
        postObj.id = post.id;
        if (
          postObj.privacyAction !== "publico" &&
          user &&
          postObj.userId !== user.uid
        )
          return;
        const view = views.publications(postObj);

        // Trabajando en comentarios
        const heart = view.querySelector("#heart");
        const btnComment = view.querySelector("#btnComment");
        const sendComment = view.querySelector("#sendComment");
        const textComment = view.querySelector("#textComment");
        const placeComments = view.querySelector("#placeComments");
        sendComment.addEventListener("click", () => {
          const captureComment = textComment.value;
          models.publicationsModel
            .addComment(postObj.id, { content: captureComment })
            .then(() => console.log("comentario agregado"))
            .catch((err) => console.log(err));
        });

        // Likes incrementer
        heart.addEventListener("click", (e) => {
          e.preventDefault();
          models.publicationsModel.incrementPunctuation(
            e.currentTarget.dataset.publication
          );
        });
        stories.appendChild(view);
      }
    });

    const menuEdit = viewProfile.querySelectorAll(".menuEdit");
    menuEdit.forEach((menu) => {
      menu.addEventListener("click", () => {
        const ulToogleMenu = menu
          .closest(".authorPublication")
          .querySelector(".ulToogleMenu");
        if (ulToogleMenu.classList.contains("dropdown-menu") === true) {
          ulToogleMenu.classList.remove("dropdown-menu");
        } else ulToogleMenu.classList.add("dropdown-menu");
      });
    });
    eventDeletePublication();
    eventUpdatePublication();
  });

  //------------------------------------ Previsualizacion de img en comments
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

  // ---------------------------------- Llamada en linea 52, comentando con img
  const uploadImageUrl = () =>
    new Promise((resolve, reject) => {
      const file = viewProfile.querySelector("#addImg").files[0];
      const name = `${+new Date()}- ${file.name}`;
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
        .catch((err) => reject(err));
    });

  iconCamera.addEventListener("click", () => imageViewer.click());
  return viewProfile;
};