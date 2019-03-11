// Classes can be assigned just like regular functions (they can also be unnamed)
const Wizard = class {
  constructor(name, school = 'Fire') {
    this.name = name;
    this.school = school;
  }

  // class properties are not supported by default with Webpack:
  // saySecret = () => console.log('Secret');
  // static staticProperty = 'Static Property';

  // Works by default
  genericClassMethod() {
    return 'This works without transpiling';
  }
};

export default Wizard;
