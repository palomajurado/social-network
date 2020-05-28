/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { auth } from "../firebase.js";

export const signUpEmailPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
