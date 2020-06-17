import { views } from "../view/index.js";
import { models } from "../model/index.model.js";
import { notice, successMessage, noticeMessage } from "../utils/pnotify.js";

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

    // si el comentario esta vacio y sin texto se lanzara un mensaje que diga que no ingreso nada
    if (imageViewer.files[0] === undefined && textAreaComentary === "") {
      noticeMessage();
      return false;
    }

    loadingPanel.classList.remove("clsLoadingHide"); // mostrando el pacman

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
          viewProfile.querySelector("#textAreaComentary").value = ""; // limpia el content
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

  // -- onsnaopshot : cuando hayan cambios ejecuta lo que esta dentro
  // -- querysnapshot : un objeto que te da firebase para poder obtener los datos de las consultas en el then de una promesa
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
        notice().on("pnotify:confirm", () =>
          models.publicationsModel.deletePublication(idPublication)
        );
      });
    });
  };

  const eventUpdatePublication = () => {
    const updatePublication = viewProfile.querySelectorAll(
      ".updatePublication"
    );
    // para cada publicacion le anadire un evento para poder actualizar publicacion
    updatePublication.forEach((updatePost) => {
      updatePost.addEventListener("click", () => {
        // al evento click en el button
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
          successMessage();
        });
      });
    });
  };

  loadingPanel.classList.remove("clsLoadingHide");

  // ----------------------------------------- Pinta las publicaciones cada vez que cambian
  dataPublications.onSnapshot((collectionPost) => {
    loadingPanel.classList.add("clsLoadingHide");
    stories.innerHTML = "";
    collectionPost.forEach((post) => {
      const postObj = post.data();
      postObj.id = post.id; //-------------- Guardamos el id del post en un objeto

      //------------------------------------ Valida si el post es privado o publico
      if (postObj.userId) {
        if (
          postObj.privacyAction !== "publico" &&
          user &&
          postObj.userId !== user.uid
        )
          return; //---------------------- Si las publicaciones son privadas NO SE PINTA EN LA INTERFAZ

        const view = views.publications(postObj, user);
        const placeComments = view.querySelector("#placeComments");
        const likesCount = view.querySelector("#likesCount");
        const heart = view.querySelector("#heart");
        const btnComment = view.querySelector("#btnComment"); // por usar para iniciar cursor
        const sendComment = view.querySelector("#sendComment");
        const textComment = view.querySelector("#textComment");
        const totalComments = view.querySelector("#totalComments");
        const commentImg = view.querySelector("#commentImg");
        const commentImgPreview = view.querySelector('#commentImgPreview');
        const commentsView = views.comments;

        // Seleccionar una imagen para subir como comentario
        commentImg.addEventListener('change', e => {
          // Objeto del navegador para leer cualquier archivo
          const reader = new FileReader();
          // cuando termine de cargar el archivo asignalo al src del elemento img 
          reader.onload = (e) => {
            commentImgPreview.src = e.target.result;
          }
          // esto ejecuta la lectura del archivo
          reader.readAsDataURL(e.target.files[0]);
        });

        //------------------------------------ Section de comentarios en publicationes
        // Esto para reutilizar la obtencion de comentarios. Vuelve a pintar los comentarios
        const getComments = () => {
          models.publicationsModel
            .getComments(post.id)
            .then((querysnapshot) => {
              placeComments.innerHTML = "";
              totalComments.innerHTML = querysnapshot.size;
              querysnapshot.forEach((doc) => {
                const comment = doc.data();
                comment.id = doc.id;
                placeComments.appendChild(commentsView(comment, user));
              });

              // Botones para eliminar el comentario
              const btnsDeleteComment = placeComments.querySelectorAll(
                ".deleteComment"
              );

              btnsDeleteComment.forEach((btn) => {
                btn.addEventListener("click", (e) => {
                  models.publicationsModel
                    .deleteComment(e.target.dataset.idComment)
                    .then(() => getComments())
                    .catch((err) => console.error(err));
                });
              });
            })
            .catch((err) => console.log(err));
        };

        // Se ejecuta la funcion cada vez que que se refresca la pagina
        getComments();

        sendComment.addEventListener("click", () => {
          const captureComment = textComment.value;
         
          const newComment = {
            content: captureComment,
            username: user.displayName,
            userPhoto: user.photoURL,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            userId: user.uid,
            postId: postObj.id,
          };

          if (!newComment.content) return;

          models.publicationsModel
            .addComment(newComment)
            .then(() => {
              textComment.value = "";
              getComments();
            })
            .catch((err) => console.log(err));
        });

        // -----------------------------------Boton de comments esconde coments y muestra al click
        placeComments.classList.add("hideComments");
        btnComment.addEventListener("click", () => {
          placeComments.classList.toggle("hideComments");
        });

        //------------------------------------ Seccion like en posts
        models.publicationsModel
          .getTotalLikes(post.id)
          .then((querysnapshot) => {
            likesCount.innerHTML = querysnapshot.size;
          })
          .catch((err) => console.log(err));

        // despinta el corazon si ya hizo like
        if (user) {
          models.publicationsModel
            .getlike(postObj.id, user.uid)
            .then((querysnapshot) => {
              if (querysnapshot.docs.length > 0) {
                heart.src = "./assets/fullHeart.png";
              } else heart.src = "./assets/corazon.svg";
            })
            .catch((err) => console.error(err));
        }

        // Likes incrementer
        heart.addEventListener("click", (e) => {
          // si no tiene un like le agrega
          models.publicationsModel
            .getlike(postObj.id, user.uid)
            .then((querysnapshot) => {
              if (querysnapshot.docs.length > 0) {
                querysnapshot.docs[0].ref.delete();
                heart.src = "./assets/corazon.svg";
                const currentLikeCount = parseInt(likesCount.innerHTML || 0);
                likesCount.innerHTML =
                  currentLikeCount > 0 ? currentLikeCount - 1 : 0;
              } else {
                models.publicationsModel
                  .addLike(postObj.id, user.uid)
                  .then(() => {
                    heart.src = "./assets/fullHeart.png";
                    const currentLikeCount = parseInt(
                      likesCount.innerHTML || 0
                    );
                    likesCount.innerHTML = currentLikeCount + 1;
                  });
              }
            });
          //   .catch((err) => console.log(err));
        });
        stories.appendChild(view);
      }
    });

    //------------------------------------ Menu de editar y eliminar post
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

  //------------------------------------ Previsualizacion de img en post para publicar
  imageViewer.addEventListener("change", () => {
    if (imageViewer.files && imageViewer.files[0]) {
      displayImage.classList.remove("clsDisplayImage"); // pacman
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
