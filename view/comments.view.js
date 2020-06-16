export default (comment) => {
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
    ).toLocaleString()}</span><i class="fa fa-ellipsis-v" id="dott"></i>
  </div>
  <div style="margin-top: 15px;
  margin-left: 15px;">
    <div>${comment.content} </div>
  </div>`;
  const divElement = document.createElement("div");
  divElement.className = "publication animate__animated animate__fadeInUp";
  divElement.innerHTML = viewComments;
  return divElement;
};
