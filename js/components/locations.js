/**
 * Flagship Clinic Locations Component
 */
import { BRAND_CONFIG } from '../config.js';

export function initLocations() {
  const container = document.getElementById('locations-container');
  if (!container) return;

  container.innerHTML = BRAND_CONFIG.locations.map(loc => `
    <article class="location-box reveal reveal-scale">
      <div>
        <div class="location-header-row">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 0.5rem;">Flagship Centre</span>
            <h3 class="location-title">${loc.name}</h3>
          </div>
          <div class="service-icon-box" style="width: 48px; height: 48px; font-size: 1.4rem;">📍</div>
        </div>

        <div class="location-details-list">
          <div class="location-detail-item">
            <span class="location-detail-icon">📌</span>
            <div>
              <strong>Address:</strong>
              <p style="margin: 0; color: var(--text-muted);">${loc.address}</p>
            </div>
          </div>

          <div class="location-detail-item">
            <span class="location-detail-icon">🕒</span>
            <div>
              <strong>Consulting Hours:</strong>
              <p style="margin: 0; color: var(--text-muted);">${loc.hours}</p>
            </div>
          </div>

          <div class="location-detail-item">
            <span class="location-detail-icon">🚨</span>
            <div>
              <strong>Emergency Coverage:</strong>
              <p style="margin: 0; color: #DC2626; font-weight: 600;">${loc.emergency}</p>
            </div>
          </div>
        </div>

        <div>
          <strong style="font-size: 0.85rem; color: var(--text-dark); display: block; margin-bottom: 0.5rem;">Clinical Facilities & Technology:</strong>
          <div class="facility-chips-row">
            ${loc.facilities.map(f => `<span class="facility-chip">✓ ${f}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="location-actions">
        <a href="tel:${loc.phone.replace(/[^0-9+]/g, '')}" class="btn btn-primary btn-sm" style="flex: 1;">
          📞 Call Centre (${loc.phone})
        </a>
        <a href="${loc.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          🗺️ Get Directions
        </a>
      </div>
    </article>
  `).join('');
}
