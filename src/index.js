import Wizard from './Wizard';

// click anywhere to load this module
window.addEventListener('click', function () {
  const Fighter = import('./Fighter').then((module) => {
    new module.default().attack()
  })
})

const Ravalynn = new Wizard('Ravalynn', 'Frost');
console.log(Ravalynn);
console.log('-------------------');

const component = () => {
  let element = document.createElement('div');
  const obj = { a: 'alpha', b: 'bravo' };

  // ES7 Object spread test
  const newObj = { ...obj, c: 'charlie' };
  console.log('ES7 Object spread example: newObj');
  console.log(newObj);

  // ES8 Object.values test
  // Will not transpile without babel polyfills because it is a new method
  console.log('-------------------');
  console.log('ES8 Object.values example: Object.values(newObj)');
  console.log(Object.values(newObj));
  console.log('-------------------');
  // ES Array.includes test
  console.log("ES7 Array.includes example: ['a', 'b', 'c'].includes('b')");
  console.log(['a', 'b', 'c'].includes('b'));
  console.log('-------------------');

  return element;
};

// Event queue block scoping test
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}

document.body.appendChild(component());
