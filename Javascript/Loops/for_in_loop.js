const obj = { a: 1, b: 2, c: 3 };

for (const i in obj) {
    console.log(i);
  console.log(obj[i]);
}


const arr = [10, 20, 30];

for (const index in arr) {
    console.log(index);
  console.log(arr[index]);
}