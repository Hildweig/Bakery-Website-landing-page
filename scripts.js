
// Init AOS
    AOS.init();

// Navigation variables
const menu_icon = document.querySelector('.hamburger-menu');
const menu_bars = document.querySelector('.fa-bars');
const menu_x = document.querySelector('.fa-times');

// Navigation menu 
const navigation_menu = document.querySelector('.navigation-links');

menu_icon.addEventListener('click', () => {
    navigation_menu.classList.toggle('show');
    menu_x.classList.toggle('show');
    menu_bars.classList.toggle('hide');
})