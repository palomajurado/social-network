export default (post) => {
  const viewPublications = `
    <div class="authorPublication">
      <div class="detailsAuthor">
        <img src="http://lorempixel.com/200/200/" alt="" id="userPhoto"/>
        <h5 id="showName">Nombre</h5>
      </div>
      <div id="toogleMenu">&#9776;</div>
    </div>
    <div class="content">${post.content}</div> <!-- aqui se esta recibiendo la publicacion -->
    <div class="interactions"> 
      <img src="./assets/corazon.png" alt="meGusta" />
      <img src="https://storage.googleapis.com/md-links/risa.png" alt="meGusta" />
      <img src="https://storage.googleapis.com/md-links/like.png" alt="meGusta" />
    </div> `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewPublications;
  return divElement;
};
