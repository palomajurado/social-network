import { components } from '../view/index.js';

const changeViewLog = (route) => {
  const containerLogIn = document.getElementById('containerLogIn');
  containerLogIn.innerHTML = '';
  switch (route) {
    case '':
    case '#/logIn':
    case '#/': {
      return containerLogIn.appendChild(components.logIn());
    }
    case '#/signUp': {
      return containerLogIn.appendChild(components.signUp());
    }
    default:
      break;
  }
  return true;
};

export { changeViewLog };
