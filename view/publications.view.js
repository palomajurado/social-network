/* eslint-disable quotes */
export default () => {
  const viewPublications = `
    <div class="authorPublication">
      <div class="detailsAuthor">
        <img src="http://lorempixel.com/200/200/" alt=""/>
        <h5>Nombre </h5>
      </div>
      <div id="toogleMenu">&#9776;</div>
    </div>
    <div class="content">contenido publicacion</div>
    <div class="interactions"> 
      <img src="./assets/corazon.png" alt="meGusta" />
    </div> `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewPublications;
  return divElement;
};
