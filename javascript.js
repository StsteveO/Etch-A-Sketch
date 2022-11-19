const masterContainer = document.querySelector(`[data-container='master-container']`);
const resizeGridButton= document.querySelector('.resize-button');
const table = document.querySelector(`[data-container='table']`);


//This is the actual table.
for (let i = 0; i < 16; i++) {
    const tableRows= document.createElement('tr');
    table.appendChild(tableRows);   

    for (let j = 0; j < 16; j++) {
        const tableColumnCells= document.createElement('td');
        tableRows.appendChild(tableColumnCells); 

        tableColumnCells.addEventListener('mouseover', function() {
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

const rowNodeList=document.querySelectorAll('tr');
const rowAmount= rowNodeList.length;

if (rowAmount<newGridNumber) {
    amountAdded=newGridNumber-rowAmount;

    console.log(amountAdded);
    
    for (let i = 0; i < amountAdded; i++) {
        const tableRows= document.createElement('tr');
        table.appendChild(tableRows); 

        for (let j = 0; j < (rowAmount+amountAdded); j++) {
            const tableColumnCells= document.createElement('td');
            rowNodeList.forEach();
            //what do you wwant the computer to do at each row??
        
    }
}

}
}); 





////////////////////////////////////////////////////////////////////////////////////////


// //This allows us to resize the grid.
// resizeGrid.addEventListener('click',function() {
//     let newGridNumber= Number(prompt('How many squares should be on each row, and each column?', 'Choose a number between 16 to 100.')); 
//        if (newGridNumber>=16 && newGridNumber<=100) {   
//         updatedGridNumber=newGridNumber;
//        } else {
//         alert(`Try again. Please pick a number between 16-100.`);
//         return;
//        };


// }); 




       //This is the actual table.
// for (let i = 1; i < 17; i++) {
//     const table = document.querySelector(`[data-container='table']`);
//     const tableRows= document.createElement('tableRows');
//     table.appendChild(tableRows);   

//     for (let j = 1; j < 17; j++) {
//         const tableColumnCells= document.createElement('tableColumnCells');
//         tableRows.appendChild(tableColumnCells); 

//         // everything in here is understood/defined
        
//         tableColumnCells.addEventListener('mouseover', function() {
//             tableColumnCells.classList.add('change-square');
//         });

//     }

// }

