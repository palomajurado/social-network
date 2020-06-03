import { auth } from "../firebase.js";

const signOut = () => {
  return auth.signOut();
};
// con este metodo cogere el ID real del usuario que servira para publciations y poder identificar quien comento tal o cual cosa
const getCurrentNameUser = () => {
  return auth.currentUser;
};
export default { signOut, getCurrentNameUser };
