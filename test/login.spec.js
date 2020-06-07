import '../mocks/mock.js'
//Importando funcion de registro para testear
import models from "../src/model/logIn.model.js";

describe("authEmailPassword", () => {
  it("Deberia poder ingresar con el email: hola@hola.es y el user: anonymous", () =>
    models.authEmailPassword("hola@hola.es", "anonymous").then((obj) => {
      expect(obj.email).toBe("hola@hola.es");
    }));
});

describe("authGmail", () => {
  it("Deberia poder ingresar a mi cuenta con google", () => {
    models.authGmail().then((obj) => {
      expect(obj._result.providerData[0].providerId).toBe(google.com);
    });
  });
});

describe("authFacebook", () => {
  it("Deberia poder ingresar a mi cuenta con google", () => {
    models.authFacebook().then((obj) => {
      expect(obj._result.providerData[0].providerId).toBe(facebook.com);
    });
  });
});
