// Custom Scripts
document.addEventListener("DOMContentLoaded", function() {
    // AOS
    AOS.init({
        once: true
    });
});

document.getElementById('show_more_tools').addEventListener('click', function(event) {
    event.preventDefault()

    document.getElementById('show_more_tools_container').style.display = "none";
    document.getElementById('hide_more_tools_container').style.display = "flex";
    document.getElementById('more_tools').style.display = "flex";
});

document.getElementById('hide_more_tools').addEventListener('click', function(event) {
    event.preventDefault()

    document.getElementById('show_more_tools_container').style.display = "flex";
    document.getElementById('hide_more_tools_container').style.display = "none";
    document.getElementById('more_tools').style.display = "none";
});
