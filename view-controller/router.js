import { components } from '../view/index.js';

const changeViewLog = (route) => {
  const allBody = document.getElementById('allBody');
  allBody.innerHTML = '';
  switch (route) {
    case '':
    case '#/logIn':
    case '#/': {
      return allBody.appendChild(components.logIn());
    }
    case '#/signUp': {
      return allBody.appendChild(components.signUp());
    }
    case '#/profile': {
      return allBody.appendChild(components.profile());
    }
    default:
      break;
  }
  return true;
};

export { changeViewLog };
