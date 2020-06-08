/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import { db, storageRef } from '../firebase.js';

const createNewPublication = objectReceived => new Promise((resolve, reject) => {
  db.collection('publications')
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
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
});

const getPublications = () => db.collection('publications').orderBy('registrationDate', 'desc');

const getStorageRef = () => storageRef;

const updateNamePublication = (idUser, newName) => {
  const query = db.collection('publications').where('userId', '==', idUser);

  query.get().then((publications) => {
    publications.forEach((post) => {
      db.collection('publications').doc(post.id)
        .update({
          userName: newName,
        })
        .then(() => {
          console.log(`Se actualizo ${post.id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
};

const updatePhotoPublication = (idUser, newPhoto) => {
  const query = db.collection('publications').where('userId', '==', idUser);

  query.get().then((publications) => {
    publications.forEach((post) => {
      db.collection('publications').doc(post.id)
        .update({
          userPhoto: newPhoto,
        })
        .then(() => {
          console.log(`Se actualizo ${post.id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
};

const deletePublication = (idPublication) => {
  db.collection('publications').doc(idPublication).delete().then(() => {
    console.log('Document successfully deleted!');
  })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

const updatePublication = (idPublication, newContent) => {
  const publication = db.collection('publications').doc(idPublication);
  return publication.update({
    content: newContent,
  })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
};


export default {
  createNewPublication,
  getPublications,
  getStorageRef,
  updateNamePublication,
  updatePhotoPublication,
  deletePublication,
  updatePublication,
};
