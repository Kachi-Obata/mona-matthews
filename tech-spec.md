# CHANEL Website Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | System fonts (Helvetica Neue fallback) |

## 2. Tailwind Configuration Guide

### Color Extensions

```javascript
colors: {
  chanel: {
    black: '#000000',
    white: '#FFFFFF',
    gray: {
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#666666',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    beige: '#C4A77D',
  }
}
```

### Font Extensions

```javascript
fontFamily: {
  sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
}
```

### Letter Spacing Extensions

```javascript
letterSpacing: {
  'chanel': '0.5px',
  'chanel-wide': '1.5px',
  'chanel-logo': '8px',
}
```

## 3. Component Inventory

### Shadcn/UI Components (Built-in)

| Component | Usage | Customization Required |
|-----------|-------|----------------------|
| Button | CTAs, navigation | Remove radius, add letter-spacing |
| Input | Newsletter, search | Border styling |
| Sheet | Mobile navigation | Slide from left |
| Separator | Visual dividers | Color adjustment |

### Custom Components

#### Layout Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Header` | - | Fixed navigation header |
| `Footer` | - | Multi-column footer |
| `MobileMenu` | `isOpen, onClose` | Slide-out mobile navigation |

#### Section Components

| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | `category, title, cta, image, imageAlt` | Full-viewport product showcase |
| `ProductGrid` | - | Grid of product categories (optional) |

#### UI Components

| Component | Props | Description |
|-----------|-------|-------------|
| `ChanelLogo` | `className` | Styled CHANEL wordmark |
| `NavLink` | `href, children, hasSubmenu` | Navigation link with hover effect |
| `IconButton` | `icon, onClick, ariaLabel` | Icon-only button |
| `TextOverlay` | `category, title, cta` | Hero text overlay |

## 4. Animation Implementation Plan

| Interaction Name | Tech Choice | Implementation Logic |
|------------------|-------------|---------------------|
| Page Load Fade | Framer Motion | `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, duration: 0.6s |
| Header Scroll | React State + CSS | `useScroll` hook, toggle `scrolled` class for shadow |
| Nav Link Hover | CSS + Tailwind | `after:` pseudo-element, `scaleX` transform, origin-left |
| Hero Text Reveal | Framer Motion | `staggerChildren: 0.1`, y: 20 → 0, opacity: 0 → 1 |
| Section Scroll Reveal | Framer Motion | `whileInView`, `viewport: { once: true }`, fade + translateY |
| Button Hover | Tailwind | `hover:bg-gray-900`, `transition-colors duration-250` |
| Icon Hover | Tailwind | `hover:opacity-70`, `transition-opacity duration-200` |
| Mobile Menu Slide | Framer Motion | `x: -100%` → `x: 0`, duration: 0.3s, ease: easeOut |
| Footer Link Hover | CSS | Underline animation with `scaleX` |

### Animation Timing Constants

```typescript
export const ANIMATION = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.6,
  },
  easing: {
    standard: [0.4, 0, 0.2, 1],
    entrance: [0, 0, 0.2, 1],
    exit: [0.4, 0, 1, 1],
  },
  stagger: 0.1,
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── assets/
│       ├── fashion-spring-summer-2026.png
│       ├── fragrance-n5-new.jpg
│       ├── watches-j12.jpg
│       ├── makeup-rouge-allure.jpg
│       ├── fine-jewelry-coco-crush.jpg
│       ├── skincare-sublimage.jpg
│       ├── eyewear-spring-summer.jpg
│       ├── high-jewelry-lion.jpg
│       └── haute-couture-spring-summer.jpg
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ChanelLogo.tsx
│   │   └── NavLink.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── animations.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation List

```bash
# Initialize project (already done by webapp-building skill)
# bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "CHANEL"

# Install shadcn components
npx shadcn add button
npx shadcn add input
npx shadcn add sheet
npx shadcn add separator

# Install animation library
npm install framer-motion

# Install icons
npm install lucide-react

# Install utilities
npm install clsx tailwind-merge
```

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu, stacked sections |
| Tablet | 640px - 1024px | 2-column grid, condensed nav |
| Desktop | > 1024px | Full layout, all navigation visible |

## 8. Accessibility Requirements

- WCAG 2.1 AA compliance
- Minimum contrast ratio: 4.5:1 for text
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels on icon buttons
- Skip to main content link
- Alt text on all images

## 9. Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Image optimization: WebP format, lazy loading
- Animation performance: Use transform/opacity only
