import { db, storageRef } from "../firebase.js";

const createNewPublication = (objectReceived) =>
  new Promise((resolve, reject) => {
    db.collection("publications")
      .add({
        userId: objectReceived.userId,
        userName: objectReceived.userName,
        userPhoto: objectReceived.userPhoto,
        content: objectReceived.content,
        image: objectReceived.image,
        privacyAction: objectReceived.privacyAction,
        punctuation: objectReceived.punctuation,
        registrationDate: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });

const getPublications = () =>
  db.collection("publications").orderBy("registrationDate", "desc");

const getStorageRef = () => storageRef;

const updateNamePublication = (idUser, newName) => {
  const query = db.collection("publications").where("userId", "==", idUser);
  query.get().then((publications) => {
    publications.forEach((post) => {
      db.collection("publications")
        .doc(post.id)
        .update({
          userName: newName,
        })
        .then(() => console.log(`Se actualizo ${post.id}`))
        .catch((err) => console.log(err));
    });
  });
};

const updatePhotoPublication = (idUser, newPhoto) => {
  const query = db.collection("publications").where("userId", "==", idUser);
  query.get().then((publications) => {
    publications.forEach((post) => {
      db.collection("publications")
        .doc(post.id)
        .update({
          userPhoto: newPhoto,
        })
        .then(() => console.log(`Se actualizo ${post.id}`))
        .catch((error) => console.log(error));
    });
  });
};

const deletePublication = (idPublication) => {
  db.collection("publications")
    .doc(idPublication)
    .delete()
    .then(() => console.log("Document successfully deleted!"))
    .catch((err) => console.error("Error removing document: ", err));
};

const updatePublication = (idPublication, newContent) => {
  const publication = db.collection("publications").doc(idPublication);
  return publication
    .update({
      content: newContent,
    })
    .then(() => console.log("Document successfully updated!"))
    .catch((err) => console.error("Error updating document: ", err));
};

const incrementPunctuation = (id) => {
  const publicationRef = db.collection("publications").doc(id);
  const increment = firebase.firestore.FieldValue.increment(1);
  publicationRef.update({ punctuation: increment });
};

const addComment = (idPublish, textComment) => {
  const publicationRef = db.collection("publications").doc(idPublish);
  return publicationRef.update({ comment: textComment });
};

export default {
  addComment,
  getStorageRef,
  getPublications,
  updatePublication,
  deletePublication,
  incrementPunctuation,
  createNewPublication,
  updateNamePublication,
  updatePhotoPublication,
};
