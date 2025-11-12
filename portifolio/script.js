const menu = document.getElementById("mobile-menu");
const navbar = document.getElementById("nav-bar");
const nav_links = document.getElementsByClassName("item-nav");
const focusFLow = document.getElementById("focus-flow");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active")
})

Array.from(nav_links).forEach(link => { 
    link.addEventListener("click", () => {  
        navbar.classList.remove("active"); 
    });
});

focusFLow.addEventListener("click", () => {
    window.open('https://focus-flow-mocha.vercel.app', '_blank');
})






