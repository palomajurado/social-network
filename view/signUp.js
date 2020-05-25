export default () => {
    const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra página!</h2>
  <figure class="text-center">
    <img class="image" src="http://olegif.com/bin/gifs/00/39/56.gif" alt="Conejo codeando">
  </figure>`;

    const divElemt = document.createElement('div');
    divElemt.innerHTML = viewHome;
    divElemt.classList.add('position')
    return divElemt;





};