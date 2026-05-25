// Hero slider
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function goTo(i) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = i;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

setInterval(() => goTo((current + 1) % slides.length), 6000);

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);
