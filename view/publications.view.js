/* eslint-disable quotes */
export default (post) => {
  const viewPublications = `
    <div class="authorPublication">
      <div class="detailsAuthor">
        <img src="${post.data().userPhoto ? post.data().userPhoto : 'https://storage.googleapis.com/md-links/avatar.png'}" alt=""/>
        <div class="dataProfile">
          <h3>${post.data().userName} </h3>
            <div class="contentDeatilsRegistration">
              <img src="${post.data().privacyAction === 'publico' ? './assets/public.png' : './assets/private.png'}" />
              <p>${(post.data().registrationDate ? post.data().registrationDate.toDate() : new Date()).toLocaleString()}</p>
              <input type="text" class="idPublication" value="${post.id}">
              </div>
        </div>
      </div>
      <div class="clsToogleMenu" >
        <span class="menuEdit" id="btnOption"> &#9776; </span>
        <ul class="dropdown-menu">
          <li class="updatePublication"><i class="fa fa-pencil fa-fw"></i> Edit</li>
          <li class="deletePublication"><i class="fa fa-trash-o fa-fw"></i> Delete</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div>
      <p class="currentContent">${post.data().content}</p>
      <div class="clsGuardarUpdate">
      <button class="btnGuardarUpdate">💾</button>
      </div>
      </div>
      <img id="publishedImage" class="${typeof post.data().image !== 'undefined' && post.data().image !== null ? '' : 'clsImg'}" src="${typeof post.data().image !== 'undefined' && post.data().image !== null ? post.data().image : ''}" alt="imgShare" />
    </div>
    <div class="interactions"> 
      <img src="./assets/corazon.svg" alt="meGusta" />
      <img src="./assets/coment.png" alt="comentarios" />
    </div> `;

  const divElement = document.createElement("div");
  divElement.classList.add('publication');
  divElement.innerHTML = viewPublications;
  return divElement;
};
