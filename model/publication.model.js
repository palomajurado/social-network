import { db, storageRef, functions } from "../firebase.js";

const createNewPublication = (objectReceived) => {
  return new Promise((resolve, reject) => {
    db.collection("publications")
      .add({
        userId: objectReceived.userId,
        content: objectReceived.content,
        image: objectReceived.image,
        privacyAction: objectReceived.privacyAction,
        punctuation: objectReceived.punctuation,
        registrationDate: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

const getPublications = () =>
  db.collection("publications").orderBy("registrationDate", "desc");

const getUserById = (userId) => {
  // esta funcion no existe aqui , existe en la nube
  const getUserByUid = functions.httpsCallable("getUserByUid"); // trae desde la nube la copia de funcion y la ejecutas
  return getUserByUid({ uid: userId }); // debe retornar algo
};

const getStorageRef = () => storageRef;

const incrementPunctuation = (id) => {
  const publicationRef = db.collection("publications").doc(id);
  // para incrementar en uno firebase nos da una funcion llamada
  const increment = firebase.firestore.FieldValue.increment(1);
  publicationRef.update({ punctuation: increment });
};

export default {
  incrementPunctuation,
  createNewPublication,
  getPublications,
  getStorageRef,
  getUserById,
};
