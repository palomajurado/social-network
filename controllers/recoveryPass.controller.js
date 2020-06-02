import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default () => {
  const view = views.recoveryPass();
  const btnSend = view.querySelector(".sendEmail");

  btnSend.addEventListener("click", () => {
    const email = view.querySelector("#email").value;
    models.recoveryPassModel
      .resetPassword(email)
      .then(() => {
        const message = view.querySelector("#messageSend");
        message.innerHTML = "Se envió link para recuperación de contraseña!";
        setTimeout(() => (window.location.hash = "#/"), 2000);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          const message = view.querySelector("#messageSend");
          message.innerHTML = "Correo ingresado inexsistente!";
        }
      });
  });
  return view;
};
