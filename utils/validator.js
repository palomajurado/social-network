/* eslint-disable no-useless-escape */

// Codigo util pero no tan importante y reutilizable por que lo usaremos en sigUP form o cambiar de white mode a black mode

function validateEmail(email) {
  // para validar que ingrese un email de acuerdo a su sintaxis
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export { validateEmail };
