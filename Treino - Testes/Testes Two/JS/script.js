class Animal {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  noise() {
    return `${this.name} made some noise!`;
  }
}

class Cat extends Animal {
  constructor(name, age, sex) {
    super(name, age, sex);
  }

  noise() {
    return `${this.name} made some meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, sex) {
    super(name, age, sex);
  }

  noise() {
    return `${this.name} made some bark!`;
  }
}

const myCat = new Cat("Boris", 5, "masc");
console.log(myCat);
console.log(myCat.noise());

const myDog = new Dog("Alfredo", 14, "masc");
console.log(myDog);
console.log(myDog.noise());