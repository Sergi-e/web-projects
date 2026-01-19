// Simple form submission handling
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for reaching out! I’ll get back to you soon.");
    form.reset();
});
