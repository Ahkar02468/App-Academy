class Fruit {
  constructor(color, taste) {
    this.color = color;
    this.taste = taste;
  }

  eat() {
    console.log(`You ate a ${this.constructor.name}.`);
  }
}

class aapple extends Fruit {
  constructor() {
    super('red', 'sweet');
  }
}

const apple = new aapple();
console.log(apple.eat());