import { auth } from "../firebase.js";

const signUpEmailPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);


// const updateDisplayName = (name) => {
//   return auth.currentUser.updateProfile({
//     displayName: name,
//   });
// };

export default { signUpEmailPassword };