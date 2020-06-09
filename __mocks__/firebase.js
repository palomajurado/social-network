//Configuracion de firebasemock
//Importando libreria que se usara para simular firebase
import firebasemock from "firebase-mock";
//Guardando en una constante el metodo que necesitamos, en este caso mockauth
// se pueden encontrar todos los SDK de firebase en la documentacion de la libreria
const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
// const mockstorage = new firebasemock.MockStorage();
// const mocksfunction = new firebasemock.MockFirebaseSdk();
//Esto es necesario para refrescar (los datos me imagino)
mockauth.autoFlush();
mockfirestore.autoFlush();
// mockstorage.autoFlush();
// mocksfunction.autoFlush();
//Aqui reemplazamos mediante el objeto global a todos los objetos firebase por el mock
global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
  () => mockfirestore
  // () => mockstorage
  // () => mocksfunction
);
