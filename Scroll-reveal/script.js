const box = document.getElementById('box');
const text = document.querySelector('.text');

window.addEventListener('scroll', () => {
  const { top } = box.getBoundingClientRect();

  if (top < window.innerHeight * 0.8) { // If the box is 80% visible
    box.style.opacity = 1;
    box.style.transform = 'translateY(0)';
    text.classList.add('show');
  }
});
