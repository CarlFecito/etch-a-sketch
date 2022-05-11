let gridSize = 4;
drawGrid(gridSize)
function drawGrid(grid) {
    for (i = 1; (i <= (grid ** 2)); i++) {
        addDiv(i)
    }
}

function addDiv(id) {
    const cont = document.getElementById('contain')
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", id)
    newDiv.setAttribute("class", 'pixel')
    cont.appendChild(newDiv)
}


// WORKING ON THIS
function changeColor() {
    document.addEventListener("mouseover", )
}