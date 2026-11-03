//class, instances and encapsulation

//Hva er forskjellen mellom objekter og en liste?

//Hvorfor trenger vi objekter?
//hva hvis vi må lagre flere personer?

let person = {
  name: "Kenneth",
  age: 33,
  likes: ["video games", "books"],
  greet: sayName,
  ages: birthday,
};

//Class
function createPerson(name, age, likes) {
  return { name, age, likes, greet: sayName, ages:birthday };
}

function sayName() {
  return `Jeg heter ${this.name}`;
}

function birthday() {
    this.age++;
}


//Instance of createPerson
let person2 = createPerson("Per", 25, ["disc golf", "vaffler"]);




