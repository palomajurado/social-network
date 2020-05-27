/* eslint-disable quotes */
export default () => {
  const viewDifferent = `
            <h2>404</h2>
            <h1>Página no encontrada</h1>
            <p>El archivo especificado no se encontró en este sitio web. Por favor, URL para errores y vuelva a intentarlo.</p>
          `;

  const divElemt = document.createElement("div");
  divElemt.innerHTML = viewDifferent;
  divElemt.setAttribute("id", "message");
  return divElemt;
};
