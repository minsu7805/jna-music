function initMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

initMenu();

/* Hero slider */
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideTimer;

function goSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  currentSlide = index;
  if (slides[index]) slides[index].classList.add('active');
  if (dots[index]) dots[index].classList.add('active');
}

function nextSlide() {
  goSlide((currentSlide + 1) % slides.length);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    goSlide(i);
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 5000);
  });
});

if (slides.length > 1) {
  slideTimer = setInterval(nextSlide, 5000);
}

/* Facility slider */
const facTrack = document.getElementById('facility-track');
const facSlides = facTrack ? facTrack.querySelectorAll('.facility-slide') : [];
const facCurrent = document.getElementById('fac-current');
const facPrev = document.querySelector('.fac-prev');
const facNext = document.querySelector('.fac-next');
let facIndex = 0;

function updateFacility() {
  if (!facTrack) return;
  facTrack.style.transform = `translateX(-${facIndex * 100}%)`;
  if (facCurrent) facCurrent.textContent = facIndex + 1;
}

if (facPrev) {
  facPrev.addEventListener('click', () => {
    facIndex = (facIndex - 1 + facSlides.length) % facSlides.length;
    updateFacility();
  });
}

if (facNext) {
  facNext.addEventListener('click', () => {
    facIndex = (facIndex + 1) % facSlides.length;
    updateFacility();
  });
}

if (facTrack) {
  facTrack.style.display = 'flex';
  facTrack.style.transition = 'transform 0.4s ease';
}
