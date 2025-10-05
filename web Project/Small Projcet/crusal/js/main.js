const rightBtn = document.getElementById("right-arrow");
const leftBtn = document.getElementById("left-arrow");
const imageContainer = document.getElementById("image-container");
let currentIndex = 0;

// console.log(imageContainer.children[0]);

function rightSlide() {
    if (currentIndex === 7) {
        currentIndex = 0;
        console.log(imageContainer.children[currentIndex]);
        imageContainer.children[currentIndex].style.display = "block";

    } else {
        // console.log(imageContainer.children[currentIndex += 1]);
        imageContainer.children[currentIndex].style.display = "none";
        imageContainer.children[currentIndex += 1].style.display = "block";
    }
 }
// function leftSlide() {
//     if (currentIndex === 0) {
//         currentIndex = 7;
//         console.log(imageContainer.children[currentIndex-=1]);
//     } else {
//          console.log(imageContainer.children[currentIndex -= 1]);
//     }
//  }
