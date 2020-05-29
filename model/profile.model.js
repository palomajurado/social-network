import { auth } from "../firebase.js";

export default () => {
  auth.signOut().then(() => {
    window.location.hash = "#/"; // por quitar
  });
};
