/**
 * PetAura Platform Core JavaScript (Zero-CORS, Zero-Dependency)
 * Compatible with file:// local viewing as well as production web servers
 */

(function () {
  'use strict';

  // 1. Centralized Brand Configuration
  const BRAND_CONFIG = {
    brandName: "PetAura Veterinary Centre",
    phone: "+91 78276 13920",
    phoneRaw: "917827613920",
    whatsapp: "+91 78276 13920",
    whatsappRaw: "917827613920",
    email: "care@petaura-veterinary.in"
  };

  // 2. Case Review Data for Interactive Teleconsultation
  const CASE_REVIEWS_DATA = {
    "surgery-decisions": {
      title: "Surgery Decision Advisory",
      emoji: "⚖️",
      summary: "Critical secondary evaluation before undergoing expensive or invasive orthopaedic or abdominal operations.",
      turnaround: "24–48 Hours",
      questions: [
        "Can this surgery be safely avoided or postponed?",
        "What are the realistic post-operative recovery expectations?",
        "Can physical therapy or medical therapy work instead?",
        "What is the exact anaesthetic risk for my senior pet?"
      ]
    },
    "oncology-review": {
      title: "Oncology & Tumor Case Review",
      emoji: "🔬",
      summary: "Comprehensive biopsy and CT/radiograph review to determine tumor staging, surgical feasibility, and comfort-focused protocols.",
      turnaround: "24–48 Hours",
      questions: [
        "Is the mass benign or malignant?",
        "What is the median life expectancy with vs without surgery?",
        "How can we preserve comfort and quality of life?",
        "Are palliative therapies more humane than radical excision?"
      ]
    },
    "cardiology-review": {
      title: "Cardiology & Heart Murmurs",
      emoji: "❤️",
      summary: "Expert interpretation of echocardiograms and electrocardiograms (ECG) for congestive heart failure and arrhythmias.",
      turnaround: "24–48 Hours",
      questions: [
        "What grade is the heart murmur?",
        "Which specific medications are safe together?",
        "How do we monitor resting respiratory rates at home?",
        "Are cough symptoms related to fluid in lungs or trachea?"
      ]
    },
    "neurology-review": {
      title: "Neurology & Paralysis Advisory",
      emoji: "🧠",
      summary: "Reviewing sudden limb weakness, IVDD (intervertebral disc disease), and chronic epilepsy management.",
      turnaround: "24–48 Hours",
      questions: [
        "Is emergency spinal decompression necessary?",
        "Can conservative crate rest restore limb sensation?",
        "How do we safely calibrate anti-convulsant drug dosages?",
        "What is the long-term prognosis for recovery?"
      ]
    },
    "chronic-disease": {
      title: "Chronic Kidney & Liver Management",
      emoji: "💧",
      summary: "Long-term metabolic stability plans, renal diet calibration, subcutaneous hydration, and blood pressure control.",
      turnaround: "24–48 Hours",
      questions: [
        "What stage is the renal failure?",
        "How can we safely lower BUN and Creatinine levels?",
        "Can nausea and anorexia be effectively countered?",
        "How to set up gentle subcutaneous fluids at home?"
      ]
    }
  };

  // Wait for DOM to load
  document.addEventListener('DOMContentLoaded', function () {
    
    // =========================================================================
    // Header & Navigation
    // =========================================================================
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.mobile-toggle-btn');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
    const drawerCloseBtn = document.querySelector('.drawer-close-btn');
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link, .drawer-sublink');

    // Sticky scroll effect
    function checkScroll() {
      if (header) {
        if (window.scrollY > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    // Drawer management
    function openDrawer() {
      if (mobileToggle) mobileToggle.classList.add('open');
      if (mobileDrawer) mobileDrawer.classList.add('active');
      if (drawerOverlay) drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (mobileToggle) mobileToggle.classList.remove('open');
      if (mobileDrawer) mobileDrawer.classList.remove('active');
      if (drawerOverlay) drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (mobileToggle) {
      mobileToggle.addEventListener('click', function () {
        if (mobileDrawer && mobileDrawer.classList.contains('active')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    navLinks.forEach(function (l) {
      l.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    });

    // Detect active page from URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .drawer-link').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href) {
        const cleanHref = href.split('#')[0].split('?')[0];
        if (cleanHref === currentPath || (currentPath === '' && cleanHref === 'index.html')) {
          link.classList.add('active');
        } else if (!href.startsWith('#')) {
          link.classList.remove('active');
        }
      }
    });

    // =========================================================================
    // Hero Background Video Controller
    // =========================================================================
    const heroVideo = document.getElementById('hero-bg-video');
    const heroVideoToggle = document.getElementById('hero-video-toggle');
    const videoIcon = document.getElementById('video-control-icon');

    if (heroVideo && heroVideoToggle) {
      // Ensure autoplay attempt
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(function () {
          // Autoplay was prevented by browser policy (e.g. low power mode)
          if (videoIcon) videoIcon.textContent = '▶';
        });
      }

      heroVideoToggle.addEventListener('click', function () {
        if (heroVideo.paused) {
          heroVideo.play().then(function () {
            if (videoIcon) videoIcon.textContent = '⏸';
            heroVideoToggle.setAttribute('aria-label', 'Pause background video');
          }).catch(function (err) {
            console.warn('Video play error:', err);
          });
        } else {
          heroVideo.pause();
          if (videoIcon) videoIcon.textContent = '▶';
          heroVideoToggle.setAttribute('aria-label', 'Play background video');
        }
      });

      // Pause when out of viewport to conserve CPU/battery
      if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting && !heroVideo.paused) {
              heroVideo.pause();
            } else if (entry.isIntersecting && heroVideo.paused && videoIcon && videoIcon.textContent === '⏸') {
              heroVideo.play().catch(function () {});
            }
          });
        }, { threshold: 0.1 });
        videoObserver.observe(heroVideo);
      }
    }

    // =========================================================================
    // Services Category Filtering
    // =========================================================================
    const serviceTabs = document.querySelectorAll('.service-tab-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    serviceTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        serviceTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');

        serviceCards.forEach(function (card) {
          const cardCat = card.getAttribute('data-category');
          if (filter === 'all' || cardCat === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Book service button triggers
    document.querySelectorAll('.book-service-trigger').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        const serviceName = e.currentTarget.getAttribute('data-service') || '';
        const bookingSection = document.getElementById('booking');
        const bookingSelect = document.getElementById('booking-service-select');

        if (bookingSection) {
          if (bookingSelect) {
            for (let i = 0; i < bookingSelect.options.length; i++) {
              if (bookingSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
                bookingSelect.selectedIndex = i;
                break;
              }
            }
          }
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'booking.html?service=' + encodeURIComponent(serviceName);
        }
      });
    });

    // =========================================================================
    // Online Second Opinion Case Review Selector
    // =========================================================================
    const caseChips = document.querySelectorAll('.case-chip');
    const previewBox = document.getElementById('case-preview-box');

    function updateCasePreview(caseId) {
      const data = CASE_REVIEWS_DATA[caseId];
      if (!data || !previewBox) return;

      previewBox.innerHTML = `
        <div class="glass-card" style="padding: 2rem; border-radius: var(--r-xl); text-align: left; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); color: #fff;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
            <h3 style="color: var(--accent-bright); font-size: 1.35rem; margin: 0;">${data.emoji} ${data.title}</h3>
            <span style="background: rgba(201, 153, 31, 0.2); color: var(--accent-bright); padding: 0.25rem 0.75rem; border-radius: var(--r-full); font-size: 0.8rem; font-weight: 600;">Standard Turnaround: ${data.turnaround}</span>
          </div>
          <p style="color: var(--text-light); margin-bottom: 1.5rem; font-size: 1rem; line-height: 1.6;">${data.summary}</p>
          
          <h4 style="font-size: 0.95rem; color: #fff; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Key Clinical Questions We Answer:</h4>
          <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem; margin-bottom: 2rem;">
            ${data.questions.map(q => `
              <li style="display: flex; align-items: flex-start; gap: 0.5rem; color: var(--text-light); font-size: 0.9rem;">
                <span style="color: var(--accent-bright); font-weight: 700;">•</span>
                <span>${q}</span>
              </li>
            `).join('')}
          </ul>

          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 1.25rem; border-top: 1px solid rgba(255, 255, 255, 0.12);">
            <span style="font-size: 0.9rem; color: var(--text-light);">Independent case review with Chief Veterinary Consultant Dr. Sharma</span>
            <button type="button" class="btn btn-accent btn-sm request-opinion-btn" data-title="${data.title}">
              Request This Case Review
            </button>
          </div>
        </div>
      `;

      const reqBtn = previewBox.querySelector('.request-opinion-btn');
      if (reqBtn) {
        reqBtn.addEventListener('click', function () {
          const bookingSection = document.getElementById('booking');
          const teleconsultRadio = document.querySelector('input[name="visit_type"][value="teleconsult"]');
          const notesField = document.getElementById('booking-notes');

          if (bookingSection) {
            if (teleconsultRadio) teleconsultRadio.checked = true;
            if (notesField) notesField.value = 'Requesting Online Case Review for: ' + data.title;
            bookingSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = 'booking.html?visit_type=teleconsult&service=' + encodeURIComponent('Online Second Opinion / Teleconsult') + '&notes=' + encodeURIComponent('Requesting Online Case Review for: ' + data.title);
          }
        });
      }
    }

    caseChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        caseChips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        const caseId = chip.getAttribute('data-case-id');
        updateCasePreview(caseId);
      });
    });

    if (caseChips.length > 0) {
      updateCasePreview('surgery-decisions');
    }

    // =========================================================================
    // At-Home Canine vs Feline Packages Switcher
    // =========================================================================
    const athomeTabs = document.querySelectorAll('.athome-tab-btn');
    const athomeCards = document.querySelectorAll('.package-card[data-pet-type]');

    athomeTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        athomeTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        const pet = tab.getAttribute('data-pet');

        athomeCards.forEach(function (c) {
          if (c.getAttribute('data-pet-type') === pet) {
            c.style.display = 'flex';
          } else {
            c.style.display = 'none';
          }
        });
      });
    });

    // Book At-Home buttons
    document.querySelectorAll('.book-athome-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        const pkgName = e.currentTarget.getAttribute('data-package') || '';
        const bookingSection = document.getElementById('booking');
        const homeRadio = document.querySelector('input[name="visit_type"][value="home_visit"]');
        const notesField = document.getElementById('booking-notes');

        if (bookingSection) {
          if (homeRadio) homeRadio.checked = true;
          if (notesField) notesField.value = 'Booking At-Home Package: ' + pkgName;
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'booking.html?visit_type=home_visit&service=' + encodeURIComponent('At-Home Grooming & Spa') + '&notes=' + encodeURIComponent('Booking At-Home Package: ' + pkgName);
        }
      });
    });

    // =========================================================================
    // FAQ Accordion
    // =========================================================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function (header) {
      header.addEventListener('click', function () {
        const parent = header.parentElement;
        const isActive = parent.classList.contains('active');

        // Close other items in the same list
        const accordionList = parent.closest('.accordion-list');
        if (accordionList) {
          accordionList.querySelectorAll('.accordion-item').forEach(function (item) {
            item.classList.remove('active');
            const h = item.querySelector('.accordion-header');
            if (h) h.setAttribute('aria-expanded', 'false');
          });
        }

        if (!isActive) {
          parent.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // =========================================================================
    // Booking Form & WhatsApp Connector
    // =========================================================================
    const bookingForm = document.getElementById('appointment-form');
    const successBox = document.getElementById('booking-success-box');

    // Auto-fill from URL query parameters
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const qService = urlParams.get('service');
      const qVisitType = urlParams.get('visit_type');
      const qNotes = urlParams.get('notes');

      const selectEl = document.getElementById('booking-service-select');
      if (selectEl && qService) {
        for (let i = 0; i < selectEl.options.length; i++) {
          if (selectEl.options[i].text.toLowerCase().includes(qService.toLowerCase()) || 
              selectEl.options[i].value.toLowerCase().includes(qService.toLowerCase())) {
            selectEl.selectedIndex = i;
            break;
          }
        }
      }

      if (qVisitType) {
        const r = document.querySelector(`input[name="visit_type"][value="${qVisitType}"]`);
        if (r) r.checked = true;
      }

      const n = document.getElementById('booking-notes');
      if (n && qNotes) n.value = qNotes;
    } catch (e) {
      // Ignored for older browsers
    }

    // Set default tomorrow date
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.min = new Date().toISOString().split('T')[0];
      if (!dateInput.value) {
        dateInput.value = tomorrow.toISOString().split('T')[0];
      }
    }

    if (bookingForm) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = (bookingForm.querySelector('[name="owner_name"]') || {}).value || '';
        const phone = (bookingForm.querySelector('[name="phone"]') || {}).value || '';
        const petName = (bookingForm.querySelector('[name="pet_name"]') || {}).value || '';
        const petType = (bookingForm.querySelector('[name="pet_type"]:checked') || {}).value || 'Dog';
        const service = (bookingForm.querySelector('[name="service"]') || {}).value || 'General Pet Consultation';
        const visitType = (bookingForm.querySelector('[name="visit_type"]:checked') || {}).value || 'in_clinic_south';
        const date = (bookingForm.querySelector('[name="appointment_date"]') || {}).value || '';
        const time = (bookingForm.querySelector('[name="appointment_time"]') || {}).value || 'Evening';
        const notes = (bookingForm.querySelector('[name="notes"]') || {}).value || 'None';

        if (!name.trim() || !phone.trim() || !petName.trim()) {
          alert('Please provide your name, phone number, and pet name.');
          return;
        }

        const refCode = 'PA-' + Math.floor(100000 + Math.random() * 900000);
        let visitLabel = 'South Delhi Centre';
        if (visitType === 'in_clinic_central') visitLabel = 'Central Delhi Centre';
        if (visitType === 'home_visit') visitLabel = 'At-Home Vet Visit';
        if (visitType === 'teleconsult') visitLabel = 'Online Teleconsultation / Second Opinion';

        const waText = encodeURIComponent(
          `🐾 *NEW APPOINTMENT REQUEST*\n` +
          `Ref ID: #${refCode}\n` +
          `--------------------------\n` +
          `• *Owner Name:* ${name}\n` +
          `• *Phone:* ${phone}\n` +
          `• *Pet:* ${petName} (${petType})\n` +
          `• *Service:* ${service}\n` +
          `• *Visit Type:* ${visitLabel}\n` +
          `• *Preferred Date:* ${date} (${time})\n` +
          `• *Notes/Symptoms:* ${notes}\n` +
          `--------------------------\n` +
          `Please confirm our appointment slot. Thank you!`
        );

        const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappRaw}?text=${waText}`;

        if (successBox) {
          successBox.classList.add('show');
          successBox.innerHTML = `
            <h4>✅ Appointment Request Submitted (Ref: #${refCode})</h4>
            <p>
              Thank you, <strong>${name}</strong>! Your consultation for <strong>${petName}</strong> (${visitLabel}) is registered for <strong>${date} at ${time}</strong>.<br>
              Our care coordinator will contact you at <strong>${phone}</strong> within 15 minutes.
            </p>
            <div style="margin-top: 1rem;">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm" style="display: inline-flex;">
                📱 Confirm Instantly on WhatsApp
              </a>
            </div>
          `;
          successBox.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Modal Booking Form
    const modalOverlay = document.getElementById('booking-modal-overlay');
    const modalClose = document.getElementById('booking-modal-close');
    const modalForm = document.getElementById('modal-appointment-form');

    function openModal() {
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    document.querySelectorAll('.open-booking-modal').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        const inlineBooking = document.getElementById('booking');
        if (inlineBooking && window.innerWidth > 768) {
          inlineBooking.scrollIntoView({ behavior: 'smooth' });
        } else if (modalOverlay) {
          openModal();
        } else {
          window.location.href = 'booking.html';
        }
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeModal();
      });
    }

    // Back to Top button
    const backToTop = document.querySelector('.float-back-top');
    if (backToTop) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 350) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }, { passive: true });

      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Dynamic current year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Animated number counter for stats
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if ('IntersectionObserver' in window && statNumbers.length > 0) {
      const statsObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            let count = 0;
            const duration = 1600;
            const stepTime = 25;
            const totalSteps = duration / stepTime;
            const stepValue = Math.ceil(target / totalSteps);

            const timer = setInterval(function () {
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
      }, { threshold: 0.3 });

      statNumbers.forEach(function (st) { statsObserver.observe(st); });
    }
  });
})();
