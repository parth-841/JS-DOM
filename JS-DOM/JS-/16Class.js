// Class
class Animal {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  showSpeed() {
    console.log(`Speed:${this.speed}`);
  }
  // Static method Accessed without creating Object
  static sayHi() {
    console.log("Hello");
  }
}

// Inheritance, class expression
let Rabbit = class extends Animal {
  constructor(name, speed, canJump) {
    super(name, speed);
    this.canJump = canJump;
  }
};

// static method
Animal.sayHi();

let rabbit = new Rabbit("rabbit", 10, true);

// Accessing method of parent
rabbit.showSpeed();

console.log(rabbit.name);
console.log(rabbit.canJump);
console.log(rabbit instanceof Animal);
