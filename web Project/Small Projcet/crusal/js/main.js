const rightBtn = document.getElementById('right-arrow');
const leftBtn = document.getElementById('left-arrow');
const imageContainer = document.getElementById('image-container');
let currentIndex = 0;

function rightSlide() {
    const images = imageContainer.getElementsByTagName('img');
    if (currentIndex < images.length - 1) {
        currentIndex++;
        const offset = -currentIndex * 300; // Assuming each image is 300px wide
        imageContainer.style.transition = "all 0.3s"
    }
}
function leftSlide() {

}