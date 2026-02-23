const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
reveals.forEach(el => {
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;
if (elementTop < windowHeight - 100) {
el.classList.add('active');
}
});
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(e) {
e.preventDefault();

const data = new FormData(form);

const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
method: "POST",
body: data,
headers: {
'Accept': 'application/json'
}
});

if (response.ok) {
form.reset();
document.getElementById("success-message").style.display = "block";
}
});
