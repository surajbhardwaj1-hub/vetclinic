/**
 * Services Component
 * Interactive category tab filtering and service card rendering
 */
import { SERVICES_DATA } from '../data.js';

export function initServices() {
  const container = document.getElementById('services-grid');
  const tabs = document.querySelectorAll('.service-tab-btn');
  if (!container) return;

  function renderServices(filter = 'all') {
    const filtered = filter === 'all' 
      ? SERVICES_DATA 
      : SERVICES_DATA.filter(s => s.category === filter);

    container.innerHTML = filtered.map(service => `
      <article class="service-card reveal reveal-scale" data-category="${service.category}">
        <div class="service-card-top">
          <div class="service-icon-box" aria-hidden="true">${service.icon}</div>
          <span class="service-category-badge">${service.categoryName}</span>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.desc}</p>
        
        <ul class="service-checklist" aria-label="Key Features">
          ${service.features.map(f => `
            <li>
              <span class="service-check-icon">✓</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <div class="service-card-footer">
          <div class="service-price">
            <span class="price-label">Pricing</span>
            <span class="price-amount">${service.price}</span>
          </div>
          <button type="button" class="btn btn-outline btn-sm book-service-trigger" data-service="${service.title}">
            Book Service
          </button>
        </div>
      </article>
    `).join('');

    // Attach click listeners to "Book Service" buttons
    container.querySelectorAll('.book-service-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const serviceName = e.currentTarget.getAttribute('data-service');
        const bookingSelect = document.getElementById('booking-service-select');
        const bookingSection = document.getElementById('booking');
        
        if (bookingSelect) {
          // Select matching option or set value
          for (let option of bookingSelect.options) {
            if (option.text.toLowerCase().includes(serviceName.toLowerCase()) || 
                serviceName.toLowerCase().includes(option.text.toLowerCase())) {
              option.selected = true;
              break;
            }
          }
        }

        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `booking.html?service=${encodeURIComponent(serviceName)}`;
        }
      });
    });
  }

  // Initial render
  renderServices('all');

  // Tab click listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderServices(filter);
    });
  });
}
