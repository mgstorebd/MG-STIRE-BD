// script.js

// Toggle active class on navigation items
document.querySelectorAll('.bottom-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.bottom-nav a').forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Example: Pop-up alert on the "Contact Us" page
if (window.location.pathname.includes('contact.html')) {
    alert('Welcome to the Contact Us page!');
}