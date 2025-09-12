/*Write a Program to  Suffer array Logic  */ 

const arr = [12, 31, 61, 71, 81, 99, 41, 53, 52, 74, 83, 94, 8, 5];

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