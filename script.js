let N = 16;
let rows;
let squares;
const container = document.querySelector(".container");

// create a loop to make NXN Grid of divs

function generateGrid(N){
    for(let i=0; i<N; i++){
        rows = document.createElement("div");
        rows.classList.add("row");

        for(let j=0; j<N; j++){
            squares = document.createElement("div");
            squares.classList.add("gridSquare");
            rows.appendChild(squares);
        }

        container.appendChild(rows);
    }
}

// Function for selecting all grid squares and add event listener to them

function powerSketch() {
    const gridSquares = document.querySelectorAll(".gridSquare");

    gridSquares.forEach((sq) => {
        sq.addEventListener("mouseenter", function(){
            console.log("mouseenter");
            this.style.backgroundColor = 'red';
        })
    })

    gridSquares.forEach((sq) => {
        sq.addEventListener("mouseleave", function(){
            console.log("mouseleave");
            this.style.backgroundColor = 'white';
        })
    })
}

// Function to clear the grid
function clearGrid(){
    let container = document.querySelector(".container");
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

// Power prompt button

const promptButton = document.querySelector(".promptButton");

promptButton.addEventListener("click", function(){
    console.log("button clicked");
    let n = prompt("Please enter the new grid (should be <100)");
    if(n>100){
        alert("Grid should be <100 squares");
    }
    else{
        clearGrid();
        generateGrid(n);
        powerSketch();
    }
});

//Initialise

generateGrid(N);
powerSketch();