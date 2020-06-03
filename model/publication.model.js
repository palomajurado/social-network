import { db, storageRef } from "../firebase.js";
import { views } from "../view/index.js";

export const createNewPublication = (objectReceived) => {
    return new Promise ((resolve, reject) => {
        db.collection("publications").add({
            userId : objectReceived.userId,
            content : objectReceived.content,
            image: objectReceived.image,
            privacyAction: objectReceived.privacyAction,
            punctuation: objectReceived.punctuation,
            registrationDate: firebase.firestore.FieldValue.serverTimestamp()
        }).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    }) 
}

export const getPublications = () => {
    return db.collection("publications").orderBy('registrationDate', 'desc');
}

export const getStorageRef = () => {
    return storageRef;
}