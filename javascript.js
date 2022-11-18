console.log('Hello World');

//16x16 grid of square divs in js

//connect to data attribute
const masterContainer = document.querySelector(`[data-container='master-container']`);
masterContainer.textContent=('Hello again!');

// const table = document.querySelector(`[data-container='table']`);
// const tr= document.createElement('tr');
// const td= document.createElement('td');

for (let i = 1; i < 17; i++) {
    const table = document.querySelector(`[data-container='table']`);
    const tr= document.createElement('tr');
    table.appendChild(tr);   

    for (let j = 1; j < 17; j++) {
        const td= document.createElement('td');
        tr.appendChild(td);            
    }
}




