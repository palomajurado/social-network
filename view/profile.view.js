/* eslint-disable quotes */
/* eslint-disable semi */
export default () => {
  const viewProfile = `
		<header class="profile-header">
			<div class="logo-principal">
				<img src="./assets/logo-limatopia.png" />
			</div>
		</header>
		<section class="All-sections">
    <section class="container-Publications-Profile">
      <section class="sectionProfile">
        <div class="coverPage">
          <img src="http://lorempixel.com/400/200/" alt=""/>
        </div>
        <div class="profilePicture">
          <img src="http://lorempixel.com/200/200/" alt=""/>
          <h5>Nombre </h5>
        </div>
      </section>
      <section class="sectionPublications" >
        <div class="containerNewPublications">
          <div class="commentary">¿Que quieres compartir?</div>
          <textarea name="newCommentary" id="textAreaComentary" class="textAreaPublication" placeholder="Escribe" autofocus></textarea>
          <div class="displayImage">
            <img id="loadedImage" src="http://placehold.it/180" alt="your image" />
          </div>
          <div class="optionsToPost">
            <div class="accionPublication">
              <img id="iconCamera" src="./assets/iconImage.png" alt="subirImagen" />
              <input type="file" id="addImg" name="addImg" accept="image/*">
              <select name="selectPublicPrivate" id="optionPublicPrivate">
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
              </select>
            </div>
            <button class="btnToPost" id="btnShare"> Share </button>
          </div>
        </div>
        <section id="containerStories" class="stories">
          <a href="#/profile"></a>
        </section>
      </section>
		</section>
    <br>
    <button class="logOut">Login out</button>
		<footer></footer>`;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewProfile;
  return divElement;
};
