
        window.onscroll = function() {
    updateProgressBar();
    toggleStickyNavbar();
};

function updateProgressBar() {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (windowScroll / documentHeight) * 100;
    const progressBar = document.getElementById("progress-bar");
    
    if (progressBar) {
        progressBar.style.width = scrollPercent + "%";
    } else {
        console.warn("Progress bar element not found.");
    }
}

function toggleStickyNavbar() {
    const navbar = document.getElementById("header");
    const sticky = navbar.offsetTop;
    console.log(sticky) 
    console.log(window.pageYOffset)
    if (window.pageYOffset >= 100) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

