import { storageRef, auth, db } from "../firebase.js";
import { generateRandomString } from "../utils/randomString.js";

const updateDisplayName = (name) =>
  auth.currentUser.updateProfile({
    displayName: name,
  });

const updatePhotoUser = (file) =>
  storageRef.child("photoUpload/" + file.name).put(file);

// La func generateRandomString(genera un string aleatorio) en caso subamos una foto por ejm,
// con nombre foto.png y otro usuario sube otra img pero con el mismo nombre, habria conflicto
// lo que hace la func es renombrar estas subidas con id aleatorios y unicos para que NUNCA haya conflicto
const updatePhotoBg = (file) => {
  const extension = file.name.substr(file.name.lastIndexOf("."));
  const newName = generateRandomString() + extension;
  return storageRef.child("bgUpload/" + newName).put(file);
};

const saveBackgroundUser = (user, imgURL) =>
  db.collection("settings").doc(user.uid).set({
    userId: user.uid,
    backgroundImg: imgURL,
  });

const getBackgroundUser = (userId) =>
  db.collection("settings").where("userId", "==", userId).get(); // Devuelve la config del usuario que tenga este userId

export default {
  updatePhotoBg,
  updatePhotoUser,
  getBackgroundUser,
  updateDisplayName,
  saveBackgroundUser,
};
