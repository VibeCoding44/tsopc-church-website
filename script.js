document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Add shadow to navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navbar) {
        const setOpen = (open) => {
            navbar.classList.toggle('nav-open', open);
            mobileToggle.setAttribute('aria-expanded', String(open));
        };

        mobileToggle.addEventListener('click', () => {
            setOpen(!navbar.classList.contains('nav-open'));
        });

        // Close the menu after following a link
        if (navLinks) {
            navLinks.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => setOpen(false));
            });
        }

        // Close on Escape and return focus to the toggle
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navbar.classList.contains('nav-open')) {
                setOpen(false);
                mobileToggle.focus();
            }
        });
    }

    // Reveal cards on scroll — progressive enhancement only.
    // Cards stay fully visible if motion is reduced or IntersectionObserver is unavailable.
    const cards = document.querySelectorAll('.card');

    if (cards.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.15}s`;
            observer.observe(card);
        });
    }
});
