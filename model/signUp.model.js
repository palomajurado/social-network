import { auth } from "../firebase.js";
import { authGmail, authFacebook } from "../model/logIn.model.js";

export const signUpEmailPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// authFacebook();
// authGmail();
