// 

console.log(1)

setTimeout(()=>{
    console.log(2)
}, 1000)

console.log(3)

setTimeout(()=>{
    console.log(4)
}, 0)

console.log(5)

setTimeout(()=>{
    console.log(6)
}, 1000)

console.log(7)

// Output will be:
// 1
// 3
// 5
// 7
// 4
// 2
// 6Async Priority in JavaScript
// Explanation:
// In this example, we have a mix of synchronous console.log statements and asynchronous setTimeout calls. The synchronous logs (1, 3, 5, 7) are executed immediately in the order they appear. The setTimeout with a delay of 0 milliseconds (which logs 4) is executed next, as it is placed in the event queue and will run after the current call stack is cleared. Finally, the setTimeout calls with a delay of 1000 milliseconds (which log 2 and 6) are executed after approximately one second, in the order they were defined.
// This demonstrates how JavaScript handles asynchronous operations using the event loop, where synchronous code is executed first, followed by asynchronous callbacks based on their specified delays.