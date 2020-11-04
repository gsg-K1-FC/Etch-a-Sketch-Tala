const container = document.getElementById("container");
let size = 16;




function creatGrid(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++){
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    }
  };
};

creatGrid(size);


