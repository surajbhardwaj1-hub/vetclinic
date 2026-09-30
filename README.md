# PetAura Veterinary Centre & Surgical Hospital

> **Production-Ready, Fully Responsive Veterinary Care Platform**  
> Inspired by and recreating the design system, layout hierarchy, and user experience of [petaids.in](https://www.petaids.in/).

---

## 🌟 Key Highlights & Design System Re-creation

This website recreates the exact visual identity, colors, and layout structure of the reference veterinary platform:

- **Color Palette & Design Tokens**:
  - Primary Royal Navy: `#0D2B55`
  - Midnight Obsidian: `#071828`
  - Warm Royal Gold Accent: `#C9991F` / `#E8BE5C` / `#F5D470`
  - Warm Organic Canvas: `#FDFAF2` / `#F5EFD8`
  - High-contrast clinical alert: `#DC2626`
- **Typography**: Poppins for crystal-clear modern readability paired with Playfair Display / Georgia serif accents for authoritative medical credibility.
- **Micro-Animations & Smooth Motion**: Lightweight, hardware-accelerated CSS animations (`.reveal`, `.reveal-scale`, `.reveal-left`, `.reveal-right`) with strict compliance for `prefers-reduced-motion`.
- **Zero-Dependency Architecture**: Built using pure modern HTML5, Vanilla CSS3, and ES6 modular JavaScript—guaranteeing 100% cross-browser reliability, ultra-fast load times, and effortless hosting on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or S3/Nginx).

---

## 📁 Project Architecture

```
pet-clinic-site/
├── index.html                   # Main Home Portal & Highlights
├── services.html                # Dedicated Clinical & Surgical Services Page
├── second-opinion.html          # Dedicated Online Second Opinion & Teleconsultation Page
├── at-home.html                 # Dedicated At-Home Pet Care & Gentle Grooming Page
├── about.html                   # Dedicated About Chief Veterinary Surgeon Page
├── locations.html               # Dedicated Flagship Clinic Centres Page (South & Central Delhi)
├── booking.html                 # Dedicated Book Appointment & Contact Page
├── sitemap.xml                  # Multi-page SEO XML sitemap with image metadata
├── robots.txt                   # Search crawler directives
├── css/
│   ├── variables.css            # Exact design tokens: colors, fonts, shadows, borders, radii
│   ├── base.css                 # Reset, fluid typography, containers, grid utilities, reveal animations
│   ├── header.css               # Topbar, sticky glassmorphic navbar, dropdowns, mobile drawer
│   ├── hero.css                 # Hero grid, photo framing, floating trust cards, live stats bar
│   ├── components.css           # Buttons, cards, tabs, accordions, badges, modals, toast alerts
│   ├── sections.css             # Page banners, emergency strip, services, doctor spotlight, teleconsult, at-home, locations
│   ├── booking.css              # Appointment reservation engine, visit type selector, form validation
│   └── footer.css               # 4-column luxury footer, emergency callout, dynamic copyright
├── js/
│   ├── config.js                # Centralized business information configuration (Brand, Phone, Address, Doctor)
│   ├── data.js                  # Services, case reviews, at-home packages, testimonials, FAQs
│   ├── components/
│   │   ├── header.js            # Sticky scroll listener, mobile navigation drawer, scrollspy
│   │   ├── services.js          # Interactive category tab filtering and service cards
│   │   ├── secondOpinion.js     # Teleconsultation 4-step workflow and case category previews
│   │   ├── atHome.js            # Canine & feline grooming package switcher
│   │   ├── locations.js         # Flagship South & Central Delhi clinic cards with map routing
│   │   ├── testimonials.js      # Verified pet parent stories with star ratings
│   │   ├── faq.js               # Accessible accordion with smooth expand/collapse
│   │   ├── bookingModal.js      # Reservation validation, code generator, and direct WhatsApp formatting
│   │   └── footer.js            # Dynamic year and back-to-top handler
│   └── app.js                   # Application bootstrap and IntersectionObserver animator
└── assets/
    └── images/
        ├── hero-veterinarian.jpg    # Custom high-res hero veterinarian with golden retriever
        ├── chief-veterinarian.jpg   # Chief Veterinary Surgeon portrait in clinic library
        ├── surgery-suite.jpg        # Modern sterile operating theatre with cardiac monitors
        └── grooming-spa.jpg         # Gentle luxury at-home pet grooming scene
```

---

## 🛠️ How to Customize Branding

All business details are centralized in [`js/config.js`](file:///e:/Chrome%20download/ALL%20WEBS/pet-clinic-site/js/config.js). To rebrand the site for any clinic, update the fields:

```javascript
export const BRAND_CONFIG = {
  brandName: "Your Brand Name",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "care@yourdomain.in",
  website: "https://www.yourdomain.in",
  chiefDoctor: {
    name: "Dr. Your Name",
    title: "Chief Veterinary Surgeon",
    // ...
  },
  locations: [
    // Update clinic addresses, timings, and map links
  ]
};
```

---

## 🚀 Running the Project

You can run this project locally with any static web server or simply open `index.html` in any modern web browser:

### Option 1: Python Simple HTTP Server
```bash
python -m http.server 3000
```

### Option 2: Live Server (VS Code Extension) or Node `npx serve`
```bash
npx serve .
```

### Option 3: PowerShell Built-in Web Server
```powershell
# Open index.html directly
Start-Process "index.html"
```
