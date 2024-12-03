
gsap.to("nav li", {
  y: "20px", 
  duration: 1, 
  repeat: -1, 
  yoyo: true, 
  ease: "power1.inOut" 
});


const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const items = document.querySelectorAll('.list .item');

let count = items.length;
let active = 1;

prev.onclick = () => {
  active = active <= 0 ? 0 : active - 1;
  updateCarousel();
}

next.onclick = () => {
  active = active >= count - 1 ? count - 1 : active + 1;
  updateCarousel();
}

function updateCarousel() {
  const widthItem = items[active].offsetWidth;
  const leftTransform = widthItem * (active - 1) * -1;

  prev.style.display = active === 0 ? 'none' : 'block';
  next.style.display = active === count - 1 ? 'none' : 'block';

  gsap.to(list, {
    duration: 0.5,
    ease: "power3.out",
    x: leftTransform,
  });
}

updateCarousel();

















