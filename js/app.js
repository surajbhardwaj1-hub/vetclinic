/**
 * Main Application Orchestrator
 */
import { initHeader } from './components/header.js';
import { initServices } from './components/services.js';
import { initSecondOpinion } from './components/secondOpinion.js';
import { initAtHome } from './components/atHome.js';
import { initLocations } from './components/locations.js';
import { initTestimonials } from './components/testimonials.js';
import { initFAQ } from './components/faq.js';
import { initBooking } from './components/bookingModal.js';
import { initFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modular components
  initHeader();
  initServices();
  initSecondOpinion();
  initAtHome();
  initLocations();
  initTestimonials();
  initFAQ();
  initBooking();
  initFooter();

  // IntersectionObserver for reveal animations
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Smooth number counter animation for stats
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if ('IntersectionObserver' in window && statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1600;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const stepValue = Math.ceil(target / totalSteps);

          const timer = setInterval(() => {
            count += stepValue;
            if (count >= target) {
              el.textContent = target.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              el.textContent = count.toLocaleString() + suffix;
            }
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(st => statsObserver.observe(st));
  }
});
