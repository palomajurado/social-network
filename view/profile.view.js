export default () => {
  const viewProfile = `
		<header class=profile-header>
			<div class="logo-principal">
				<img src="./assets/logo-limatopia.png" />
			</div>
		</header>
		<section class="All-sections">
			<section class="sectionFather">
				<section class="sectionSon">
					<div class="logo-principalMobile">
						<img src="./assets/logo-limatopia.png" />
					</div>
					<a href="#/logIn"></a>
					<section id="containerLogIn">
					</section>
				</section>
			</section>
      <span class="displayUserName">Hola</span>
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
        <div>
          <input type="text" spellcheck="false">
          <button class="publicar">publicar</button>
// revisar
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
    <button class="logOut">Login out</button>
		<footer></footer>`;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewProfile;
  return divElement;
};
