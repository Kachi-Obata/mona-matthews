// ──────────────────────────────────────
// Size-Guide Tab Toggle
// ──────────────────────────────────────
const tabs = document.querySelectorAll('.size-tab');
const tables = document.querySelectorAll('.size-table');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs & tables
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tables.forEach(table => table.classList.remove('active'));

    // Activate clicked tab & matching table
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    document
      .querySelector('.size-table-' + tab.dataset.target)
      .classList.add('active');
  });
});

// ──────────────────────────────────────
// Scroll-Triggered Fade-In Animations
// ──────────────────────────────────────
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeInObserver.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Observe all elements with the fade-in class
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => fadeInObserver.observe(el));
});
