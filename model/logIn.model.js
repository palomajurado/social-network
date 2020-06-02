import { auth } from "../firebase.js";

export const authEmailPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const authGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return auth.signInWithPopup(provider);
};

export default { authFacebook, authGmail }
