export default () => {
  const viewProfile = `
    <div id="idLoading" class="clsLoadingHide">
      <img src="./assets/loadingPublication.svg" alt="Carga Publication">
    </div>
		<header class="profile-header">
			<div class="logo-principal">
				<img src="./assets/logo-limatopia.png" />
			</div>
		</header>
		<section class="All-sections">
    <section class="container-Publications-Profile">
      <section class="sectionProfile">
        <div class="coverPage"><img id="background" src="" alt="" />
          <a href="#/user"><img class="imgMenu" src="https://storage.googleapis.com/md-links/menu.png"/></a></div>
        <div class="profilePicture"><img src="https://storage.googleapis.com/md-links/avatar.png" alt="Avatar" id="userPhoto" /><button
            class="logOut"></button>
          <h5 id="shownName">Nombre</h5>
        </div>
      </section>
      <section class="sectionPublications" >
        <div class="containerNewPublications">
          <div class="commentary">¿Que quieres compartir?</div>
          <textarea name="newCommentary" id="textAreaComentary" class="textAreaPublication" placeholder="Escribe" autofocus></textarea>
          <div id="displayImage" class="clsDisplayImage">
            <img id="loadedImage" src="http://placehold.it/180" alt="your image" />
          </div>
          <div class="optionsToPost">
            <div id="actionPublicate"class="accionPublication">
              <img id="iconCamera" class="hvr-bounce-in" src="./assets/iconImage.png" alt="subirImagen" />
              <input type="file" id="addImg" name="addImg" accept="image/*">
              <select name="selectPublicPrivate" class="selectPublicPrivate" id="optionPublicPrivate">
                <option value="publico" class="fas fa-users"> 🌎 <span>Público</span></option>
                <option value="privado" class="fas fa-user-lock"> 🔐 <span>Privado </span></option>
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
