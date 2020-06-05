import { storageRef, auth, db } from "../firebase.js";

const updateDisplayName = (name) =>
  auth.currentUser.updateProfile({
    displayName: name,
  });

const updatePhotoUser = (file) =>
  storageRef.child("photoUpload/" + file.name).put(file);

const updatePhotoBg = (file) =>
  storageRef.child("bgUpload/" + file.name).put(file);

const saveBackgroundUser = (user, imgURL) =>
  db.collection("settings").add({
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
