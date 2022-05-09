const card = document.getElementsByClassName('course');
const leftControl = document.getElementById("leftControl");
const rightControl = document.getElementById("rightControl");
const courseList = document.getElementById("courseList");
const carouselWidth = document.getElementById("cursesCarousel").getBoundingClientRect();

let showCards = 0;
switch (carouselWidth.width) {
    case 1480:
        showCards = 4;
        break;
    case 1100:
        showCards = 3;
        break;
    case 755:
        showCards = 2;
        break
    case 395:
        showCards = 1;
        break
    case 358:
        showCards = 0.5;
        break
}

let x = 0;
let contLeft = 0;
let contRight = (card.length - showCards)*(-350);

leftControl.addEventListener("click", function(){
    x += 350;
    if (x > contLeft) {
        x = contRight - 350
    } else {
        courseList.style.marginLeft = x + "px";
    }
});

rightControl.addEventListener("click", function(){
    x += -350;

    if (x < contRight) {
        x = 350
    } else {
        courseList.style.marginLeft = x + "px";
    }
});
