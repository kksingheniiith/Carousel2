const leftButton = document.getElementById("carousel-button-left");
const rightButton = document.getElementById("carousel-button-right");

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = Array.from(carouselSlide.children);

leftButton.addEventListener("click", goToPrevSlide);
rightButton.addEventListener("click", goToNextSlide);

let counter = 1;

function goToPrevSlide() {
    counter--;
    if(counter == 0) {
        const size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = "translateX(" + (-size * (carouselImages.length-1)) + "px)";
        counter = carouselImages.length;
    } else {
        const size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = "translateX(" + (-size * (counter-1)) + "px)";
    }
}

function goToNextSlide() {
    if(counter == carouselImages.length) {
        const size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = "translateX(" + (0) + "px)";
        counter = 1;
    } else {
        const size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
        counter++;
    }
}