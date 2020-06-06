import '../mocks/mock.js'
//Importando funcion de registro para testear
import models from "../src/model/signUp.model.js";
describe("signUpEmailPassword", () => {
  it("Debería poder registrarse con el email: hi@hola.com y password: misil123", () =>
    models.signUpEmailPassword("hi@hola.com", "misil123").then((obj) => {
      expect(obj.email).toBe("hi@hola.com");
    }));
});
