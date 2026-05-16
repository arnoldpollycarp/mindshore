# Mindshore Group — Website

A multi-page React website for **Mindshore Group Limited**, built with Vite, React Router, and Tailwind CSS. All page content is sourced from the official website copy document.

---

## Tech Stack

- **React 18** + **Vite** — fast dev server, modern build
- **React Router 6** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icons

---

## Design System

| Token        | Value      | Usage                                    |
| ------------ | ---------- | ---------------------------------------- |
| `ink`        | `#0B1B2B`  | Primary text, dark sections, CTAs        |
| `cream`      | `#F4EFE6`  | Main background (warm paper)             |
| `paper`      | `#FAF7F1`  | Alternate background section             |
| `accent`     | `#C2410C`  | Burnt sienna — single sharp accent       |

**Typography**

- `font-serif` — Fraunces (display, headings, italics)
- `font-sans` — Inter Tight (body)
- `font-mono` — JetBrains Mono (eyebrows, labels)

---

## Project Structure

```
mindshore-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Routes + layout shell
    ├── index.css             # Tailwind + base styles
    ├── components/
    │   ├── Navbar.jsx        # Sticky nav with mobile menu
    │   ├── Footer.jsx        # Sitemap footer
    │   ├── PageHeader.jsx    # Reusable page hero
    │   ├── Eyebrow.jsx       # Section label
    │   └── ScrollToTop.jsx   # Resets scroll on route change
    ├── pages/
    │   ├── Home.jsx          # Page 01 — Homepage
    │   ├── About.jsx         # Page 02 — About Mindshore
    │   ├── Services.jsx      # Page 03 — Services
    │   ├── Delivery.jsx      # Page 04 — Delivery Framework
    │   ├── Security.jsx      # Page 05 — Security & Compliance
    │   ├── Responsible.jsx   # Page 06 — Responsible AI & Impact
    │   ├── Industries.jsx    # Page 07 — Industries
    │   ├── Careers.jsx       # Page 08 — Careers
    │   └── Contact.jsx       # Page 09 — Contact & Partnership
    └── data/
        ├── navigation.js     # Nav items (single source of truth)
        ├── services.js       # AI + BPO service definitions
        ├── delivery.js       # Delivery framework layers
        ├── security.js       # Security/compliance sections
        └── content.js        # Sectors, roles, contact channels, RAI pillars
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Routes

| Path              | Component       | Page                       |
| ----------------- | --------------- | -------------------------- |
| `/`               | `Home`          | 01 — Homepage              |
| `/about`          | `About`         | 02 — About Mindshore       |
| `/services`       | `Services`      | 03 — Services              |
| `/delivery`       | `Delivery`      | 04 — Delivery Framework    |
| `/security`       | `Security`      | 05 — Security & Compliance |
| `/responsible-ai` | `Responsible`   | 06 — Responsible AI        |
| `/industries`     | `Industries`    | 07 — Industries            |
| `/careers`        | `Careers`       | 08 — Careers               |
| `/contact`        | `Contact`       | 09 — Contact & Partnership |

Unknown paths fall back to the homepage.

---

## Editing Content

All page copy lives in `src/data/`. Update those files to change content without touching components — the pages map data to the layout.

To add a new page:

1. Create a new file in `src/pages/`.
2. Add a route in `src/App.jsx`.
3. Add the link to `src/data/navigation.js`.

---

## Notes

- The contact form in `Contact.jsx` is wired with local state but the submit handler currently logs to the console. Connect it to your backend, Formspree, or similar.
- Replace the placeholder "View Open Roles" link in `Careers.jsx` with the actual ATS URL.
- Open Graph and Twitter meta tags can be added to `index.html` before deployment.

---

© Mindshore Group Limited
