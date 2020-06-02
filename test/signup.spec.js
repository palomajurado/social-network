// Configuracion de firebasemock
//Importando libreria que se usara para simular firebase
import firebasemock from "firebase-mock";
//Guardando en una constante el metodo que necesitamos, en este caso mockauth
// se pueden encontrar todos los SDK de firebase en la documentacion de la libreria
const mockauth = new firebasemock.MockAuthentication();
//Esto es necesario para refrescar (los datos me imagino)
mockauth.autoFlush();
//Aqui reemplazamos mediante el objeto global a todos los objetos firebase por el mock
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth
);
//Importando funcion de registro para testear
import { signUpEmailPassword } from "../src/model/signUp.model.js";
describe("signUpEmailPassword", () => {
  it("Debería poder registrarse con el email: hi@hola.com y password: misil123", () =>
	signUpEmailPassword("hi@hola.com", "misil123")
	  .then((obj) => {
      expect(obj.email).toBe("hi@hola.com");
    }));
});
