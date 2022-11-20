const masterContainer = document.querySelector(`[data-container='master-container']`);
const resizeGridButton= document.querySelector('.resize-button');
const table = document.querySelector(`#table`);
let dimensions= 16; 

//This is the actual table.
for (let i = 0; i < dimensions; i++) {
    const tableRows= document.createElement('tr');
    table.appendChild(tableRows);   

    for (let j = 0; j < dimensions; j++) {
        const tableColumnCells= document.createElement('td');
        tableRows.appendChild(tableColumnCells); 

        tableColumnCells.addEventListener('mouseover', function() {
            tableColumnCells.classList.add('change-square-background-color');
        });

        tableColumnCells.addEventListener('touchmove', function() {
            tableColumnCells.classList.add('change-square-background-color');
        });
    }
}

//This allows us to resize the grid.
resizeGridButton.addEventListener('click',function() {
    let newGridNumber= Number(prompt('How many squares should be on each row, and each column?', 'Choose a number between 16 to 100.')); 
    if (newGridNumber>=16 && newGridNumber<=100) {   
        newGridNumber;
    } else {
        alert(`Try again. Please pick a number between 16-100.`);
        return;
    };

    const tableToRemove= document.getElementById('table');
    tableToRemove.remove();

    const newTable=document.createElement('table');
    newTable.classList.add('table');
    newTable.setAttribute('id', 'table');
    masterContainer.appendChild(newTable);

    for (let i = 0; i < newGridNumber; i++) {
        const tableRows= document.createElement('tr');
        newTable.appendChild(tableRows);   
    
        for (let j = 0; j < newGridNumber; j++) {
            const tableColumnCells= document.createElement('td');
            tableRows.appendChild(tableColumnCells); 
    
            tableColumnCells.addEventListener('mouseover', function() {
                tableColumnCells.classList.add('change-square-background-color');
            });

            tableColumnCells.addEventListener('touchmove', function() {
                tableColumnCells.classList.add('change-square-background-color');
            });
        }
    }

});