// Petroplast Landing Page - Main JavaScript

// Translator Class
class Translator {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'es';
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadTranslations();
        this.applyTranslations();
        this.setupLanguageSwitcher();
    }

    async loadTranslations() {
        // Use the translations object from translations.js
        this.translations = translations;
    }

    translate(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    }

    applyTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);

            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else {
                // Convert line breaks to HTML breaks for better formatting
                if (translation && translation.includes('\n')) {
                    element.innerHTML = translation.replace(/\n/g, '<br>');
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update meta tags
        this.updateMetaTags();
    }

    updateMetaTags() {
        document.documentElement.lang = this.currentLang;
        document.title = this.translate('meta.title');

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.translate('meta.description');
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.content = this.translate('meta.keywords');
        }
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.applyTranslations();
        this.updateLanguageSwitcher();
    }

    setupLanguageSwitcher() {
        document.querySelectorAll('[data-lang]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguage(button.dataset.lang);
            });
        });
    }

    updateLanguageSwitcher() {
        const currentLangElement = document.getElementById('current-lang');
        if (currentLangElement) {
            currentLangElement.textContent = this.currentLang.toUpperCase();
        }
    }
}

// Initialize translator
let translator;

document.addEventListener('DOMContentLoaded', function () {
    // Initialize translator
    translator = new Translator();

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Animate navbar links on page load
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('nav-link-loaded');
        }, 300 + (index * 100)); // Stagger animation: 300ms base + 100ms per item
    });

    // Animate language switcher button
    const languageDropdown = document.querySelector('.dropdown');
    if (languageDropdown) {
        setTimeout(() => {
            languageDropdown.classList.add('dropdown-loaded');
        }, 300 + (navLinks.length * 100)); // Appears after all nav links
    }

    // Smooth scrolling for navigation links
    const navbar = document.querySelector('.navbar');
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Function to update scroll margin based on navbar height
    function updateScrollMargin() {
        const navbarHeight = navbar.offsetHeight;
        document.querySelectorAll('section[id]').forEach(section => {
            section.style.scrollMarginTop = `${navbarHeight}px`;
        });
    }
    
    // Update scroll margin on load and resize
    updateScrollMargin();
    window.addEventListener('resize', updateScrollMargin);
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calculate navbar height dynamically
                const navbarHeight = navbar.offsetHeight;
                const offsetTop = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: Math.max(0, offsetTop), // Ensure we don't scroll to negative values
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect - transparent when on hero, solid when reaching about section
    const aboutSection = document.getElementById('about');
    
    function updateNavbarStyle() {
        if (!aboutSection) return;
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const aboutSectionTop = aboutSection.offsetTop;
        const navbarHeight = navbar.offsetHeight;
        // Change navbar style when reaching about section (with some offset for smooth transition)
        const threshold = aboutSectionTop - navbarHeight - 50;
        
        if (scrollTop >= threshold) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-solid');
        } else {
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');
        }
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateNavbarStyle);
    
    // Update on page load
    updateNavbarStyle();
    
    // Update on resize (in case section positions change)
    window.addEventListener('resize', updateNavbarStyle);

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${translator.translate('contact.form.sending')}`;
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual Formspree endpoint)
            setTimeout(() => {
                // Show success message
                showAlert(translator.translate('contact.form.success'), 'success');

                // Reset form
                this.reset();

                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Form validation
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Mobile menu close on link click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Add loading animation to elements
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        element.classList.add('loading');
    });

    // Remove loading class when AOS triggers
    window.addEventListener('aos:in', function () {
        const element = event.target;
        element.classList.add('loaded');
    });
});

// Utility Functions
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Remove existing validation classes
    field.classList.remove('is-valid', 'is-invalid');

    // Remove existing feedback
    const existingFeedback = field.parentNode.querySelector('.invalid-feedback, .valid-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Validation rules
    switch (fieldName) {
        case 'name':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'El nombre debe tener al menos 2 caracteres.';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, ingrese un email válido.';
            }
            break;
        case 'phone':
            if (value && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, ingrese un teléfono válido.';
            }
            break;
        case 'message':
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'El mensaje debe tener al menos 10 caracteres.';
            }
            break;
    }

    // Apply validation result
    if (isValid) {
        field.classList.add('is-valid');
        showFieldFeedback(field, 'valid', 'Campo válido');
    } else {
        field.classList.add('is-invalid');
        showFieldFeedback(field, 'invalid', errorMessage);
    }

    return isValid;
}

function showFieldFeedback(field, type, message) {
    const feedback = document.createElement('div');
    feedback.className = `${type}-feedback`;
    feedback.textContent = message;
    field.parentNode.appendChild(feedback);
}

function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());

    // Create new alert
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(alert);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// Performance optimization
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(function () {
    // Add any scroll-based functionality here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
            .then(function (registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function (err) {
                console.log('ServiceWorker registration failed');
            });
    });
}