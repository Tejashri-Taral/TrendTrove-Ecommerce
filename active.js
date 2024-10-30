document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab a");
    const currentPage = window.location.pathname;

    tabs.forEach(tab => {
        // Check if the link matches the current page URL
        if (tab.getAttribute("href") === currentPage.split('/').pop()) {
            tab.classList.add("active");
        }
    });
});
