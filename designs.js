const colorPick = document.getElementById('colorPicker'); // Select color input
const tableSize = document.getElementById('sizePicker'); // Select size input
const widthInput = document.getElementById('inputWidth');
const heightInput = document.getElementById('inputHeight');
const pixelCanvas = document.getElementById('pixelCanvas');
tableSize.addEventListener('submit', makeGrid); // When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    event.preventDefault();  //stop form submission
    pixelCanvas.innerHTML = ''; //clear table 
    for (let i = 0; i < heightInput.value; i++) {
        let row = pixelCanvas.insertRow(i); //row created
        for (let j = 0; j < widthInput.value; j++) {
            let cell = row.insertCell(j); //cells created in a row
            cell.addEventListener('click', function (e) {
                e.target.style.backgroundColor = colorPick.value; //painting the cell
            })
        }
    }
}
