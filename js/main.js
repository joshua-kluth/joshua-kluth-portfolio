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
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            // Element is visible if any part of it is in viewport
            return (
                rect.top <= windowHeight - 50 && // Element top is above bottom of screen (with 50px buffer)
                rect.bottom >= 0 // Element bottom is below top of screen
            );
        }
        
        // Function to reveal elements
        function revealOnScroll() {
            let delay = 0;
            revealElements.forEach((element) => {
                if (isInViewport(element) && !element.classList.contains('revealed')) {
                    // Add stagger delay only for elements being revealed together
                    setTimeout(() => {
                        element.classList.add('revealed');
                    }, delay);
                    delay += 50; // Stagger by 50ms
                }
            });
        }
        
        // Initial check on page load (with slight delay to ensure page is rendered)
        setTimeout(() => {
            revealOnScroll();
        }, 100);
        
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
        
        // Also check on page resize (in case viewport changes)
        window.addEventListener('resize', debounce(revealOnScroll, 200));
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
// Contact Form AJAX Submission
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const submitBtn = document.getElementById('submit-btn');
            const submitText = document.getElementById('submit-text');
            const formStatus = document.getElementById('form-status');
            const formData = new FormData(contactForm);
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';
            formStatus.style.display = 'none';
            
            try {
                // Submit form via AJAX
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success!
                    formStatus.style.display = 'block';
                    formStatus.style.backgroundColor = '#d1fae5';
                    formStatus.style.color = '#065f46';
                    formStatus.style.border = '1px solid #10b981';
                    formStatus.innerHTML = '✓ Message sent successfully! I\'ll get back to you soon.';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button after delay
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitText.textContent = 'Send Message';
                    }, 2000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error occurred
                formStatus.style.display = 'block';
                formStatus.style.backgroundColor = '#fee2e2';
                formStatus.style.color = '#991b1b';
                formStatus.style.border = '1px solid #ef4444';
                formStatus.innerHTML = '✗ Oops! There was a problem sending your message. Please try again or email me directly.';
                
                // Re-enable button
                submitBtn.disabled = false;
                submitText.textContent = 'Send Message';
            }
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
