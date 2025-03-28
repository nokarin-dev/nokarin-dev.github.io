/**
 * @author nokarin-dev
 * @license MIT
 * @copyright nokarin-dev
 * @file header.js
 */

let lastScrollTop = 0;
let isScrolling;
const header = document.querySelector('header');

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    clearTimeout(isScrolling);

    if (scrollTop > lastScrollTop) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    isScrolling = setTimeout(() => {
        header.style.transform = "translateY(0)";
    }, 300);

    lastScrollTop = scrollTop;
});