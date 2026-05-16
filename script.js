// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

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
