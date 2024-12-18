// Show navbar when scrolling down
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // downscroll
        navbar.style.transform = "translateY(0)";
    } else {
        // upscroll
        navbar.style.transform = "translateY(-100%)";
    } 
    lastScrollTop = scrollTop;
});