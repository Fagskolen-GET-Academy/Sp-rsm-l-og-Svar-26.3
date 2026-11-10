class Clicker {
  #count;
  #letter;
  constructor(letter) {
    this.#letter = letter;
    this.#count = 0;
  }
  increase() {
    this.#count++;
  }

  get count() {
    return this.#count;
  }

  get letter() {
    return this.#letter;
  }
}

let clicker1 = new Clicker("A");
let clicker2 = new Clicker("B");
let clicker3 = new Clicker("C");

let myClickers = [clicker1, clicker2, clicker3];

function drawClickers() {
  let html = "";
  for (let obj of myClickers) {
    html += `<button onclick="increaseCount('${obj.letter}')">${obj.letter} : ${obj.count}</button>`;
  }
  return html;
}

function increaseCount(letter) {
  for (let obj of myClickers) {
    if (obj.letter == letter) {
      obj.increase();
    }
  }
  updateView();
}

function updateView() {
  document.getElementById("app").innerHTML = drawClickers();
}

updateView();
