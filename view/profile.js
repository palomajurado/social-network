export default () => {
  const viewProfile = `
  <section class="container-Publications-Profile">
      <section class="sectionProfile">
        <div class="coverPage"> 
          <img src="http://lorempixel.com/400/200/" alt=""/>
        </div>
        <div class="profilePicture">
          <img src="http://lorempixel.com/200/200/" alt=""/>
        </div>
      </section>
      <section class="sectionPublications">
        <div class="containerNewPublications">
          <textarea name="newCommentary" id="" class="textAreaPublication"></textarea>
          <button class="btnToPost"> Compartir </button>
        </div>
        <section id="containerStories" class="stories">
          <div class="authorPublication">Autor</div>
          <div class="content">contenido publicacion</div>
          <div class="interactions"> 
            <img src="./assets/corazon.png" alt="meGusta" />
          </div> 
          <a href="#/publications"></a>
        </section>
      </section>
    </section> `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewProfile;

  return divElement;
};
