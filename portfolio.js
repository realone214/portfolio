const hero = document.querySelector(".menu-icon");

hero.addEventListener("click", ()=> toggleMenu());


function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
}
