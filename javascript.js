const CONTAINER = document.querySelector("#Container");

let boxes = 256;
drawBoxes(boxes);
// let grid = document.createElement("div")

function drawBoxes(boxes) {
    for (i = 1; i<=boxes; i++) {
        const GRID = document.createElement("div");
        GRID.classList.add("box");
        GRID.textContent = i
        CONTAINER.appendChild(GRID);
    }
}


CONTAINER.addEventListener('mouseenter', (event) => {
    if (event.target.classList.contains('box')) {
      event.target.classList.add('highlight');
    }
  }, true); 

