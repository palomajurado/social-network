/* eslint-disable quotes */
export default (post) => {
  const viewPublications = `
    <div class="authorPublication">
      <div class="detailsAuthor">
        <img src="http://lorempixel.com/200/200/" alt=""/>
        <div class="dataProfile">
          <h3>Nombre </h3>
            <div>
              <p></p>
              <p>${post.privacyAction}</p>
            </div>
        </div>
      </div>
      <div id="toogleMenu">
      <span class="menuEdit"> &#9776; </span>
      <select name="selectEdit" id="selectEditDelete">
        <option value="Edit">Edit</option>
        <option value="Delete">Delete</option>
      </select>
      </div>
    </div>
    <div class="content">
      <p>${post.content}</p>
      <img id="publishedImage" class="${typeof post.image !== 'undefined' && post.image !== null ? '' : 'clsImg'}" src="${typeof post.image !== 'undefined' && post.image !== null ? post.image : ''}" alt="imgShare" />
    </div>
    <div class="interactions"> 
      <img src="./assets/corazon.svg" alt="meGusta" />
    </div> `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewPublications;
  return divElement;
};
