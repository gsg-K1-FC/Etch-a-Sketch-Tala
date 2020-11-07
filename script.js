const container = document.getElementById("container");
var size = 16;


function creatGrid(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  container.style.gridTemplateRows = `repeat(${size},1fr)`;
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;
  for (let i = 0; i < Math.pow(size, 2); i++) {
    let cells = document.createElement("div");
    container.appendChild(cells).className = "grid-item";

  };
};
creatGrid(size);

//asking the user to enter the number of grids
var newButton = document.querySelector(".new-btn");
newButton.addEventListener("click", function () {

  var number = prompt("Please enter number of grids you want:", "16");
  if (number == null || number == "" ) {
    creatGrid(16);
   
  } else {
    creatGrid(number);
   
  }

});

// Changing the background color
var randomButton = document.querySelector(".ran-btn");
randomButton.addEventListener("click", changeColor);

//for random colors
function changeColor() 
  {
    const cell = document.querySelectorAll(".grid-item");
    cell.forEach(element => {
      element.addEventListener("mouseover", function () {
        element.style.backgroundColor = colors();
      });
  
    });
  }
 

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


//clear button
var clearButton = document.querySelector(".clr-btn");
clearButton.addEventListener("click", clear);
function clear() {
  const cell = document.querySelectorAll(".grid-item");
  cell.forEach(element => {
      element.style.backgroundColor ="white";
  });
}





//for the color picker
var ele = document.getElementById('container-color');
if (ele) {
  ele.style.visibility = "visible";
}


ej.base.enableRipple = true;
var colorPicker = new ej.inputs.ColorPicker({ cssClass: 'e-hide-value' }, '#element');

var theInput = document.getElementById("element");
var theColor = theInput.value;

console.log(theColor);

theInput.addEventListener("input", choseColor); 

function choseColor() {
  const cell = document.querySelectorAll(".grid-item");
  cell.forEach(element => {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = theColor;
    });

  });
}



    