export default () => {
  const viewSignUp = `
  <section class="sectionFather">
  <section class="sectionSon">
    <div id="circle1"></div>
    <div id="circle2"></div>
    <div class="logo-principalMobile">
      <img src="./assets/logo-limatopia.png" />
    </div>
    <section class="sectionSubTitle">
      <h2 for="Log in">Sign up</h2>
      <a href="#" style="color: transparent;">Forgot your password?</a>
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
        <button type="submit">Sign up</button>
      </section>
    </section>
    <p>Already have an account? <span><a href="#/">Log in</a></span></p>
  </section>
  </section>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewSignUp;

  return divElement;
};
