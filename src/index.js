import './style.css';
import './cheese.js';

function component () {
  const element = document.createElement('div');
  element.innerHTML = 'test1244';
  element.classList.add('red');
  return element;
}

document.body.appendChild(component());
