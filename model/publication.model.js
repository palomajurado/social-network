import { db } from "../firebase.js"; // base de datos de firebase
// nueva publicacion del view (publication)
const createNewPublication = (newPublication) =>
  db
    .collection("publications") // utilizando db voy a interactuar con la coleccion publicacion, si no existe creare la coleccion si existe agregare
    // mas datos
    .add({
      userId: newPublication.userId,
      content: newPublication.content,
      punctuation: newPublication.punctuation,
      registrationDate: firebase.firestore.FieldValue.serverTimestamp(), // fecha de creacion, propiedad serverTimestamp
    });

// retorna las publicaciones desde la mas nueva hasta la mas antigua con fecha de regitro
const getPublications = () =>
  db.collection("publications").orderBy("registrationDate", "desc"); // no necesita return por que la funcion flecha sin llaves lo sobrentiende

export default { createNewPublication, getPublications };
