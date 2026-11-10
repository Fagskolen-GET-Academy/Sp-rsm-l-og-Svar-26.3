//class, instances and encapsulation
let person = {
  name: "Kenneth",
  age: 33,
  likes: ["video games", "books"],
  greet: sayName,
  ages: birthday,
};

function createPerson(name, age, likes) {
  return { name, age, likes, greet: sayName, ages:birthday };
}

function sayName() {
  return `Jeg heter ${this.name}`;
}

function birthday() {
    this.age++;
}


let person2 = createPerson("Per", 25, ["disc golf", "vaffler"]);




