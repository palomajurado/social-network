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
    case '#/profile': {
      return containerLogIn.appendChild(components.profile());
    }
    default:
      break;
  }
  return true;
};

export { changeViewLog };
