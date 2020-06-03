export default () => {
  const viewProfile = `  
		<header class=profile-header>
			<div class="logo-principal">
				<img src="./assets/logo-limatopia.png" />
			</div>
		</header>
		<section class="All-sections">
    <section class="container-Publications-Profile">
      <section class="sectionProfile">
        <div class="coverPage">
          <img src="http://lorempixel.com/400/200/" alt=""/>
          <a href="#/user"><img class="imgMenu" src="https://storage.googleapis.com/md-links/menu.png"/></a>
        </div>
        <div class="profilePicture">
          <img src="http://lorempixel.com/200/200/" alt="" id="userPhoto"/>
           <button class="logOut"></button><h5 id="shownName">Nombre </h5>
        </div>
      </section>
      <section class="sectionPublications" >
        <div class="containerNewPublications">
          <div class="commentary">¿Que quieres compartir?</div>
          <textarea name="newCommentary" id="textAreaComentary" class="textAreaPublication" placeholder="Escribe" autofocus></textarea>
          <div class="optionsToPost">
            <img src="./assets/iconImage.png" alt="subirImagen" />
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
