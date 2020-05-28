export default () => {
  const viewLogIn = `
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
    <p>Don't have an account yet? <span> <a href="#/signUp">Sign up</a></span></p>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogIn;

  return divElement;
};
