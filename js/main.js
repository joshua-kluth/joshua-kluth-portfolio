// ===========================
// Mobile Navigation Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Toggle active class on hamburger for animation
            hamburger.classList.toggle('active');
            
            // Toggle active class on menu to show/hide
            navMenu.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// ===========================
// Project Filtering
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all') {
                        // Show all cards
                        card.classList.remove('hidden');
                        // Add fade-in animation
                        card.style.animation = 'fadeIn 0.5s ease-out';
                    } else if (cardCategory === filterValue) {
                        // Show matching cards
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeIn 0.5s ease-out';
                    } else {
                        // Hide non-matching cards
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }
});

// ===========================
// Scroll Reveal Animation
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if (revealElements.length > 0) {
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Function to reveal elements
        function revealOnScroll() {
            revealElements.forEach((element, index) => {
                if (isInViewport(element) && !element.classList.contains('revealed')) {
                    // Add delay based on index for stagger effect
                    setTimeout(() => {
                        element.classList.add('revealed');
                    }, index * 50);
                }
            });
        }
        
        // Initial check on page load
        revealOnScroll();
        
        // Check on scroll with throttling for performance
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = window.requestAnimationFrame(function() {
                revealOnScroll();
            });
        });
    }
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle if it's not just "#" or empty
            if (href && href !== '#') {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    // Get header height for offset
                    const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
                    
                    // Calculate position with offset
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ===========================
// Form Validation (Optional Enhancement)
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic client-side validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Check if required fields are filled
            if (name && name.value.trim() === '') {
                isValid = false;
                name.style.borderColor = '#ef4444';
            } else if (name) {
                name.style.borderColor = '';
            }
            
            if (email && email.value.trim() === '') {
                isValid = false;
                email.style.borderColor = '#ef4444';
            } else if (email) {
                email.style.borderColor = '';
            }
            
            if (message && message.value.trim() === '') {
                isValid = false;
                message.style.borderColor = '#ef4444';
            } else if (message) {
                message.style.borderColor = '';
            }
            
            // If form is invalid, prevent submission
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
            
            // Note: For actual email sending, you'll need to:
            // 1. Set up a backend service (PHP, Node.js, etc.)
            // 2. Use a service like Formspree, Netlify Forms, or EmailJS
            // 3. Update the form action attribute with your endpoint
        });
    }
});

// ===========================
// Active Nav Link Highlighting
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        // Check if current page matches link
        if (currentLocation === linkPath || 
            (currentLocation === '/' && linkPath.includes('index.html')) ||
            (currentLocation.endsWith('/') && linkPath.includes('index.html'))) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Lazy Loading for Images (Optional)
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Check if browser supports Intersection Observer
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
});

// ===========================
// Print PDF Helper (Optional)
// ===========================
function printResume() {
    window.print();
}

// ===========================
// Scroll to Top Button (Optional)
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--accent-primary);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// Performance: Debounce Function
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// Console Message (Optional)
// ===========================
console.log('%cWelcome to My Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository on GitHub!', 'color: #6b7280; font-size: 14px;');
