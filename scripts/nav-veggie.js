document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav_veggie").addEventListener("click", function () {
        var menu = document.querySelector('.veggie');
        menu.classList.toggle('toggled');
        e.preventDefault();
    });
});
