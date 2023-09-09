const gridContainer = document.getElementById("grid-container");
let currentColor ="black";

        function createGrid(rows, cols) {
            for (let i = 0; i < rows * cols; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");

                cell.addEventListener("mouseenter", () => {
                    cell.style.backgroundColor = currentColor
                });

                gridContainer.appendChild(cell);
            }
        }
// Sets the color to color in the grid
function setColor(color) {
    currentColor = color;

    // Remove the "selected" class from all color buttons
    const colorButtons = document.querySelectorAll(".color-button");
    colorButtons.forEach(button => {
        button.classList.remove("selected");
    });

    // Add the "selected" class to the clicked color button
    const selectedButton = document.querySelector(`button[style="background-color: ${color};"]`);
    selectedButton.classList.add("selected");
}

function clearGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

        createGrid(16, 16);


/*  This function would draw it in random colors each time, will add a button for this as well
        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        */

        