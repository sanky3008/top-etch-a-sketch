
# The Odin Project - Etch a Sketch
This project creates a dynamic NxN grid of squares using HTML, CSS, and JavaScript. Users can interact with the grid and change its size via a button prompt. The grid squares change color on mouse enter and revert back on mouse leave. 

Project is based on an Odin Project Assignment.

# Files
1. index.html
This file contains the basic HTML structure of the project, including references to the CSS and JavaScript files. Key elements include:
    - A button to prompt the user for a new grid size.
    - container to hold the grid.

2. styles.css
This file defines the styles for the HTML elements, focusing on layout and appearance. Key styles include:

    - Centering the body content.
    - Defining the grid container dimensions and appearance.
    - Styling for grid rows and squares.
3. script.js
This JavaScript file handles the dynamic functionality of the grid. Key functions include:

    - generateGrid(N): Creates an NxN grid of squares.
    - powerSketch(): Adds event listeners to change the color of squares on mouse enter and leave.
    - clearGrid(): Clears the existing grid.
    - Event listener for the button to prompt the user for a new grid size, clear the old grid, and generate a new one.

# Usage
1. Open index.html in a web browser.
2. Click the "Change Grid" button to enter a new grid size (less than 100).
3. Interact with the grid by hovering over the squares to see them change color.

# Additional Notes
1. The grid size prompt is limited to values below 100 to ensure performance and usability.
2. The initial grid size is set to 16x16.





