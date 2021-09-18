"use strict";
const slider = document.querySelector(".slideshow-container");
const parallax = document.querySelector(".thumbnail");
let holding = false;
let firstClickX;
let alreadyLeftScrolled;
slider.addEventListener("mousedown", e => {
    holding = true;
    firstClickX = e.pageX - slider.offsetLeft;
    alreadyLeftScrolled = slider.scrollLeft;
    console.log(alreadyLeftScrolled);
});
slider.addEventListener("mousemove", e => {
    if (!holding)
        return;
    const x = e.pageX - slider.offsetLeft;
    const scrolled = (x - firstClickX) * 1.5;
    slider.scrollLeft = alreadyLeftScrolled - scrolled;
});
slider.addEventListener("mouseup", () => {
    holding = false;
});
slider.addEventListener("mouseleave", () => {
    holding = false;
});
