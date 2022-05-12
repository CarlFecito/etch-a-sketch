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

function pixelSize(amount) {
    
}


// WORKING ON THIS
function changeColor() {
    document.addEventListener("mouseover", )
}

function clickGrid() {
    let gridSize = parseInt(prompt(`Change grid size 1 ~ 100`, `4`))
    if (gridSize > 0 && gridSize <= 100) {
        document.getElementById('contain').innerHTML = ''
        drawGrid(gridSize)
    } else {
        alert('Grid size must be a number between 1 and 100')
    }
}