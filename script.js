let rows = 1;
let cols = 2;
const coloring = false 

//#1  add row to grid
function addRows() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i=0; i < cols; i++){
        let cell = document.createElement("td");
        newRow.appendChild(cell);
    }
    mainGrid.appendChild(newRow);
    rows++;
}
//#2 add column to grid
function addColumns(){
    let mainGrid = document.getElementById("main-grid");

    if(rows === 0){
        let newRow = document.createElement("tr");
        let newCol = document.createElement("td");
        newRow.appendChild(newCol);
        rows++;
        cols++;
        mainGrid.appendChild(newRow);
    }
    else{
        let allRows = document.getElementsByTagName("tr");

        for(let i=0; i< rows; i++){
            let cell = document.createElement("td");
            allRows[i].appendChild(cell);
        }

        cols++;
    }
}
//#3 remove row from column
function removeRow() {
  //grab the main grid
  let mainGrid = document.getElementById("main-grid");
  
  mainGrid.deleteRow(rows-1);

  rows--;
}

//#4 remove column from the grid
function removeColumn() {
  let mainGrid = document.getElementById("main-grid");
  let allRows = document.querySelectorAll("tr");
  let rCounter = 0;
  for(let i = 0; i < rows; i++) {
      allRows[rCounter].removeChild(allRows[rCounter].lastChild);
      rCounter++;
  }
  cols--;
}

let currentColor = `${document.getElementById("color-select").value}`
function initializeCell(cell) {
    //when cell clicked change color
    cell.addEventListener("click", changeColor);
    //gives cell as class named "uncolored"
    cell.classList.add("uncolored");
    // on mousedown, start coloring
    cell.addEventListener("mousedown", e => {
        coloring = true
    });
    //when coloring, set background color of cell to the currentColor and remove the uncolored class
    cell.addEventListener("mousemove", e => {
        if (coloring) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
    // if coloring, on mouseup, set coloring to false
    cell.addEventListener("mouseup", e => {
        if (coloring) {
            coloring = false;
        }
    })
}
//add event handlers to the 2 starting cells
let cells = document.getElementsByTagName("td");
let cellList = [...cells];

for (let i=0; i < cellList.length; i++) {
  const cell = cellList[i];
  initializeCell(cell)
}
// changes color of a cell
function changeColor() {
  this.style.backgroundColor = currentColor;
  //remove class "uncolored" because cell is now colored
  this.classList.remove("uncolored")
}
//sets currentColor based on the color selected from dropdown
function setCurrentColor(color) {
  currentColor = color;
}
//#7: fill all uncolored cells with the currently selected color
function setUncolored() {
  // get all cells in the table
  let allCells = document.getElementsByTagName("td");
  let allCellsList = [...allCells];

  // filter out the cells that are colored
  const uncolored = allCellsList.filter(cell => {
  return cell.classList.contains("uncolored");
  });

  //change the background color of each uncolored cell and remove "uncolored" class
  uncolored.forEach(cell => {
    cell.style.backgroundColor = currentColor;
    cell.classList.remove("uncolored");
  })
}