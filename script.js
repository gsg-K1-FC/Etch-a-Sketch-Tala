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

