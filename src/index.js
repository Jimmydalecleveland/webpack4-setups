import Wizard from './Wizard';

console.log(new Wizard('Bob'));
console.log(new Wizard('Ravalynn', 'Frost'));

const component = () => {
  let element = document.createElement('div');
  const obj = { a: 'alpha', b: 'bravo' };

  // ES7 Object spread test
  const newObj = { ...obj, c: 'charlie' };

  // ES8 Object.values test
  // Will not transpile without babel polyfills because it is a new method
  console.log(Object.values(newObj));
  // ES Array.includes test
  console.log(['a', 'b', 'c'].includes('b'));

  return element;
};

// Asyncronous block scoping test
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1);
}

document.body.appendChild(component());
