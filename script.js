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
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Portfolio Modals
document.querySelectorAll('.portfolio-grid div').forEach(item => {
    item.addEventListener('click', () => {
        // Example Modal Functionality
        alert('Open modal with project details');
    });
});

// Fade-in effect
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Animated skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar-inner');
    skillBars.forEach(bar => {
        const width = bar.dataset.skillLevel;
        bar.style.width = `${width}%`;
    });
});

// Accessibility Enhancements
document.querySelectorAll('a').forEach(anchor => {
    anchor.setAttribute('tabindex', '0');
    anchor.setAttribute('role', 'link');
});

// Contact Form Validation (Example)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Example validation logic
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;
    if (name && email && message) {
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
