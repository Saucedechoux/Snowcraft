"use strict";
const slider = document.querySelector(".slideshow-container");
const title = document.querySelector(".title");
const header = document.querySelector(".header");
let holding = false;
let firstClickX;
let alreadyLeftScrolled;
window.addEventListener("scroll", () => {
    let rect = title === null || title === void 0 ? void 0 : title.getBoundingClientRect();
    if (rect.top <= 100 && window.innerWidth > 565) {
        header.classList.add("scroll");
    }
    else {
        header.classList.remove("scroll");
    }
});
slider.addEventListener("mousedown", e => {
    holding = true;
    firstClickX = e.pageX - slider.offsetLeft;
    alreadyLeftScrolled = slider.scrollLeft;
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
slider.addEventListener("touchstart", e => {
    holding = true;
    firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;
    alreadyLeftScrolled = slider.scrollLeft;
});
slider.addEventListener("touchend", () => {
    holding = false;
});
slider.addEventListener("touchmove", e => {
    if (!holding)
        return;
    const x = e.targetTouches[0].pageX - slider.offsetLeft;
    const scrolled = (x - firstClickX) * 1.5;
    slider.scrollLeft = alreadyLeftScrolled - scrolled;
});
