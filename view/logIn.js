/* eslint-disable no-tabs */
export default () => {
	const viewLogIn = `
		<header class="log_sign-header">
			<div class="logo-icon">
				<img src="./assets/logoDesktop.png" />
			</div>
			<div class="logo-principal">
				<img src="./assets/logo-limatopia.png" />
			</div>
			<button class="content-about"><p>ABOUT US</p></button>
		</header>
		<section class="All-sections">
			<section class="sectionFather">
				<section class="sectionSon">
					<div id="circle1"></div>
					<div id="circle2"></div>
					<div class="logo-principalMobile">
						<img src="./assets/logo-limatopia.png" />
					</div>
					<a href="#/logIn"></a>
					<section id="containerLogIn">
						<h1>Log In</h1>
						<section class="sectionSubTitle">
							<h2 class="LogIn">Log in</h2>
							<a href="#">Forgot your password?</a>
						</section>
						<form class="container">
							<div class="item">
								<input type="email" id="email" placeholder="Email" />
								<img src="./assets/email.jpg" alt="email" />
							</div>
							<div class="item">
								<img src="./assets/passw.jpg" alt="password" />
								<input type="password" id="password" placeholder="Password" />
							</div>
						</form>
						<span class="signIn">Sign in with...</span>
						<section class="sectionNetworks">
							<img src="./assets/g.jpg" alt="Gmail" id="gmail" />
							<img src="./assets/fb.jpg" alt="Facebook" id="facebook" />
						</section>
						<section class="loginButton">
							<section class="loginButtonSon">
								<button type="submit" id="logIn">Log in</button>
							</section>
						</section>
						<p>
							Don't have an account yet?
              <span> <a href="#/signUp">Sign up</a></span>
						</p>
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

	const divElement = document.createElement('div');
	divElement.innerHTML = viewLogIn;

	return divElement;
};
