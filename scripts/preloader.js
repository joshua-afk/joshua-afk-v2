document.addEventListener('readystatechange', event => {
    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        setTimeout(() => {
            if (window.innerWidth < 1200) {
                document.getElementById('preloader').style.clipPath = "circle(25% at 100% 4%)";
            } else if (window.innerWidth <= 1522) {
                document.getElementById('preloader').style.clipPath = "circle(30% at 100% -10%)";
            } else {
                document.getElementById('preloader').style.clipPath = "circle(50% at 100% -30%)";
            }
        }, 1000);

        setTimeout(() => {
            document.getElementById('preloader').style.clipPath = "circle(0% at 100% 0%)";
        }, 1400);
    }
});
