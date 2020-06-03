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
								<input type="text" id="name" placeholder="Name" spellcheck="false" />
								<img src="./assets/user.jpg" alt="User" />
							</div>
							<div class="item">
								<img src="./assets/email.jpg" alt="email" />
								<input type="email" id="email" placeholder="Email" spellcheck="false" />
							</div>
							<div class="item">
								<input type="password" id="password" class="passwordAuth" placeholder="Password" id="lastItem" spellcheck="false"/>
								<img src="./assets/passw.jpg" alt="password" />
							</div>
							<div class="item">
								<img src="./assets/passw.jpg" alt="" />
								<input type="password" id="confirmPassword" placeholder="Confirm Password" spellcheck="false"/>
							</div>
						</form>
						<span class="signIn" id="messageResult">Sign up con...</span>
						<section class="sectionNetworks">
							<img src="./assets/g.jpg" alt="Gmail" id="gmail"/><img src="./assets/fb.jpg" alt="Facebook" id="facebook" />
						</section>
						<section class="loginButton disabled-button">
							<section class="loginButtonSon">
								<button type="submit" id="btnSignUp" class="SignUp-button">Sign up</button>
							</section>
						</section>
						<p>Already have an account? <span><a href="#/">Log in</a></span></p>
					</section>
				</section>
			</section>
			</section>
		</section>
		<footer></footer>`;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewSignUp;
  return divElement;
};
