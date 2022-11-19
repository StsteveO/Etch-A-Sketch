console.log('Hello World');

//16x16 grid of square divs in js

//connect to data attribute
const masterContainer = document.querySelector(`[data-container='master-container']`);
masterContainer.textContent=('Hello again!');

// const table = document.querySelector(`[data-container='table']`);
// const tr= document.createElement('tr');
// const td= document.createElement('td');
const resizeGrid= document.querySelector('.resize-button');
const table = document.querySelector(`[data-container='table']`);

let updatedGridNumber=16;

    //This is the actual table.
    for (let i = 1; i < 17; i++) {
        const tr= document.createElement('tr');
        table.appendChild(tr);   
    
        for (let j = 1; j < 17; j++) {
            const td= document.createElement('td');
            tr.appendChild(td); 
    
            
            td.addEventListener('mouseover', function() {
                td.classList.add('change-square');
            });

            //everything is known and defined

    
        }
    
    }

    //This allows us to resize the grid.
    resizeGrid.addEventListener('click',function() {
        let resizeGridNumber= Number(prompt('How many squares should be on each row, and each column?', 'Choose a number between 16 to 100.')); 
        if (resizeGridNumber>=16 && resizeGridNumber<=100) {   
            resizeGridNumber;
        } else {
            alert(`Try again. Please pick a number between 16-100.`);
            return;
        };



    }); 





////////////////////////////////////////////////////////////////////////////////////////


// //This allows us to resize the grid.
// resizeGrid.addEventListener('click',function() {
//     let resizeGridNumber= Number(prompt('How many squares should be on each row, and each column?', 'Choose a number between 16 to 100.')); 
//        if (resizeGridNumber>=16 && resizeGridNumber<=100) {   
//         updatedGridNumber=resizeGridNumber;
//        } else {
//         alert(`Try again. Please pick a number between 16-100.`);
//         return;
//        };


// }); 




       //This is the actual table.
// for (let i = 1; i < 17; i++) {
//     const table = document.querySelector(`[data-container='table']`);
//     const tr= document.createElement('tr');
//     table.appendChild(tr);   

//     for (let j = 1; j < 17; j++) {
//         const td= document.createElement('td');
//         tr.appendChild(td); 

//         // everything in here is understood/defined
        
//         td.addEventListener('mouseover', function() {
//             td.classList.add('change-square');
//         });

//     }

// }

