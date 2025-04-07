// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

function toggleMenu() {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

document.addEventListener('click', (e) => {
  if (!header.contains(e.target)) {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Close mobile menu after click
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    }
  });
});

// Scroll Reveal Animations
// const revealElements = document.querySelectorAll('.reveal');

// const revealObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     }
//   });
// }, { threshold: 0.1 });

// revealElements.forEach(element => {
//   revealObserver.observe(element);
// });

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Testimonial Carousel
let currentIndex = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

function showTestimonial(index) {
  testimonialSlides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.display = i === index ? 'block' : 'none';
  });
  testimonialSlides[index].classList.add('active');
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonialSlides.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
  showTestimonial(currentIndex);
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', prevTestimonial);
  nextBtn.addEventListener('click', nextTestimonial);
}

const testimonialCarousel = document.querySelector('.testimonial-carousel');
let testimonialInterval = setInterval(nextTestimonial, 5000);

if (testimonialCarousel) {
  testimonialCarousel.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
  testimonialCarousel.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  });
}

showTestimonial(currentIndex);

document.querySelectorAll('#waste-type, #quantity').forEach(input => {
  input.addEventListener('input', calculateImpact);
});
calculateImpact();

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const requiredFields = ['name', 'email', 'phone'];
    let isValid = true;

    requiredFields.forEach(field => {
      const input = contactForm.querySelector(`[name="${field}"]`);
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    if (isValid) {
      alert('Thank you for your message! We will contact you soon.');
      contactForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  });
}

// Language Selector
const langSelect = document.querySelector('.lang-select');
if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    console.log('Selected language:', e.target.value);
    // Implement language change logic here
  });
}

// Hero Video Autoplay
const heroVideo = document.querySelector('.hero-video video');
if (heroVideo) {
  heroVideo.play().catch(error => {
    // Autoplay failed
  });
}

// Dynamic Year Update
const footerText = document.querySelector('footer .footer-bottom p');
if (footerText) {
  footerText.innerHTML = `© ${new Date().getFullYear()} GreenCycle. Committed to a cleaner India 🇮🇳`;
}

// Viewport Height Fix for Mobile
function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setViewportHeight);
setViewportHeight();

// Loader
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Accordion
document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.closest('.accordion-item');
    accordionItem.classList.toggle('active');
  });
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.reveal, .fade-in');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
};

// Trigger reveal on scroll and on load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

