/**
 * Footer Component
 * Dynamic year, brand info, and quick actions
 */
import { BRAND_CONFIG } from '../config.js';

export function initFooter() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Floating Back-to-Top Button
  const backToTopBtn = document.querySelector('.float-back-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
