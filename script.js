const cursor = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const results = {
  website: "Great — your brief can focus on a fast, responsive website with strong UI, clear calls-to-action and a visual system that fits your brand.",
  app: "Great — we can focus on the product flow, mobile-first UI, interactive prototypes and a scalable design system.",
  design: "Great — we can focus on your visual identity, social media assets, campaign graphics and a consistent brand language."
};
document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.choice').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    document.querySelector('#choiceResult').textContent = results[button.dataset.choice];
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
