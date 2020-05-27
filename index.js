import { changeViewLog } from './view-controller/router.js';

const init = () => {
  changeViewLog(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeViewLog(window.location.hash);
  });
};

window.addEventListener('load', init);
