// Write a Program to Sort the dublicate Number find and sord and display in output

function solution(arr) {
    let a = []
    for(let i=0; i<arr.length; i++){
       if(!a.includes(arr[i])){
         a.push(arr[i])
     }
   }
  return a;
}


let data = [0,0,0,1,1,2,3,3,3,4,4,4]

console.log(solution(data));