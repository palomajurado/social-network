import { views } from "../view/index.js";
import { models } from "../model/index.model.js";

export default () => {
  const view = views.recoveryPass();
  const btnSend = view.querySelector(".sendEmail");
  const message = view.querySelector("#messageSend");

  btnSend.addEventListener("click", () => {
    const email = view.querySelector("#email").value;
    models.recoveryPassModel
      .resetPassword(email)
      .then(() => {
        const message = view.querySelector("#messageSend");
        message.innerHTML = "Se envió link al email!";
        setTimeout(() => (window.location.hash = "#/"), 2000);
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found")
          message.innerHTML = "Correo ingresado inexsistente!";
      });
  });
  return view;
};
