let gridSize = 4;
document.getElementById('contain')
drawGrid(gridSize)
function drawGrid(grid) {
    for (i = 1; (i <= (grid ** 2)); i++) {
        addDiv(i)
    }
}

function addDiv(id) {
    const cont = document.getElementById('contain')
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", 'div' + id)
    cont.appendChild(newDiv)
}