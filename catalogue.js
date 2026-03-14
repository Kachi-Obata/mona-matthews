// ──────────────────────────────────────
// Header Show / Hide on Scroll
// ──────────────────────────────────────
const header = document.querySelector('.cat-header');
let lastScroll = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 120) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }

            lastScroll = currentScroll;
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ──────────────────────────────────────
// Scroll-Triggered Fade-In for Hero Content
// ──────────────────────────────────────
const heroContentBlocks = document.querySelectorAll('.cat-hero-content');

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

heroContentBlocks.forEach(block => heroObserver.observe(block));

// ──────────────────────────────────────
// Subtle Parallax on Hero Images
// ──────────────────────────────────────
const heroSections = document.querySelectorAll('.cat-hero');

function handleParallax() {
    heroSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only apply parallax when section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
            const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
            const translateY = (scrollPercent - 0.5) * 40; // subtle movement
            const image = section.querySelector('.cat-hero-image');
            if (image) {
                image.style.transform = `translateY(${translateY}px) scale(1.05)`;
            }
        }
    });
}

window.addEventListener('scroll', () => {
    window.requestAnimationFrame(handleParallax);
}, { passive: true });

// Initial call
handleParallax();

// ──────────────────────────────────────
// Mobile Menu Toggle
// ──────────────────────────────────────
const menuToggle = document.querySelector('.cat-menu-toggle');
const nav = document.querySelector('.cat-nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('mobile-open');
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('mobile-open');
        });
    });
}

// ──────────────────────────────────────
// Hide Scroll Indicator After First Scroll
// ──────────────────────────────────────
const scrollIndicator = document.querySelector('.cat-scroll-indicator');
if (scrollIndicator) {
    let indicatorHidden = false;
    window.addEventListener('scroll', () => {
        if (!indicatorHidden && window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.5s ease';
            indicatorHidden = true;
        }
    }, { passive: true });
}
