export default () => {
  const forgotPass = `
    <section class="forgotPass"><form class="forgotPass" id="forgotPass"><video id="bgVideo" autoplay loop muted >           
    <source src="https://storage.googleapis.com/md-links/bgNotFound.webm" type="video/webm" ></video>
    <img src="./assets/passw.jpg" alt="password" class="key"/><h1>Cambiar contraseña</h1><br>
    <div class="item"><img src="./assets/email.png" alt="email" /><input type="email" id="email" placeholder="Ingrese un email" spellcheck="false"/>
    </div><br><span id="messageSend"></span><br><button class="sendEmail">SEND</button><a href="#/"><input class="regresar" type="button" value="Regresar" name="Regresar" spellcheck="false"></a></form> </section>`;
  const divElement = document.createElement("div");
  divElement.innerHTML = forgotPass;
  return divElement;
};
