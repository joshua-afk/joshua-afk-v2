// Custom Scripts
document.addEventListener("DOMContentLoaded", function() {
    // AOS
    AOS.init({
        once: true
    });
});

// Tools
document.getElementById('show_more_tools').addEventListener('click', function(event) {
    event.preventDefault()

    document.getElementById('show_more_tools_container').style.display = "none";
    document.getElementById('hide_more_tools_container').style.display = "flex";
    document.getElementById('more_tools').style.height = "1105px";
});

document.getElementById('hide_more_tools').addEventListener('click', function(event) {
    event.preventDefault()

    document.getElementById('hide_more_tools_container').style.display = "none";
    document.getElementById('show_more_tools_container').style.display = "flex";
    document.getElementById('more_tools').style.height = "75px";
});


// Nav Menu
var nav            = document.getElementById('nav'); 
var nav_menu       = document.getElementById('nav_menu'); 
var nav_icon_white = document.getElementById('nav_icon_white'); 
var nav_icon_black = document.getElementById('nav_icon_black'); 
var nav_menu_open  = document.getElementById('nav_menu_open'); 
var nav_menu_close = document.getElementById('nav_menu_close'); 

nav_menu_open.addEventListener('mouseover', function(event) {
    if(window.innerWidth <= 1200){
        nav_menu.style.clipPath = "circle(25% at 100% 4%)";
    } else if(window.innerWidth <= 1522){
        nav_menu.style.clipPath = "circle(30% at 100% -10%)";
    } else {
        nav_menu.style.clipPath = "circle(50% at 100% -30%)";
    }
});

nav_menu_open.addEventListener('mouseout', function(event) {
    nav_menu.style.clipPath = "circle(0% at 100% 0%)";
});

nav_menu_open.addEventListener('click', function(event) {
    event.preventDefault()

    nav_menu_open.style.display = "none";
    nav_menu_close.style.display = "block";

    nav_icon_white.style.display = "none";
    nav_icon_black.style.display = "initial";

    nav_icon.style.color = "#000000";

    nav.style.position = "fixed";
    nav_menu.style.clipPath = "circle(100%)";
});

nav_menu_close.addEventListener('click', function(event) {
    event.preventDefault()

    nav_menu_open.style.display = "block";
    nav_menu_close.style.display = "none";

    nav_icon_white.style.display = "initial";
    nav_icon_black.style.display = "none";

    nav.style.position = "absolute";
    nav_menu.style.clipPath = "circle(0% at 100% 0%)";
});

nav_menu_close.addEventListener('mouseover', function(event) {
    nav_menu.style.clipPath = "circle(100%)";
});
