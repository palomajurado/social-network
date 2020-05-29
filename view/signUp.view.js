export default () => {
  const viewSignUp = `
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
						<section class="sectionSubTitle">
							<h2 class="SignUp">Sign up</h2>
						</section>
						<form class="container">
							<div class="item">
								<input type="text" id="name" placeholder="Name" />
								<img src="./assets/user.jpg" alt="User" />
							</div>
							<div class="item">
								<img src="./assets/email.jpg" alt="email" />
								<input type="email" id="email" placeholder="Email" />
							</div>
							<div class="item">
								<input type="password" id="password" placeholder="Password" id="lastItem" />
								<img src="./assets/passw.jpg" alt="password" />
							</div>
							<div class="item">
								<img src="./assets/passw.jpg" alt="" />
								<input type="text" id="confirmPassword" placeholder="Confirm Password" />
							</div>
						</form>
						<span class="signIn">Sign up with...</span>
						<section class="sectionNetworks">
							<img src="./assets/g.jpg" alt="Gmail" /><img src="./assets/fb.jpg" alt="Facebook" />
						</section>
						<section class="loginButton">
							<section class="loginButtonSon">
								<button type="submit" class="SignUp-button">Sign up</button>
							</section>
						</section>
						<p>Already have an account? <span><a href="#/">Log in</a></span></p>
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
  divElement.innerHTML = viewSignUp;
  return divElement;
};
