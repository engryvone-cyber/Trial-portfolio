// Mobile nav
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => nav.classList.toggle('open'));

// Year
document.getElementById('year').textContent = new Date().getFullYear();
