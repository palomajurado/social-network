/* eslint-disable quotes */
/* eslint-disable semi */
export default () => {
  const viewProfile = `
  <section class="container-Publications-Profile">
      <section class="sectionProfile">
        <div class="coverPage"> portad</div>
        <div class="profilePicture">foto de Perfil</div>
      </section>
      <section class="sectionPublications" >
        <div>
          <input type="text">
          <button class="publicar">publicar</button>
        </div>
        <div class="stories"> Historia de publicaciones</div>
      </section>
  </section> `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewProfile;
  return divElement;
};
