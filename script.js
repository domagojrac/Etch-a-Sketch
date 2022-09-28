document.body.onload = addElement;

const mainDiv = document.getElementById("mainDiv");

numberOfSquares = 100;

function addElement() {

    numberOfRows = Math.sqrt(numberOfSquares);

    for(let i = 0; i < numberOfRows; i++) {

        const newRow = document.createElement("div");
        newRow.classList.add("row");
        mainDiv.appendChild(newRow); 

        for(let j = 0; j < numberOfRows; j++) {
            const newColumn = document.createElement("div");
            newColumn.classList.add("column");
            newRow.appendChild(newColumn); 
        };
    };
};

$(document).ready(function() {
    const columnDivs = document.getElementsByClassName("column");

    for (let i = 0; i < columnDivs.length; i++) {
        columnDivs[i].addEventListener("mouseenter", function() {
            columnDivs[i].style.backgroundColor = "black"; 
        });
    };
});

    






