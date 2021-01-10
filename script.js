let rows = 1;
let cols = 1;
let color = "red"
let toColor = 0;

//#1  add row to grid
function addRows() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i=0; i< cols; i++){
        let cell = document.createElement("td");
        cell.className = "white-cell"
        cell.setAttribute("onclick","changeColor(this)")
        cell.setAttribute("onmousedown","setColorTrue(this)")
        cell.setAttribute("onmouseover","hoverChangeColor(this)")
        cell.setAttribute("onmouseup","setColorFalse()")
        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    rows++;
    document.getElementById("rowcount").innerHTML = "Row Count: " + rows;
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
            cell.className = "white-cell"
            cell.setAttribute("onclick","changeColor(this)")
            cell.setAttribute("onmousedown","setColorTrue(this)")
            cell.setAttribute("onmouseover","hoverChangeColor(this)")
            cell.setAttribute("onmouseup","setColorFalse()")
            allRows[i].appendChild(cell);
        }

        cols++;
        document.getElementById("colcount").innerHTML = "Column Count: " + cols;
    }
}