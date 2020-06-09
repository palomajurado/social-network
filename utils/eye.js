export const closeEye = (passwordElm, imgElm) => {
  if (passwordElm.type === "password") {
    passwordElm.type = "text";
    imgElm.src = "https://storage.googleapis.com/md-links/ojo.png";
  } else {
    passwordElm.type = "password";
    imgElm.src = "https://storage.googleapis.com/md-links/closeye.png";
  }
};
