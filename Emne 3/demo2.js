let clicker = {
  count: 0,
  letter: "A",
  increase: function () {
    this.count++;
  },
};

//Class
function Clicker(letter) {
  return { count: 0, letter, increase:function(){this.count++}};
}

function increaseCount(){
    this.count++
}

//instances of Clicker
let clicker2 = Clicker("B");
let clicker3 = Clicker("C");


clicker2.count++

let myClickers = [clicker, clicker2, clicker3];

function drawClickers() {
  let html = "";
  for (let obj of myClickers) {
    html += `<button onclick="increaseCount('${obj.letter}')">${obj.letter} : ${obj.count}</button>`;
  }
  return html;
}

function increaseCount(letter) {
  for (obj of myClickers) {
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
