const CONTAINER = document.querySelector("#Container");
const RESET = document.querySelector("#Reset")
const INPUT = document.querySelector("#inputText")
const SEND_BUTTON = document.querySelector("#sendButton") 

let boxes = 256;
drawBoxes(boxes);

function drawBoxes(boxes) {
    for (i = 1; i<=boxes; i++) {
        const GRID = document.createElement("div");
        GRID.classList.add("box");
        CONTAINER.appendChild(GRID);
    }
}

RESET.addEventListener("click", resetGrid);

CONTAINER.addEventListener('mouseenter', (event) => {
    if (event.target.classList.contains('box')) {
      event.target.classList.add('highlight');
    }
  }, true); 

SEND_BUTTON.addEventListener("click", (e) => {
    boxes = INPUT.value;
    if(boxes > 128) {
        boxes = 128
    }
    resetGrid();
    drawBoxes(boxes)
    console.log(boxes)
})

function resetGrid() {
    const BOXES = document.querySelectorAll(".box");
    BOXES.forEach(box => {
        box.remove();
    });
}

