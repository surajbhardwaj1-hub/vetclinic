/**
 * Testimonials Component
 */
import { TESTIMONIALS_DATA } from '../data.js';

export function initTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS_DATA.map(item => `
    <article class="testimonial-card reveal reveal-scale">
      <div>
        <div class="testimonial-stars" aria-label="${item.rating} out of 5 stars">
          ${'★'.repeat(item.rating)}
        </div>
        <div style="font-size: 0.8rem; font-weight: 600; color: var(--accent-dark); text-transform: uppercase; margin-bottom: 0.75rem;">
          ${item.service}
        </div>
        <p class="testimonial-quote">"${item.text}"</p>
      </div>

      <div class="testimonial-author-row">
        <div class="author-avatar" aria-hidden="true">
          ${item.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div class="author-name">${item.name}</div>
          <div class="author-pet-info">Parent to ${item.pet} • ${item.breed} (${item.location})</div>
        </div>
      </div>
    </article>
  `).join('');
}
