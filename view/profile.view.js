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
        <div class="profilePicture"><img src="https://storage.googleapis.com/md-links/avatar.png" alt="Avatar" id="userPhoto" />
         <div class="logoutbtnSection"> <button class="logOut">
          <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="power-off" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-power-off fa-w-16 fa-2x"><g class="fa-group"><path fill="currentColor" d="M272 0a23.94 23.94 0 0 1 24 24v240a23.94 23.94 0 0 1-24 24h-32a23.94 23.94 0 0 1-24-24V24a23.94 23.94 0 0 1 24-24z" class="fa-secondary"></path><path fill="currentColor" d="M504 256c0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4A248 248 0 0 1 111.8 54.2a24.07 24.07 0 0 1 35 7.7L162.6 90a24 24 0 0 1-6.6 31 168 168 0 0 0 100 303c91.6 0 168.6-74.2 168-169.1a168.07 168.07 0 0 0-68.1-134 23.86 23.86 0 0 1-6.5-30.9l15.8-28.1a24 24 0 0 1 34.8-7.8A247.51 247.51 0 0 1 504 256z" class="fa-primary"></path></g></svg></button>
          <h5 id="shownName">Nombre</h5></div>
        </div>
      </section>
      <section class="sectionPublications" >
        <div class="containerNewPublications">
          <div class="commentary">¿Que quieres compartir?</div>
          <textarea name="newCommentary" id="textAreaComentary" class="textAreaPublication" placeholder="Escribe" autofocus spellcheck="false"></textarea>
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
		<footer></footer>`;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewProfile;
  return divElement;
};
