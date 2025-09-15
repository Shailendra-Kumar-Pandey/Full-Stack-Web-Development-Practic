/*Write a Program to  Suffer array Logic  */ 

const arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let saffer = [];    // load num

let index = [];     // load index

let isComplite = true;

while (isComplite) {
    let randamNum = Math.round(Math.random() * ((arr.length-1) - 0) + 0);
    
    if (!index.includes(randamNum)) {
        saffer.push(arr[randamNum]);
        index.push(randamNum);
    }
    if (index.length === arr.length) {
        isComplite = false;
    }
}
console.log(arr);
console.log(index);
console.log(saffer);