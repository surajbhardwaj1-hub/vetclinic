/**
 * At-Home Care Component
 * Dog / Cat grooming & home vaccination packages switcher
 */
import { ATHOME_PACKAGES } from '../data.js';

export function initAtHome() {
  const container = document.getElementById('athome-packages-container');
  const petTabs = document.querySelectorAll('.athome-tab-btn');
  if (!container) return;

  function renderPackages(type = 'dog') {
    const packages = ATHOME_PACKAGES.filter(p => p.type === type);
    
    container.innerHTML = packages.map(pkg => `
      <div class="package-card ${pkg.recommended ? 'highlight' : ''}">
        <div class="package-info">
          ${pkg.recommended ? '<span class="badge badge-gold" style="margin-bottom: 0.5rem;">Most Popular Package</span>' : ''}
          <h3>${pkg.title}</h3>
          <p>${pkg.desc}</p>
          <ul class="service-checklist" style="margin-bottom: 0;">
            ${pkg.features.map(f => `
              <li>
                <span class="service-check-icon">✓</span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="package-price-wrap">
          <span class="price-label">At-Home Fee</span>
          <span class="package-price-amount">${pkg.price}</span>
          <button type="button" class="btn ${pkg.recommended ? 'btn-accent' : 'btn-outline'} btn-sm book-athome-btn" data-package="${pkg.title}" style="margin-top: 0.85rem;">
            Book At-Home
          </button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.book-athome-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pkgName = e.currentTarget.getAttribute('data-package');
        const homeVisitRadio = document.querySelector('input[name="visit_type"][value="home_visit"]');
        const notesField = document.getElementById('booking-notes');
        const bookingSection = document.getElementById('booking');

        if (homeVisitRadio) homeVisitRadio.checked = true;
        if (notesField) notesField.value = `Booking At-Home Package: ${pkgName}`;
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `booking.html?visit_type=home_visit&service=${encodeURIComponent("At-Home Grooming & Spa")}&notes=${encodeURIComponent("Booking At-Home Package: " + pkgName)}`;
        }
      });
    });
  }

  renderPackages('dog');

  petTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      petTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const petType = tab.getAttribute('data-pet');
      renderPackages(petType);
    });
  });
}
