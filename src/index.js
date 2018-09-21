import Wizard from './Wizard';
console.log(new Wizard('Bob'));
console.log(new Wizard('Ravalynn', 'Frost'));

function component() {
  let element = document.createElement('div');

  return element;
}

document.body.appendChild(component());
