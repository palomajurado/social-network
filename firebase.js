// Objeto de credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAZi1Sk7_FpqO0dMwurK0lxAJP0qbpmsQM", // credencial para consultar la BD
  authDomain: "social-network-lima-topia.firebaseapp.com", // firebase autentifica
  databaseURL: "https://social-network-lima-topia.firebaseio.com", // direccion de base de datos de nuestro firebase
  projectId: "social-network-lima-topia", // nombre de proyecto
  storageBucket: "social-network-lima-topia.appspot.com", // servicios de firebase para guardar archivos como imagenes o archivos estaticas (pdf music video)
  messagingSenderId: "113004416024", // identifica nuestra conexion
  appId: "1:113004416024:web:15077151e4ded9aa07c76d", // el id de nuestra aplicacom
  measurementId: "G-T5XZ91CCHV", // para firebase analitics
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
