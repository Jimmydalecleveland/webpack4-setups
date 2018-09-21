import Wizard from './Wizard';
console.log(new Wizard('Bob'));
console.log(new Wizard('Ravalynn', 'Frost'));

const component = () => {
  let element = document.createElement('div');
  const obj = { a: 'alpha', b: 'bravo' };

  // ES7 Object spread test
  const newObj = { ...obj, c: 'charlie' };

  // ES8 Object.values test
  console.log(Object.values(newObj));
  return element;
};

document.body.appendChild(component());
