const slider = document.querySelector(".slideshow-container") as HTMLDivElement;
const parallax = document.querySelector(".thumbnail") as HTMLImageElement;

let holding:boolean = false;
let firstClickX:number;
let alreadyLeftScrolled:number; 

slider.addEventListener("mousedown", e => {
    holding = true;
    firstClickX = e.pageX - slider.offsetLeft;
    alreadyLeftScrolled = slider.scrollLeft;
    console.log(alreadyLeftScrolled);
    
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