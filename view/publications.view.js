/* eslint-disable quotes */
export default (post) => {
  const viewPublications = `
    <div class="authorPublication">
      <div class="detailsAuthor">
        <img src="${
          post.photoURL
            ? post.photoURL
            : "https://storage.googleapis.com/md-links/avatar.png"
        }"  alt=""/>
        <div class="dataProfile">
          <h3>${post.displayName}</h3>
            <div class="contentDeatilsRegistration">
              <img src="${
                post.privacyAction === "publico"
                  ? "./assets/public.png"
                  : "./assets/private.png"
              }" />
              <p>${post.registrationDate.toDate().toLocaleString()}</p>
            </div>
        </div>
      </div>
      <div class="clsToogleMenu" >
        <span class="menuEdit" id="btnOption"> &#9776; </span>
        <ul class="dropdown-menu">
          <li><i class="fa fa-pencil fa-fw"></i> Edit</a></li>
          <li><i class="fa fa-trash-o fa-fw"></i> Delete</a></li>
        </ul>
        <select name="selectEdit" id="selectEditDelete">
          <option value="Edit"><i class="fa fa-pencil fa-fw"></i>Edit</option>
          <option value="Delete"><i class="fa fa-trash-o fa-fw"></i>Delete</option>
        </select>
      </div>
    </div>
    <div class="content">
      <p>${post.content}</p>
      <img id="publishedImage" class="${
        typeof post.image !== "undefined" && post.image !== null ? "" : "clsImg"
      }" src="${
    typeof post.image !== "undefined" && post.image !== null ? post.image : ""
  }" alt="imgShare" />
    </div>
    <div class="interactions"> 
     ${post.punctuation} <img  id="heart" data-publication="${post.id}" src="${
    post.punctuation > 0 ? "./assets/fullHeart.png" : "./assets/emptyHeart.png"
  }" alt="meGusta" />
    </div> `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewPublications;
  return divElement;
};
