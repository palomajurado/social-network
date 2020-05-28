/* eslint-disable quotes */
export default () => {
  const viewPublications = `
  <div class="authorPublication">Autor</div>
  <div class="content">contenido publicacion</div>
  <div class="interactions"> me gusta compartir</div> `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewPublications;
  return divElement;
};
