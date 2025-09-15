const rightBtn = document.getElementById("right-arrow");
const leftBtn = document.getElementById("left-arrow");
const imageContainer = document.getElementById("image-container");
let currentIndex = 0;

// console.log(imageContainer.children[0]);

function rightSlide() {
    if (currentIndex === 7) {
        currentIndex = 0;
        console.log(imageContainer.children[currentIndex]);
        // imageContainer.children[currentIndex].src;
        
    } else {
        
        console.log(imageContainer.children[currentIndex += 1]);
        // imageContainer.children[currentIndex += 1].src;
        // imageContainer.children[currentIndex += 1].style.transition = "all 10s ease-in-out";
        // for (let i = 0; i < imageContainer.children.length; i++) {
        //     imageContainer.children[i].style.tr = "none";
        // }
        // imageContainer.children[currentIndex].style.display = "block";
    }
 }
function leftSlide() {

 }
