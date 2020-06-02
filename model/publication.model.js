import { db } from "../firebase.js";

const createNewPublication = (objectReceived) => {
  return new Promise((resolve, reject) => {
    db.collection("publications")
      .add({
        userId: objectReceived.userId,
        content: objectReceived.content,
        punctuation: objectReceived.punctuation,
        registrationDate: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getPublications = () => {
  return db.collection("publications").orderBy("registrationDate", "desc");
};
export default { createNewPublication, getPublications };
