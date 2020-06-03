import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default () => {
  const view = views.user();
  const user = models.profileModel.getCurrentNameUser();

  const imgUpdate = view.querySelector("#file"); // se abre la ventana para elegir la img del local (input)
  const imgUpload = view.querySelector("#imgUpload");
  imgUpload.src = user.photoURL; // se ve el objeto usuario en el navegador para sacar el photoURL atributo

  const name = view.querySelector(".inputName"); // tomamos los campos de name e email y colocamos los valores reales de los usuarios
  const userMail = view.querySelector("#emailUser");
  userMail.innerHTML = user.email;
  name.value = user.displayName;

  const editInputPass = view.querySelector("#editInputPass");
  const editInputName = view.querySelector("#editInputName");
  const changeBG = view.querySelector("#changeBg");
  const bg = view.querySelector(".portada");

  changeBG.addEventListener("change", (e) => {
    const file = e.target.files[0]; // tomamos este atributo del user en el navegador al consolearlo
    models.user.updatePhotoBg(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        // tomamos el metodo getdown y despues definimos el elemento css que sera igual a una url
        bg.style["background-image"] = url;
        bg.style.backgroundImage = `url(${url})`; // definimos estilo de background llamando los metodos
      });
    });
  });

  editInputName.addEventListener("click", () => {
    user
      .updateProfile({ displayName: name.value }) // metodo de firebase updateProfile
      .then(() => console.log("actualizaste tu nombre")) // falta poner span con mensaje y capturas errores
      .catch((err) => console.log(err));
  });

  editInputPass.addEventListener("click", (e) => {
    e.preventDefault();
    const password = view.querySelector("#password").value;
    user
      .updatePassword(password)
      .then(() => (window.location.hash = "#/")) // falta colocar mensajito con settiemout
      .catch((error) => {
        if (error.code === "auth/weak-password") alert("mas de 6 caracteres");
        else if (error.code === "auth/requires-recent-login")
          window.location.hash = "#/";
      });
  });

  imgUpdate.addEventListener("change", (e) => {
    const file = e.target.files[0]; // img en codigo: dentro del navegador aun no subida a internet
    models.user.updatePhotoUser(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        user
          .updateProfile({ photoURL: url })
          .then(() => (imgUpload.src = url))
          .catch((error) => console.log(error)); // falta colocar mensajito de success con settimeout
      });
    });
  });

  return view;
};
