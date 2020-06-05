import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default () => {
  const view = views.user();
  const bg = view.querySelector(".portada");
  const name = view.querySelector(".inputName");
  const imgUpdate = view.querySelector("#file");
  const changeBG = view.querySelector("#changeBg");
  const userMail = view.querySelector("#emailUser");
  const imgUpload = view.querySelector("#imgUpload");
  const editInputPass = view.querySelector("#editInputPass");
  const editInputName = view.querySelector("#editInputName");
  const password = view.querySelector("#password");
  let messageElm = view.querySelector("#changed");

  const user = models.profileModel.getCurrentNameUser();

  if (user) {
    userMail.innerHTML = user.email;
    name.value = user.displayName;
    if (user.photoURL) imgUpload.src = user.photoURL;
    models.user
      .getBackgroundUser(user.uid) // ID de user, hara match con el id objeto
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          let settings = querySnapshot.docs[0].data(); // devuelve la config
          bg.style.backgroundImage = `url(${settings.backgroundImg})`;
        }
      })
      .catch((err) => console.log(err));
  }

  //--------------------------------------- Evento cambio de portada
  changeBG.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    models.user.updatePhotoBg(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        models.user
          .saveBackgroundUser(user, url)
          .then(() => {
            bg.style.backgroundImage = `url(${url})`;
            messageElm.innerHTML = "Imagen de background actualizada";
            setTimeout(() => (messageElm.innerHTML = ""), 2000);
          })
          .catch((err) => {
            messageElm.innerHTML = "Error al cargar imagen de portada";
            setTimeout(() => (messageElm.innerHTML = ""), 2000);
          });
      });
    });
  });

  //--------------------------------------- Evento cambio de fotoPerfil
  imgUpdate.addEventListener("change", (e) => {
    const file = e.target.files[0]; // codigo de img
    models.user.updatePhotoUser(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        user
          .updateProfile({ photoURL: url })
          .then(() => {
            imgUpload.src = url;
            messageElm.innerHTML = "Imagen de perfil actualizada";
            setTimeout(() => (messageElm.innerHTML = ""), 2000);
          })
          .catch((err) => {
            messageElm.innerHTML = "Error al procesar imagen";
            setTimeout(() => (messageElm.innerHTML = ""), 2000);
          });
      });
    });
  });

  //--------------------------------------- Evento cambio de nombre
  editInputName.addEventListener("click", () => {
    user
      .updateProfile({ displayName: name.value })
      .then(() => {
        messageElm.innerHTML = "Actualizaste tu nombre";
        setTimeout(() => (messageElm.innerHTML = ""), 2000);
      })
      .catch((err) => {
        messageElm.innerHTML = "Error al cambiar nombre";
        setTimeout(() => (messageElm.innerHTML = ""), 2000);
      });
  });

  //--------------------------------------- Evento cambio de password
  editInputPass.addEventListener("click", (e) => {
    e.preventDefault();
    user
      .updatePassword(password.value)
      .then(() => {
        messageElm.innerHTML = "Se modificó su contraseña";
        setTimeout(() => (window.location.hash = "#/"), 2000);
      })
      .catch((err) => {
        let message = "";
        if (err.code === "auth/weak-password")
          message = "Contraseña, mínimo 6 carácteres";
        else if (err.code === "auth/requires-recent-login") {
          message = "Demasiados intentos, ingresar de nuevo";
          setTimeout(() => (window.location.hash = "#/"), 2000);
        }
        messageElm.innerHTML = message;
        setTimeout(() => (messageElm.innerHTML = ""), 2000);
      });
  });
  return view;
};
