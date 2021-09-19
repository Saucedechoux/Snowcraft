"use strict";
const slider = document.querySelector(".slideshow-container");
const title = document.querySelector(".title");
const header = document.querySelector(".header");
const loader = document.querySelector(".loader");
const body = document.querySelector("body");
const discordButton = document.querySelector(".discord-container button");
const packButton = document.querySelector(".pack-container button");
console.log(discordButton);
window.addEventListener("load", () => {
    loader.classList.add("fondu-out");
    setTimeout(loader.style.zIndex = "-10", 210);
    body.style.overflowY = "scroll";
});
let holding = false;
let firstClickX;
let alreadyLeftScrolled;
window.addEventListener("scroll", () => {
    let rect = title === null || title === void 0 ? void 0 : title.getBoundingClientRect();
    if (rect.top <= 100 && window.innerWidth > 565) {
        header.classList.add("fondu-out");
    }
    else {
        header.classList.remove("fondu-out");
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
discordButton.addEventListener("click", () => {
    location.assign("https://discord.gg/EHcbuCjDbr");
});
packButton.addEventListener("click", () => {
    location.assign("./packs/Snowstorm.zip");
});
discordButton.addEventListener("touchend", () => {
    location.assign("https://discord.gg/EHcbuCjDbr");
});
packButton.addEventListener("touchend", () => {
    location.assign("../packs/Snowstorm.zip");
});
