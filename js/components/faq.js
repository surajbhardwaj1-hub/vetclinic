/**
 * FAQ Accordion Component
 * Accessible, keyboard-friendly accordion with smooth expand/collapse
 */
import { FAQ_DATA } from '../data.js';

export function initFAQ() {
  const container = document.getElementById('faq-accordion-list');
  if (!container) return;

  container.innerHTML = FAQ_DATA.map((item, index) => `
    <div class="accordion-item ${index === 0 ? 'active' : ''}">
      <button type="button" class="accordion-header" id="faq-head-${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faq-body-${index}">
        <span>${item.q}</span>
        <span class="accordion-icon" aria-hidden="true">+</span>
      </button>
      <div class="accordion-body" id="faq-body-${index}" role="region" aria-labelledby="faq-head-${index}">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isCurrentlyActive = item.classList.contains('active');

      // Close all items
      container.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isCurrentlyActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
