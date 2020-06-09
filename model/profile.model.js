import { auth } from "../firebase.js";

const signOut = () => auth.signOut();

// Con este metodo tomamos el ID real del usuario que servira para publications, profile, user
const getCurrentNameUser = () => auth.currentUser;

export default { signOut, getCurrentNameUser };
