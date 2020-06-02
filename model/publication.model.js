import { db } from "../firebase.js";

export const createNewPublication = (objectReceived) => {
    return new Promise ((resolve, reject) => {
        db.collection("publications").add({
            userId : objectReceived.userId,
            content : objectReceived.content,
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