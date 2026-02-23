// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, {
threshold: 0.1
});

reveals.forEach(el => observer.observe(el));


// Contact Form
const form = document.getElementById("contact-form");

if (form) {
form.addEventListener("submit", async function(e) {
e.preventDefault();

const data = new FormData(form);

const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
method: "POST",
body: data,
headers: { 'Accept': 'application/json' }
});

if (response.ok) {
form.reset();
document.getElementById("success-message").style.display = "block";
}
});
}
