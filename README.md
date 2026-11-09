# Muhammad Sinan — Creative Design Portfolio 2026

A modern, clean, and visually engaging portfolio website built for graphic designer **Muhammad Sinan**, directly referencing the visual identity, typography, color palette, and curated original works from **Portfolio 2026**.

## 🎨 Design System & Visual Identity

- **Primary Colors**:
  - Primary Purple: `#6900AB`
  - Accent Pink: `#F586FF`
  - White: `#FFFFFF`
  - Near Black: `#17131B`
  - Light Background: `#FFF5FF`
- **Typography**:
  - **Array** (Fontshare) — Display titles, hero typography, section signatures, dot-matrix headings.
  - **Clash Display** (Fontshare) — Body text, descriptions, navigation, and badges.
- **Design Guidelines**:
  - Implements the strict design tokens and rules from `landing-page-design/SKILL.md` (spacing table, nested radius formula, weighted bezier curves, and B11 Tagline Reveal moment).

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   └── favicon.svg                    # Custom branded MS monogram favicon
├── src/
│   ├── assets/
│   │   ├── profile/                   # Muhammad Sinan's actual portrait photo
│   │   ├── magazine/                  # NAMBIKKAI '26 cover and internal spreads
│   │   ├── branding/                  # ETHIKKO logo variations, patterns, swatches
│   │   ├── posters/                   # All 12 original social media event posters
│   │   ├── id-card/                   # IEDC Executive Committee official ID card
│   │   ├── events/                    # Cipher, Cipherthon, Grammar of Data flyers
│   │   ├── software/                  # Official Ps, Ai, Id, Figma, Pr, Ae, CapCut logos
│   │   └── icons/                     # Phone and mail icons
│   ├── components/
│   │   ├── Navbar.jsx                 # Floating translucent bar + responsive mobile drawer
│   │   ├── Hero.jsx                   # Full-screen typography landing section
│   │   ├── TaglineReveal.jsx          # B11 scroll-triggered word reveal manifesto
│   │   ├── About.jsx                  # 2-column portrait arch & bio narrative
│   │   ├── Projects.jsx               # Filterable categories & interactive showcase
│   │   ├── Experience.jsx             # Leadership roles & event flyer gallery
│   │   ├── Skills.jsx                 # Software tool stack without progress bars
│   │   ├── Contact.jsx                # Direct call, email, form, and "THANK YOU" sign-off
│   │   ├── Footer.jsx                 # Branded copyright & smooth back-to-top
│   │   └── Lightbox.jsx               # Full-screen interactive image inspection modal
│   ├── styles/
│   │   ├── global.css                 # CSS variables, typography tokens, layout resets
│   │   └── animations.css             # Hover transitions, keyframes, motion curves
│   ├── App.jsx                        # Main application container & lightbox state
│   └── main.jsx                       # React 19 entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🌟 Key Features

1. **Original Artwork Fidelity**: Exclusively features Muhammad Sinan's original design projects, without stock images or generic AI imagery.
2. **Interactive Lightbox**: Click any magazine spread, branding mockup, poster, or ID card to inspect it in high resolution with metadata descriptions.
3. **Smooth Scroll & Micro-interactions**: Hover lifts, smooth anchor navigation, and scroll-activated word transitions.
4. **Mobile Responsive**: Adapts across mobile phones, tablets, laptops, and ultra-wide desktop monitors.

