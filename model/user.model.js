import { storageRef, auth, db } from "../firebase.js";
import { generateRandomString } from "../utils/randomString.js";

const updateDisplayName = (name) =>
  auth.currentUser.updateProfile({
    displayName: name,
  });

const updatePhotoUser = (file) =>
  storageRef.child("photoUpload/" + file.name).put(file);

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
  db.collection("settings").where("userId", "==", userId).get(); // Dvuelve la config del usuario que tenga este userId

export default {
  updatePhotoBg,
  updatePhotoUser,
  getBackgroundUser,
  updateDisplayName,
  saveBackgroundUser,
};
