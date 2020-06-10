export default (comment) => {
  const viewComments = `
  <div id="userComment"><img src="https://storage.googleapis.com/md-links/avatar.png" alt="user" />
    <h3>${comment.username ? comment.username : " "}
    </h3><span> soy la fecha </span> <img id="dott" src="/assets/dott.png" alt="menu" />
  </div>
  <div style="margin-top: 15px;
  margin-left: 15px;">
    <div>${comment.content} </div>
  </div>`;
  const divElement = document.createElement("div");
  divElement.classList.add("publication");
  divElement.innerHTML = viewComments;
  return divElement;
};
