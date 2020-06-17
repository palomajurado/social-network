export default (comment, user) => {
  const viewComments = `
  <div id="userComment"><img src="${
    comment.userPhoto
      ? comment.userPhoto
      : "https://storage.googleapis.com/md-links/avatar.png"
  }" alt="user" />
    <h3>${comment.username ? comment.username : " "}
    </h3><span>${(comment.date
      ? comment.date.toDate()
      : new Date()
    ).toLocaleString()}</span>
      ${
        comment.userId === user.uid
          ? `<i class="fa fa-trash deleteComment" id="dott" data-id-comment="${comment.id}"></i>`
          : ""
      }
  </div>
  <div style="margin-top: 15px">
    <div>${comment.content} </div>
    <img src="${
      comment.imageURL ? comment.imageURL : ""
    }" alt="" style="width: 30%"/>
  </div>`;
  const divElement = document.createElement("div");
  divElement.className = "publication animate__animated animate__fadeInUp";
  divElement.innerHTML = viewComments;
  return divElement;
};
