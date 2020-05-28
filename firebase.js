/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
// Your web app's Firebase configuration

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

// Voy a empezar a utilizarte : toma los credenciales de acceso de uso
firebase.initializeApp(firebaseConfig);

// no es tan importante para que funcione la app
firebase.analytics();

// dandole un alias a firebase.auth que me ayudara a utilizar sus metodos de autenticacion de singinwithemailpasswrod  y signinwithgmail
export const auth = firebase.auth(); // lo importaremos en logIn y singUp
