// Main JavaScript for Ekalavya Childcare

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu?.classList.contains('active') &&
            !e.target.closest('.nav-menu') &&
            !e.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');
            menuBtn?.setAttribute('aria-expanded', 'false');
            menuIcon?.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                // Close mobile menu if open
                navMenu?.classList.remove('active');
                menuBtn?.setAttribute('aria-expanded', 'false');
                menuIcon?.classList.remove('active');

                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Testimonial Slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        testimonialCards.forEach(card => {
            card.classList.remove('active');
        });

        // Remove active class from all dots
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show current slide and activate corresponding dot
        testimonialCards[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        showSlide(currentSlide);
    }

    // Event listeners for testimonial controls
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Dot navigation
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-play testimonials
    let testimonialInterval = setInterval(nextSlide, 5000);

    // Pause auto-play on hover
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        testimonialsContainer.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextSlide, 5000);
        });
    }

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Clear previous error states
            contactForm.querySelectorAll('.error').forEach(el => {
                el.classList.remove('error');
                const errorMessage = el.nextElementSibling;
                if (errorMessage?.classList.contains('error-message')) {
                    errorMessage.remove();
                }
            });

            // Validate required fields
            contactForm.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    showError(field, 'This field is required');
                } else if (field.type === 'email' && !isValidEmail(field.value)) {
                    isValid = false;
                    showError(field, 'Please enter a valid email address');
                } else if (field.id === 'phone' && !isValidPhone(field.value)) {
                    isValid = false;
                    showError(field, 'Please enter a valid phone number');
                }
            });

            if (isValid) {
                // Here you would typically send the form data to your server
                const formData = new FormData(contactForm);

                // Simulate form submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';

                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }, 1500);
            }
        });
    }

    // Intersection Observer for animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Load gallery images dynamically
    loadGalleryImages();
});

// Utility functions
function showError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\d\s-+()]{10,}$/;
    return re.test(phone);
}

// Load gallery images dynamically (commented out since images are already in HTML)
// function loadGalleryImages() {
//     const galleryGrid = document.querySelector('.gallery-grid');
//     if (!galleryGrid) return;

//     const images = [
//         { src: 'assets/images/gallery/play.jpg', alt: 'Children playing together' },
//         { src: 'assets/images/gallery/art.jpg', alt: 'Art and craft activities' },
//         { src: 'assets/images/gallery/reading.jpg', alt: 'Story time session' },
//         { src: 'assets/images/gallery/outdoor.jpg', alt: 'Outdoor activities' },
//         { src: 'assets/images/gallery/music.jpg', alt: 'Music and movement class' },
//         { src: 'assets/images/gallery/learning.jpg', alt: 'Interactive learning session' }
//     ];

//     images.forEach(image => {
//         const item = document.createElement('div');
//         item.className = 'gallery-item animate-on-scroll';

//         const img = document.createElement('img');
//         img.src = image.src;
//         img.alt = image.alt;
//         img.loading = 'lazy';

//         item.appendChild(img);
//         galleryGrid.appendChild(item);
//     });

// Add fade-in animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.6s ease forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
