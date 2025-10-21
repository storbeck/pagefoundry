// Modern Landscaping Site JavaScript with Parallax and Animations

class LandscapeAnimator {
    constructor() {
        this.elements = [];
        this.parallaxElements = [];
        this.isScrolling = false;
        this.lastScrollY = 0;
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupParallaxElements();
        this.setupSmoothScrolling();
        this.setupAnimatedText();
        this.setupMobileMenu();
        this.bindEvents();
        
        // Trigger initial load animations
        this.handleInitialLoad();
    }
    
    handleInitialLoad() {
        // Animate hero title lines sequentially
        const titleLines = document.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            const delay = line.dataset.delay || (index + 1) * 200;
            setTimeout(() => {
                line.style.animationDelay = `${delay}ms`;
            }, 100);
        });
        
        // Animate other hero elements
        const heroElements = document.querySelectorAll('.hero .animate-text');
        heroElements.forEach(el => {
            const delay = el.dataset.delay || 0;
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delay);
        });
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all animation elements
        const animationElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
        animationElements.forEach(el => {
            this.observer.observe(el);
        });
    }
    
    animateElement(element) {
        const delay = element.dataset.delay || 0;
        
        setTimeout(() => {
            element.classList.add('animate');
        }, delay);
    }
    
    setupParallaxElements() {
        this.parallaxElements = document.querySelectorAll('.parallax-element, .parallax-bg, .parallax-bg-fixed');
        
        // Set initial positions with slower, more subtle speeds
        this.parallaxElements.forEach(element => {
            if (element.classList.contains('parallax-bg') || element.classList.contains('parallax-bg-fixed')) {
                element.dataset.speed = element.dataset.speed || '0.2'; // Much slower for backgrounds
            } else {
                element.dataset.speed = element.dataset.speed || '0.1'; // Very subtle for other elements
            }
        });
    }
    
    updateParallax() {
        if (window.innerWidth <= 768) return; // Disable on mobile
        
        const scrollY = window.pageYOffset;
        
        this.parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.speed);
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const windowHeight = window.innerHeight;
            
            // Only apply parallax if element is near viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                const yPos = -(scrollY - elementTop) * speed;
                
                if (element.classList.contains('parallax-bg') || element.classList.contains('parallax-bg-fixed')) {
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                } else {
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
        });
    }
    
    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    this.smoothScrollTo(target);
                }
            });
        });
    }
    
    smoothScrollTo(target) {
        const targetPosition = target.offsetTop - 80; // Account for fixed header
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;
        
        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };
        
        requestAnimationFrame(animation);
    }
    
    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    setupAnimatedText() {
        // Stagger animation delays for service cards and project cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 100}ms`;
        });
        
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 150}ms`;
        });
        
        // Add subtle hover animations
        this.setupHoverAnimations();
    }
    
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (!mobileToggle) return;
        
        // Toggle mobile menu
        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('mobile-open');
            
            if (isOpen) {
                navLinks.classList.remove('mobile-open');
                mobileToggle.classList.remove('open');
            } else {
                navLinks.classList.add('mobile-open');
                mobileToggle.classList.add('open');
            }
        });
        
        // Close menu when clicking on nav links
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                mobileToggle.classList.remove('open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('mobile-open');
                mobileToggle.classList.remove('open');
            }
        });
    }
    
    setupHoverAnimations() {
        // Enhanced button hover effects
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });
        
        // Service card hover effects
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Image hover effects
        const images = document.querySelectorAll('.image-container img');
        images.forEach(img => {
            const container = img.closest('.image-container');
            if (container) {
                container.addEventListener('mouseenter', () => {
                    img.style.transform = 'scale(1.05)';
                });
                
                container.addEventListener('mouseleave', () => {
                    img.style.transform = 'scale(1)';
                });
            }
        });
    }
    
    setupScrollHeader() {
        const header = document.querySelector('.header');
        let lastScrollY = 0;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.pageYOffset;
            
            if (currentScrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.backdropFilter = 'blur(20px)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = 'none';
            }
            
            // Hide header on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    bindEvents() {
        // Throttled scroll event for parallax
        window.addEventListener('scroll', this.throttle(() => {
            this.updateParallax();
        }, 16)); // ~60fps
        
        // Setup scroll header behavior
        this.setupScrollHeader();
        
        // Resize handler
        window.addEventListener('resize', this.debounce(() => {
            this.updateParallax();
        }, 250));
        
        // Page load handler
        window.addEventListener('load', () => {
            this.updateParallax();
        });
    }
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    debounce(func, wait) {
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
}

// Enhanced scroll animations for specific elements
class ScrollAnimations {
    constructor() {
        this.animatedElements = new Map();
        this.init();
    }
    
    init() {
        this.observeElements();
        this.setupCounterAnimations();
    }
    
    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerAnimation(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe specific animation elements
        const elements = document.querySelectorAll('.service-card, .project-card, .featured-testimonial, .about-features');
        elements.forEach(el => observer.observe(el));
    }
    
    triggerAnimation(element) {
        if (this.animatedElements.has(element)) return;
        
        this.animatedElements.set(element, true);
        
        if (element.classList.contains('service-card')) {
            this.animateServiceCard(element);
        } else if (element.classList.contains('project-card')) {
            this.animateProjectCard(element);
        } else if (element.classList.contains('about-features')) {
            this.animateFeatureNumbers(element);
        }
    }
    
    animateServiceCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
    
    animateProjectCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95) translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
        }, 150);
    }
    
    animateFeatureNumbers(container) {
        const numbers = container.querySelectorAll('.feature-number');
        
        numbers.forEach((number, index) => {
            const finalValue = parseInt(number.textContent);
            const duration = 2000;
            const increment = finalValue / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    current = finalValue;
                    clearInterval(timer);
                }
                
                if (number.textContent.includes('+')) {
                    number.textContent = Math.floor(current) + '+';
                } else if (number.textContent.includes('%')) {
                    number.textContent = Math.floor(current) + '%';
                } else {
                    number.textContent = Math.floor(current);
                }
            }, 16);
        });
    }
    
    setupCounterAnimations() {
        // Additional counter animations can be added here
    }
}

// Utility class for enhanced interactions
class InteractionEffects {
    constructor() {
        this.setupMagneticButtons();
        this.setupImageTiltEffects();
        this.setupTextRevealAnimations();
    }
    
    setupMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-outline');
        
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const distance = Math.sqrt(x * x + y * y);
                const strength = Math.min(distance / 50, 1);
                
                const moveX = (x / rect.width) * 10 * (1 - strength);
                const moveY = (y / rect.height) * 10 * (1 - strength);
                
                btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    setupImageTiltEffects() {
        const images = document.querySelectorAll('.project-image, .about-image');
        
        images.forEach(img => {
            img.addEventListener('mousemove', (e) => {
                const rect = img.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * -5;
                const rotateY = (x - centerX) / centerX * 5;
                
                img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }
    
    setupTextRevealAnimations() {
        // Split text animations for section titles
        const titles = document.querySelectorAll('.section-title');
        
        titles.forEach(title => {
            const text = title.textContent;
            title.innerHTML = '';
            
            const words = text.split(' ');
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.textContent = word + ' ';
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                span.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
                title.appendChild(span);
            });
        });
        
        // Trigger reveal animation
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                }
            });
        }, { threshold: 0.5 });
        
        titles.forEach(title => titleObserver.observe(title));
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animator = new LandscapeAnimator();
    const scrollAnimations = new ScrollAnimations();
    const interactionEffects = new InteractionEffects();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization
window.addEventListener('load', () => {
    // Remove unused CSS classes after animations
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.fade-in-up.animate, .fade-in-left.animate, .fade-in-right.animate');
        animatedElements.forEach(el => {
            el.classList.remove('fade-in-up', 'fade-in-left', 'fade-in-right');
        });
    }, 3000);
});