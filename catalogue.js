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
// Slide-in Mobile Menu Panel
// ──────────────────────────────────────
const menuToggle = document.querySelector('.cat-menu-toggle');
const mobilePanel = document.getElementById('mobilePanel');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobilePanelClose = document.getElementById('mobilePanelClose');

function openMobileMenu() {
    mobilePanel.classList.add('active');
    mobileOverlay.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobilePanel.classList.remove('active');
    mobileOverlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuToggle) {
    menuToggle.addEventListener('click', openMobileMenu);
}

if (mobilePanelClose) {
    mobilePanelClose.addEventListener('click', closeMobileMenu);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

// Close menu when a nav link is clicked
if (mobilePanel) {
    mobilePanel.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
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
