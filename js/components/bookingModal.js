/**
 * Booking Modal & Inline Form Controller
 * Validation, appointment code generation, and direct WhatsApp routing
 */
import { BRAND_CONFIG } from '../config.js';

export function initBooking() {
  const form = document.getElementById('appointment-form');
  const successBox = document.getElementById('booking-success-box');
  const modalOverlay = document.getElementById('booking-modal-overlay');
  const modalClose = document.getElementById('booking-modal-close');
  const modalTriggers = document.querySelectorAll('.open-booking-modal');

  // Pre-fill date with tomorrow's date by default
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = new Date().toISOString().split('T')[0];
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  // Auto-fill form from URL query parameters (e.g. from services.html, second-opinion.html, at-home.html)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramService = urlParams.get('service');
    const paramVisitType = urlParams.get('visit_type');
    const paramNotes = urlParams.get('notes');

    const bookingSelect = document.getElementById('booking-service-select');
    if (bookingSelect && paramService) {
      for (let opt of bookingSelect.options) {
        if (opt.value.toLowerCase().includes(paramService.toLowerCase()) || 
            opt.text.toLowerCase().includes(paramService.toLowerCase())) {
          opt.selected = true;
          break;
        }
      }
    }

    if (paramVisitType) {
      const radio = document.querySelector(`input[name="visit_type"][value="${paramVisitType}"]`);
      if (radio) radio.checked = true;
    }

    const notesField = document.getElementById('booking-notes');
    if (notesField && paramNotes) {
      notesField.value = paramNotes;
    }
  } catch (err) {
    console.warn('URL params parsing notice:', err);
  }

  // Modal Open / Close Logic
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

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // If there is an inline booking section, smooth scroll to it
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

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Handle Form Submission
  function handleFormSubmit(formEl, isModal = false) {
    if (!formEl) return;

    formEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = formEl.querySelector('[name="owner_name"]').value.trim();
      const phone = formEl.querySelector('[name="phone"]').value.trim();
      const email = formEl.querySelector('[name="email"]')?.value.trim() || 'N/A';
      const petName = formEl.querySelector('[name="pet_name"]').value.trim();
      const petType = formEl.querySelector('[name="pet_type"]:checked')?.value || 'Dog';
      const service = formEl.querySelector('[name="service"]').value;
      const visitType = formEl.querySelector('[name="visit_type"]:checked')?.value || 'in_clinic_south';
      const date = formEl.querySelector('[name="appointment_date"]').value;
      const time = formEl.querySelector('[name="appointment_time"]').value;
      const notes = formEl.querySelector('[name="notes"]')?.value.trim() || 'None';

      if (!name || !phone || !petName) {
        alert('Please fill in your name, phone number, and pet name.');
        return;
      }

      // Generate random reservation reference
      const refCode = `PA-${Math.floor(100000 + Math.random() * 900000)}`;

      // Friendly visit type label
      let visitLabel = "South Delhi Centre";
      if (visitType === "in_clinic_central") visitLabel = "Central Delhi Centre";
      if (visitType === "home_visit") visitLabel = "At-Home Vet Visit";
      if (visitType === "teleconsult") visitLabel = "Online Teleconsultation / Second Opinion";

      // Build WhatsApp message
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

      // Show success feedback
      if (isModal) {
        formEl.innerHTML = `
          <div style="text-align: center; padding: 2rem 1rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
            <h3 style="color: var(--primary); font-size: 1.5rem; margin-bottom: 0.5rem;">Appointment Request Received!</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
              Booking Reference: <strong style="color: var(--accent-dark); font-size: 1.1rem;">#${refCode}</strong><br>
              Our care coordinator will contact you shortly to confirm.
            </p>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-lg" style="width: 100%;">
              📱 Instant Confirmation via WhatsApp
            </a>
          </div>
        `;
      } else if (successBox) {
        successBox.classList.add('show');
        successBox.innerHTML = `
          <h4>✅ Appointment Request Submitted (Ref: #${refCode})</h4>
          <p>
            Thank you, <strong>${name}</strong>! Your consultation for <strong>${petName}</strong> (${visitLabel}) is scheduled for <strong>${date} at ${time}</strong>.<br>
            A representative will call you at <strong>${phone}</strong> shortly.
          </p>
          <div style="margin-top: 1rem;">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm" style="display: inline-flex;">
              📱 Confirm Instantly on WhatsApp
            </a>
          </div>
        `;
        successBox.scrollIntoView({ behavior: 'smooth' });
        formEl.reset();
      }
    });
  }

  handleFormSubmit(form, false);

  const modalForm = document.getElementById('modal-appointment-form');
  if (modalForm) {
    handleFormSubmit(modalForm, true);
  }
}
