/**
 * Online Second Opinion & Teleconsultation Component
 */
import { CASE_REVIEWS_DATA } from '../data.js';

export function initSecondOpinion() {
  const chipsContainer = document.getElementById('case-chips-container');
  const previewBox = document.getElementById('case-preview-box');
  if (!chipsContainer || !previewBox) return;

  function renderChips() {
    chipsContainer.innerHTML = CASE_REVIEWS_DATA.map((c, index) => `
      <button type="button" class="case-chip ${index === 0 ? 'active' : ''}" data-case-id="${c.id}">
        <span>${c.emoji}</span> ${c.title}
      </button>
    `).join('');

    showCaseDetails(CASE_REVIEWS_DATA[0].id);

    chipsContainer.querySelectorAll('.case-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        chipsContainer.querySelectorAll('.case-chip').forEach(c => c.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');
        const caseId = target.getAttribute('data-case-id');
        showCaseDetails(caseId);
      });
    });
  }

  function showCaseDetails(caseId) {
    const caseItem = CASE_REVIEWS_DATA.find(c => c.id === caseId) || CASE_REVIEWS_DATA[0];
    previewBox.innerHTML = `
      <div class="glass-card" style="padding: 2rem; border-radius: var(--r-xl); text-align: left; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); color: #fff;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
          <h3 style="color: var(--accent-bright); font-size: 1.35rem; margin: 0;">${caseItem.emoji} ${caseItem.title}</h3>
          <span style="background: rgba(201, 153, 31, 0.2); color: var(--accent-bright); padding: 0.25rem 0.75rem; border-radius: var(--r-full); font-size: 0.8rem; font-weight: 600;">Standard Turnaround: 24–48 Hours</span>
        </div>
        <p style="color: var(--text-light); margin-bottom: 1.5rem; font-size: 1rem; line-height: 1.6;">${caseItem.summary}</p>
        
        <h4 style="font-size: 0.95rem; color: #fff; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Key Clinical Questions We Answer:</h4>
        <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem; margin-bottom: 2rem;">
          ${caseItem.commonQuestions.map(q => `
            <li style="display: flex; align-items: flex-start; gap: 0.5rem; color: var(--text-light); font-size: 0.9rem;">
              <span style="color: var(--accent-bright); font-weight: 700;">•</span>
              <span>${q}</span>
            </li>
          `).join('')}
        </ul>

        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 1.25rem; border-top: 1px solid rgba(255, 255, 255, 0.12);">
          <span style="font-size: 0.9rem; color: var(--text-light);">Independent case review with Chief Veterinary Consultant Dr. Sharma</span>
          <button type="button" class="btn btn-accent btn-sm request-opinion-btn" data-title="${caseItem.title}">
            Request This Case Review
          </button>
        </div>
      </div>
    `;

    const requestBtn = previewBox.querySelector('.request-opinion-btn');
    if (requestBtn) {
      requestBtn.addEventListener('click', () => {
        const bookingSection = document.getElementById('booking');
        const teleconsultRadio = document.querySelector('input[name="visit_type"][value="teleconsult"]');
        const notesField = document.getElementById('booking-notes');
        
        if (teleconsultRadio) {
          teleconsultRadio.checked = true;
        }
        if (notesField) {
          notesField.value = `Requesting Online Case Review for: ${caseItem.title}`;
        }
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `booking.html?visit_type=teleconsult&service=${encodeURIComponent("Online Second Opinion / Teleconsult")}&notes=${encodeURIComponent("Requesting Online Case Review for: " + caseItem.title)}`;
        }
      });
    }
  }

  renderChips();
}
