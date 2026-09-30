/**
 * Header & Navigation Component
 */
import { BRAND_CONFIG } from '../config.js';

export function initHeader() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link, .drawer-sublink');

  // Sticky header scroll behavior
  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  function openDrawer() {
    mobileToggle.classList.add('open');
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileToggle.classList.remove('open');
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // Close drawer on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Multi-page active link detection
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .drawer-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else if (!linkHref.startsWith('#')) {
      link.classList.remove('active');
    }
  });

  // Active state scrollspy only on index.html with in-page hash links
  if (currentPath === 'index.html' || currentPath === '') {
    const sections = document.querySelectorAll('section[id]');
    function highlightNavOnScroll() {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 140;
        const sectionId = current.getAttribute('id');
        const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && activeLink) {
          document.querySelectorAll('.nav-menu a[href^="#"]').forEach(l => l.classList.remove('active'));
          activeLink.classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
  }
}
