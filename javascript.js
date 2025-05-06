const container = document.querySelector("#Container");

let boxes = 256;
let grid = document.createElement("div")


for (i = 1; i<=boxes; i++) {
    const grid = document.createElement("div");
    grid.classList.add("box");
    grid.textContent = i
    container.appendChild(grid);
}
