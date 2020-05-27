/* eslint-disable no-alert */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable quotes */
export default () => {
  const viewlogIn = `
    <section class="sectionFather">
      <section class="sectionSon">
        <h1>
          Lima <img src="./assets/ramita.png" alt="rama" /> <span>topia</span>
        </h1>
        <section class="sectionSubTitle">
          <h2 for="Log in">Log in</h2>
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
        <p>Don't have an account yet? <span> <a href="#/signUp">Sign up</a></span></p>
      </section>
    </section>
    `;

  const sectionElemt = document.createElement("section");
  sectionElemt.innerHTML = viewlogIn;
  sectionElemt.classList.add("All-sections");

  // elijo el elemento que he creado
  const logIn = sectionElemt.querySelector("#logIn"); // capturando el evento de sectionElement
  logIn.addEventListener("click", () => {
    alert("hola funconoHOLIHOLI");
  });

  return sectionElemt;
};
