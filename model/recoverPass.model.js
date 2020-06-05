import { auth } from "../firebase.js";

const resetPassword = (email) => auth.sendPasswordResetEmail(email);

export default { resetPassword };
