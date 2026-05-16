// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navBtn = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-links');
if (navBtn && navList) {
  navBtn.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navBtn.setAttribute('aria-expanded', String(open));
  });
  navList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navList.classList.remove('open');
      navBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active section highlighting in nav (subtle)
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

if ('IntersectionObserver' in window && navLinks.length) {
  const linkByHash = new Map();
  navLinks.forEach(a => linkByHash.set(a.getAttribute('href'), a));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = linkByHash.get('#' + entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.style.color = '');
        link.style.color = 'var(--text)';
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => io.observe(s));
}
