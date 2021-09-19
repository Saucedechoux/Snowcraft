const slider = document.querySelector(".slideshow-container") as HTMLDivElement;
const title = document.querySelector(".title") as HTMLHeadingElement;
const header = document.querySelector(".header") as HTMLDivElement;
const loader = document.querySelector(".loader") as HTMLDivElement;
const body = document.querySelector("body") as HTMLBodyElement; 

window.addEventListener("load", () => {
    loader.classList.add("fondu-out")
    body.style.overflowY = "scroll"
})

let holding:boolean = false;
let firstClickX:number;
let alreadyLeftScrolled:number;

window.addEventListener("scroll", () => {
    let rect:DOMRect = title?.getBoundingClientRect();
    if (rect.top <= 100 && window.innerWidth > 565) {
        header.classList.add("fondu-out")
    } else {
        header.classList.remove("fondu-out")
    }
    
})

slider.addEventListener("mousedown", e => {
    holding = true;
    firstClickX = e.pageX - slider.offsetLeft;
    alreadyLeftScrolled = slider.scrollLeft;
})

slider.addEventListener("mousemove", e => {
    if(!holding) return;

    const x = e.pageX - slider.offsetLeft;
    const scrolled = (x - firstClickX) * 1.5;
    slider.scrollLeft = alreadyLeftScrolled - scrolled;
})

slider.addEventListener("mouseup", () => {
    holding = false;
})

slider.addEventListener("mouseleave", () => {
    holding = false;
})

slider.addEventListener("touchstart", e => {
    holding = true;
    firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;
    alreadyLeftScrolled = slider.scrollLeft;
})

slider.addEventListener("touchend", () => {
    holding = false;
})

slider.addEventListener("touchmove", e => {
    if (!holding) return;
    const x = e.targetTouches[0].pageX - slider.offsetLeft;
    const scrolled = (x - firstClickX) * 1.5;
    slider.scrollLeft = alreadyLeftScrolled - scrolled;
})