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
  return publicationRef.update({ punctuation: increment });
};

const addComment = (idPublish, comment) => {
  const publicationRef = db.collection("publications").doc(idPublish);
  return publicationRef.collection("comments").add(comment);
};

const addLike = (idPublish, user) => {
  const publicationRef = db.collection("publications").doc(idPublish);
  return publicationRef.collection("likes").add(user);
};

const getlike = (idPublish, userId) => {
  return db
    .collection("publications")
    .doc(idPublish)
    .collection("likes")
    .where("user", "==", userId)
    .get();
};

const removeLike = (idPublish, userId) => {
  const publicationRef = db.collection("publications").doc(idPublish);
  return publicationRef
    .collection("likes")
    .where("user", "==", userId)
    .delete();
};

const getComments = (postId) =>
  db
    .collection("publications")
    .doc(postId)
    .collection("comments")
    .orderBy("date", "desc")
    .get();

const getTotalLikes = (postId) => {
  return db.collection("publications").doc(postId).collection("likes").get();
};

export default {
  getlike,
  addLike,
  addComment,
  removeLike,
  getComments,
  getStorageRef,
  getTotalLikes,
  getPublications,
  updatePublication,
  deletePublication,
  incrementPunctuation,
  createNewPublication,
  updateNamePublication,
  updatePhotoPublication,
};
