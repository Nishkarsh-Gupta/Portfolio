const btn = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

btn.addEventListener("click", function() {
    console.log("hii");
    navbar.classList.toggle("change");
});