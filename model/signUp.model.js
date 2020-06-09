import { auth } from "../firebase.js";

const signUpEmailPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

const updateDisplayName = (name) =>
  auth.currentUser.updateProfile({
    displayName: name,
  });

export default { signUpEmailPassword, updateDisplayName };
