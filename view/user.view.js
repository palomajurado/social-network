export default () => {
  const userProfile = `
  <div id="profile-container" class="container">
  <div class="profile-user-avatar">
  <section class= "portada">
    <div class="user-img">
      <img src="https://storage.googleapis.com/md-links/user.jpg" alt="User" id="imgUpload">
    </div>
  </section>
    <div class="user-img-info">
      <progress value="100" max="100" id="uploader">0%</progress>
      <label class="file">
          <input type="file" id="file" aria-label="File browser example"> <!-- Aqui el usuario elige la img de perfil que quiere -->
      </label>
   <label class="file">
   <input type="file" id="changeBg" />
   </label>
    </div>
  </div>
  <form id="profile-info">
    <div class="profile-form-group">
      <label for="Name">Nombre:</label>
      <div class="profile-inputs">
        <input type="text" value="" name="Name" class="inputName" spellcheck="false"> 
        <img src="https://storage.googleapis.com/md-links/pencil.png" alt="lapiz" id="editInputName"/>
      </div>
    </div>
    <div class="profile-form-group">
      <label for="Email" class="profile-form-label" >Email:</label>
      <div class="profile-inputs" id="emailUser" style="color:white">
      </div>
    </div>
    <div class="profile-form-group">
      <label for="password">Contraseña:</label>
     <div class="profile-inputs">
        <input type="password" name="Password" id="password" value="">
      <img src="https://storage.googleapis.com/md-links/pencil.png" alt="lapiz" id="editInputPass" id="submit"/>
      </div>
    </div>   
  </form>
  <a href="#/profile"><input class="regresar" type="button" value="Regresar" name="Regresar" spellcheck="false"></a>
</div> `;
  const divElement = document.createElement("div");
  divElement.innerHTML = userProfile;
  return divElement;
};
