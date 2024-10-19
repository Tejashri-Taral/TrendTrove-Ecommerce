const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

searchIcon.addEventListener('click', () => {
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
});

// Toggle function for hamburger menu
function toggleMenu() {
    navLinks.classList.toggle('show');
}
