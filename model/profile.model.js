import { auth } from "../firebase.js";

const signOut = () => {
  return auth.signOut();
};

const getCurrentNameUser = () => {
  return auth.currentUser;
};

export default { signOut, getCurrentNameUser };
