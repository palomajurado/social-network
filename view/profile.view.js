/* eslint-disable quotes */
/* eslint-disable semi */
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
			<!-- Vista para ser mostrada al ingresar login, es solo una estrutura -->
    <section class="container-Publications-Profile">
				<!-- En realidad solo esta para probar, esta vita ingresara cuando se haga el click para
        ingresar al login, cuando se haga la validacion en el button de ingreso de sesion que se encuentra
      en los template de las otras vistas -->
      <a href="#/profile">Perfil</a>
			</section>
		</section>
		<footer></footer>`;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewProfile;

  return divElement;
};
