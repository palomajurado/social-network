export default () => {
  const userProfile = `
<div id="profile-container" class="container">
    <div class="profile-user-avatar">
      <section class="portada">
        <div class="user-img">
          <img src="https://storage.googleapis.com/md-links/avatar.png" alt="User" id="imgUpload"></div>
      </section>
      <div class="user-img-info">
        <progress value="100" max="100" id="uploader">0%</progress><label for="file" class="file" id="photoChng">Subir
          foto
          <input type="file" id="file" aria-label="File browser example" style='width: 0px;'>
          <!-- Aqui el usuario elige la img de perfil que quiere --></label>
        <label for="changeBg" class="file" id="labelChng">Subir back<input type="file" id="changeBg"
            style='width:0px;' /></label></div>
    </div>
    <form id="profile-info">
      <div class="profile-form-group"> <label for="Name">Nombre:</label>
        <div class="profile-inputs">
          <input type="text" value="" name="Name" class="inputName" spellcheck="false">
          <img src="https://storage.googleapis.com/md-links/pencil.png" alt="lapiz" id="editInputName" /></div>
      </div>
      <div class="profile-form-group">
        <label for="Email" class="profile-form-label">Email:</label>
        <div class="profile-inputs" id="emailUser" style="margin-left: 68px;
	color: orange;"></div>
      </div>
      <div class="profile-form-group"><label for="password">Contraseña:</label>
        <div class="profile-inputs"><input type="password" name="Password" id="password" class="password2">
          <img src="https://storage.googleapis.com/md-links/pencil.png" alt="lapiz" id="editInputPass" id="submit" />
        </div>
      </div>
    </form>
    <span class="signIn" id="changed"></span>
    <a href="#/profile"><input class="regresar" type="button" value="Regresar" name="Regresar" spellcheck="false"></a>
  </div>
`;
  const divElement = document.createElement("div");
  divElement.innerHTML = userProfile;
  return divElement;
};
