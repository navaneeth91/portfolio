// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Highlight Active Section in Navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust for header height
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Toggle Mobile Menu (Optional for Mobile-Friendly Design)
const mobileMenu = document.querySelector('.navbar');
const menuButton = document.querySelector('.menu-toggle');

menuButton?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
