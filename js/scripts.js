/**
 * CC Inc - Main Scripts
 * Minimal JS for mobile navigation and sticky header effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            // Toggle Class for Menu Animation and Visibility
            mobileBtn.classList.toggle('open');
            nav.classList.toggle('open');
            
            // Toggle Aria Expanded
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    mobileBtn.classList.remove('open');
                    mobileBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !mobileBtn.contains(e.target) && nav.classList.contains('open')) {
                nav.classList.remove('open');
                mobileBtn.classList.remove('open');
                mobileBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Sticky Header Effect (Optional Shadow on Scroll) ---
    const header = document.getElementById('site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


