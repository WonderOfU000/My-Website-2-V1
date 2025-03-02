// scripts.js

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Portfolio Modals (Example Code - You'll need to add actual modal functionality)
document.querySelectorAll('.portfolio-grid div').forEach(item => {
    item.addEventListener('click', () => {
        // Add your modal opening code here
        alert('Open modal with project details');
    });
});
