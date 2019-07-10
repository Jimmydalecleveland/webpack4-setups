// Classes can be assigned just like regular functions (they can also be unnamed)
const Fighter = class {
  constructor(name, school = 'Champion') {
    this.name = name;
    this.school = school;
  }

  attack() {
    console.log("The fighter attacks")
  }
};

export default Fighter;
