export default () => {
  const viewDifferent = `
    <section class="notFound"><video id="bgVideo" autoplay loop muted ><source src="https://storage.googleapis.com/md-links/bgNotFound.webm" type="video/webm" ></video>
    <h1>Página no encontrada</h1><span>404</span><p>Te redireccionamos!</p><br><button class="redirect">Log In</button></section>`;
  const divElemt = document.createElement("div");
  divElemt.innerHTML = viewDifferent;
  return divElemt;
};
