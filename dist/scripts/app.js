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
var nav_menu_open  = document.getElementById('nav_menu_open'); 
var nav_menu_close = document.getElementById('nav_menu_close'); 

nav_menu_open.addEventListener('mouseover', function(event) {
    nav_menu.style.clipPath = "circle(20% at 100% 0%)";
});

nav_menu_open.addEventListener('mouseout', function(event) {
    nav_menu.style.clipPath = "circle(0% at 100% 0%)";
});

nav_menu_open.addEventListener('click', function(event) {
    event.preventDefault()

    nav_menu_open.style.display = "none";
    nav_menu_close.style.display = "block";

    nav.style.position = "fixed";
    nav_menu.style.clipPath = "circle(100%)";
});

nav_menu_close.addEventListener('click', function(event) {
    event.preventDefault()

    nav_menu_open.style.display = "block";
    nav_menu_close.style.display = "none";

    nav.style.position = "absolute";
    nav_menustyle.clipPath = "circle(0% at 100% 0%)";
});

nav_menu_close.addEventListener('mouseover', function(event) {
    nav_menu.style.clipPath = "circle(100%)";
});
