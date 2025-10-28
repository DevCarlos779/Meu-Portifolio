const menu = document.getElementById("mobile-menu");
const navbar = document.getElementById("nav-bar");
const nav_links = document.getElementsByClassName("item-nav");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active")
})

Array.from(nav_links).forEach(link => { 
    link.addEventListener("click", () => {  
        navbar.classList.remove("active"); 
    });
});






