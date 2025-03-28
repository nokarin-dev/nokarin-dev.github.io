/**
 * @author nokarin-dev
 * @license MIT
 * @copyright nokarin-dev
 * @file menu.js
 */

const toggleButton = document.getElementById("toggleMenu");
const closeButton = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
    menu.classList.remove("-translate-x-full");
});

closeButton.addEventListener("click", () => {
    menu.classList.add("-translate-x-full");
});