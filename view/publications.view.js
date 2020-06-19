export default (post, user) => {
  const viewPublications = `
   <div class="authorPublication">
    <div class="detailsAuthor">
      <img src="${
        post.userPhoto
          ? post.userPhoto
          : " https://storage.googleapis.com/md-links/avatar.png"
      }" alt="" />
      <div class="dataProfile">
        <h3>${post.userName} </h3>
        <div class="contentDeatilsRegistration">
          <img src="${
            post.privacyAction === "publico"
              ? "./assets/public.png"
              : "./assets/private.png"
          }" />
          <p>${(post.registrationDate
            ? post.registrationDate
            : new Date()
          ).toLocaleString()}</p>
          <input type="text" class="idPublication" value="${post.id}">
        </div>
      </div>
    </div>
    ${
      post.userId === user.uid
        ? `<div class="clsToogleMenu">
      <span class="menuEdit hvr-bounce-in" id="btnOption"><i class="fa fa-ellipsis-v"></i></span>
      <ul class="ulToogleMenu dropdown-menu">
        <li class="updatePublication"><i class="fa fa-pencil fa-fw"></i> Edit</li>
        <li class="deletePublication"><i class="fa fa-trash-o fa-fw"></i> Delete</li>
      </ul>
    </div>`
        : " "
    }
  </div>
  <div class="content">
    <div>
      <p class="currentContent">${post.content}</p>
      <div class="clsGuardarUpdate clsHide">
        <button class="btnGuardarUpdate">💾</button>
      </div>
    </div>
    <img id="publishedImage" class="${
      typeof post.image !== " undefined" && post.image !== null ? "" : "clsImg"
    }" src="${
    typeof post.image !== " undefined" && post.image !== null ? post.image : ""
  }" alt="imgShare" />
  </div>
  <div class="interactions">
  <span id="likesCount"></span><img id="heart" style="margin-left:0.01rem" data-publication="${
    post.id
  }" class="hvr-pulse-grow" alt="meGusta" src="./assets/corazon.svg" />
    <span id="totalComments" style="margin-left: 5px;"></span> <img id="btnComment" src="./assets/coment.png" class="hvr-grow-rotate" alt="comentarios" style="margin-left: 0.05rem;" />

    <label for="commentImg">
      <img id="iconCamera" class="hvr-bounce-in" src="./assets/commentImage.png" alt="subirImagen" style="width: 50px; height: 50px" />
    </label>
    <input type="file" id="commentImg" accept="image/*" style="display:none;">
    <img id="commentImgPreview" src="" alt=""/> 
    <textarea id="textComment" cols="30" rows="2" spellcheck="false"></textarea>
    <button id="sendComment" type="submit"><img src="./assets/send.png" alt="send" /></button>

  </div>
  <div id="placeComments"></div>`;
  const divElement = document.createElement("div");
  divElement.classList.add("publication");
  divElement.innerHTML = viewPublications;
  return divElement;
};
