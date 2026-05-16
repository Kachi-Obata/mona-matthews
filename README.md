# Mona Matthews

Website for **Mona Matthews**, a luxury footwear and accessories brand established in Lagos, Nigeria in 2002. Specialising in handcrafted shoes in extended sizes for men and women.

**Live site:** [monamatthews.com](https://monamatthews.com)

---

## Tech Stack

| | |
|---|---|
| React 19 | UI |
| TypeScript | Type safety |
| Vite 7 | Build tool |
| React Router v7 | Client-side routing |
| Tailwind CSS 3 | Styling |
| Framer Motion 12 | Animations |
| Lucide React | Icons |

Deployed on **Vercel** with SPA rewrite rules.

---

## Project Structure

```
mona-matthews/
├── app/                        # React app (production)
│   ├── public/
│   │   ├── assets/             # Hero images
│   │   └── images/             # Logo + product images
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── HeroSection.tsx
│   │   ├── pages/
│   │   │   ├── LandingPage.tsx
│   │   │   ├── CataloguePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   └── SizeGuidePage.tsx
│   │   ├── lib/
│   │   │   ├── products.ts     # Collections + product data
│   │   │   └── animations.ts   # Framer Motion variants
│   │   ├── App.tsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── vercel.json
└── README.md
```

---

## Getting Started

```bash
cd app
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

### Other commands

```bash
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Editorial landing — full-viewport hero sections per collection |
| `/catalogue` | Product grid — browsable shop |
| `/about` | Brand story, values, testimonials |
| `/size-guide` | Interactive size tables (UK / EU / US / JP) |

---

## Contact

- **WhatsApp:** [+234 802 305 5212](https://wa.me/2348023055212)
- **Instagram:** [@monamatthewsng](https://instagram.com/monamatthewsng)
