const header = document.querySelector('[data-header]');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const filterButtons = document.querySelectorAll('[data-filter]');
const year = document.querySelector('#year');
const projectCards = document.querySelectorAll('.project-card');

function setHeaderState() {
  header?.classList.toggle('is-scrolled', window.scrollY > 8);
}

function filterProjects(filter) {
  projectCards.forEach((card) => {
    const isVisible = filter === 'all' || card.dataset.category === filter;
    card.hidden = !isVisible;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    filterProjects(filter);
  });
});

toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('is-open');
});

nav?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('scroll', setHeaderState, { passive: true });
if (year) year.textContent = new Date().getFullYear();
setHeaderState();
