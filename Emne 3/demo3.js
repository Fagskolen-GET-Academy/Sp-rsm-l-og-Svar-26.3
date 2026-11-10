// function createPlayer(name, health) {
//   return { name, health, attack };
// }

// function attack() {
//   console.log(this.name + " attacks!");
// }

// let ola = createPlayer("Ola", 10);
// ola.attack();

class Player {
  //Private properties
  #name;
  #health;

  constructor(name, health) {
    this.#name = name;
    this.#health = health;
  }

  //method
  attack() {
    console.log(`${this.#name} attacks`);
  }

  get name() {
    return this.#name;
  }

  get health() {
    return this.#health;
  }
}

let Ola = new Player("Ola", 10);

// console.log(Ola.name)

class Product {
  #price;

  constructor(price) {
    this.price = price;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw new Error("Pris kan ikke være negativ");
    }
    this.#price = value;
  }
}

let product = new Product(49);
// product.price = -10;

console.log(product.price);
