import { storageRef, auth } from "../firebase.js";
const updateDisplayName = (name) => {
  return auth.currentUser.updateProfile({
    displayName: name,
  });
};

const updatePhotoUser = (file) => {
  return storageRef // subire a firestore la img capturada en la const file, por medio del atributo de target visto en la terminal del navegador
    .child("photoUpload/" + file.name)
    .put(file);
};
const updatePhotoBg = (file) => {
  return storageRef // subire a firestore la img capturada en la const file, por medio del atributo de target visto en la terminal del navegador
    .child("bgUpload/" + file.name)
    .put(file);
};

export default { updateDisplayName, updatePhotoUser, updatePhotoBg };
