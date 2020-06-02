import { auth } from "../firebase.js";

const authEmailPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

const authGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return auth.signInWithPopup(provider);
};

export default { authEmailPassword, authGmail, authFacebook };
