const container = document.getElementById("container");
let size = 16;


function creatGrid(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  container.style.gridTemplateRows = `repeat(${size},1fr)`;
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;

  for (let i = 0; i < Math.pow(size,2) ; i++) {

    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";

  };
};
creatGrid(size);

//Changing the background color 
const cell = document.querySelectorAll(".grid-item");

cell.forEach(element => {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = colors();
  });

});

//a function to chose a random color
function colors() {
  let colorArray = [];
  for (let i = 0; i < 3; i++) {
    colorArray.push(Math.floor(Math.random() * (255 - 0));
  }
  // rgb -> hex
  let color = colorArray
    .map(x => x.toString(16))
    .join('');

  return `#${color}`;
}