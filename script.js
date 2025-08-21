// Mobile nav
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => nav.classList.toggle('open'));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Slider
const slidesWrap = document.getElementById('slides');
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsWrap = document.getElementById('dots');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function buildDots(){
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    if(i===0) b.classList.add('active');
    b.addEventListener('click', ()=>goTo(i));
    dotsWrap.appendChild(b);
  });
}
function setActiveDot(i){
  dotsWrap.querySelectorAll('button').forEach((d,idx)=>{
    d.classList.toggle('active', idx===i);
  });
}
function goTo(i){
  index = (i + slides.length) % slides.length;
  slidesWrap.style.transform = `translateX(-${index*100}%)`;
  setActiveDot(index);
}
function nextSlide(){ goTo(index+1); }
function prevSlide(){ goTo(index-1); }

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
buildDots();

// Auto-play every 6s (pause on hover)
let timer = setInterval(nextSlide, 6000);
slidesWrap.addEventListener('mouseenter', ()=>clearInterval(timer));
slidesWrap.addEventListener('mouseleave', ()=> timer = setInterval(nextSlide, 6000));
