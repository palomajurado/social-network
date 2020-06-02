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
        <div class="coverPage"> portad</div>
        <div class="profilePicture">foto de Perfil</div>
      </section>
      <section class="sectionPublications" >
        <div>
          <input type="text" spellcheck="false">
          <button class="publicar">publicar</button>
        </div>
        <div class="stories"> Historia de publicaciones</div>
      </section>
		</section>
    <br>
    <button class="logOut">Login out</button>
		<footer></footer>`;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewProfile;
  return divElement;
};
