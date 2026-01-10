# Architecture & Technical Design

## Overview

This is a **static website** (no build tools, no server-side logic). All rendering happens in the browser using vanilla HTML, CSS, and JavaScript.

```
Client Browser
    ↓
index.html (markup structure)
    ↓
css/styles.css (visual design, layout, responsive)
    ↓
js/script.js (DOM manipulation, interactivity)
```

---

## Technology Stack

| Layer | Tech | Purpose |
|-------|------|---------|
| **Markup** | HTML5 | Semantic structure, accessibility |
| **Styling** | CSS3 | Layout (flexbox), typography, responsive design, print |
| **Scripting** | JavaScript (ES6+) | Print, clipboard, utilities |
| **Version Control** | Git | Track changes, history |
| **Documentation** | Markdown | Specs, logs, guides |

---

## Overview

This is a **static website** (no build tools required, but npm scripts available). All rendering happens in the browser using vanilla HTML, CSS, and JavaScript.

```
Client Browser
    ↓
src/html/index.html (markup structure)
    ↓
src/css/styles.css (visual design, layout, responsive)
    ↓
src/js/script.js (DOM manipulation, interactivity)
```

## File Structure & Responsibilities

```
cv/
├── src/
│   ├── html/
│   │   └── index.html          # Main document (structure & content)
│   ├── css/
│   │   └── styles.css          # All styling (layout, colors, typography)
│   ├── js/
│   │   └── script.js           # Interactivity (print, clipboard, etc.)
│   └── assets/
│       └── images/
│           ├── picture.jpg     # Profile photo
│           └── web.jpg         # Design reference mockup
├── tests/
│   └── cv.test.js              # Jest unit tests
├── docs/
│   ├── prompt.md           # Design requirements & decisions
│   ├── log.md              # Development log
│   ├── features.md         # Feature list & roadmap
│   └── architecture.md     # This file (technical design)
├── .gitignore                  # Git ignore rules
├── .eslintrc.js                # ESLint config
├── .prettierrc.json            # Prettier formatting config
├── jest.config.js              # Jest testing config
├── package.json                # Project metadata & npm scripts
├── package-lock.json           # Locked dependency versions
├── README.md                   # Project overview & getting started
└── LICENSE                     # MIT License
```

---

## Layout & Responsiveness

## Layout & Visual Design

### Container Architecture (CSS Flexbox)

The sidebar uses `flex-direction: column` with `justify-content: space-between` to keep profile content at top and contact section pinned to bottom:

```css
.sidebar {
  flex: 0 0 27%;                           /* Fixed 27% width */
  background-color: #E6E6E6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-top {
  /* Profile image, name, title, summary */
}

.sidebar-bottom {
  /* Contact header + list, references */
}

.content {
  flex: 1;                                 /* Remaining 73% */
  background-color: #fff;
  padding: 40px 40px 40px 30px;
}
```

### Typography Hierarchy

- **Name:** 28px Futura Heavy, centered, no uppercase transform
- **Title:** 18px Futura Light, centered
- **Main Section Headers:** 24px Futura Heavy (EXPERIENCE, EDUCATION, SKILLS, ACHIEVEMENTS)
- **Sidebar Contact Header:** 24px Futura Heavy (CONTACT, matches main headers)
- **Sub-headers (Job, Degree, Achievement titles):** 12–13px Futura Heavy, Title Case (not uppercase)
- **Body text (bullets):** 12px Futura Light
- **Proficiency/Detail text:** 11px Futura Light, grey (#999)
- **Dates/metadata:** grey inline or block spans

### Spacing & Alignment

- **Section headers:** 35px margin-bottom (breathing room before content)
- **Header bars:** Full width with 0 left margin
- **Bullet points:** 16px left padding for consistent alignment
- **Skill category headers:** 16px left padding to align with bullet text
- **Contact header:** 20px margin-bottom (gap before contact list)
- **Proficiency/date text:** Light grey (#888–#999) for visual hierarchy

### Filters & Styling

- **Profile image:** `object-fit: contain`, `filter: grayscale(100%)`, centered
- **Contact icons:** `opacity: 0.6`, `filter: grayscale(100%) brightness(0.8)`, greyscale effect
- **Header bars:** #F0F0F0 background
- **All text:** `font-style: normal !important` (no italics globally)

| Device | Width | Layout | Behavior |
|--------|-------|--------|----------|
| Desktop | 1024px+ | Two-column (30/70) | Full layout, normal spacing |
| Tablet | 768px–1023px | Stacked (sidebar on top) | Adjusted typography, padding |
| Mobile | <768px | Full-width, stacked | Smaller fonts, reduced margins |
| Small Mobile | <480px | Full-width, minimal | Compressed typography, minimal padding |

**Media Queries:**
```css
@media (max-width: 768px) { /* Sidebar stacks on top */ }
@media (max-width: 480px) { /* Compressed mobile layout */ }
```

---

## Typography System

### Font Stack
```css
font-family: 'Futura Book', 'Trebuchet MS', sans-serif;
```

### Font Weights & Styles

| Use | Family | Weight | Style | Size | Example |
|-----|--------|--------|-------|------|---------|
| Headings (section) | Futura Book | 400 (normal) | normal | 24px | EXPERIENCE, EDUCATION |
| Job/degree title | Futura Heavy | 700 (bold) | normal | 12px | Software Engineer |
| Body text | Futura Light | 300 (light) | normal | 12px | Descriptions, bullets |
| Metadata | Futura Book | 400 (normal) | normal | 12px | Company, dates (grey) |
| Secondary details | Futura Light | 300 (light) | italic | 12px | Proficiency, summary |

---

## Color Palette

| Element | Color | Hex | Use Case |
|---------|-------|-----|----------|
| Sidebar BG | Light Grey | #E6E6E6 | Left column background |
| Section Headers BG | Lighter Grey | #F0F0F0 | Section title bar |
| Primary Text | Black | #000 | Job titles, body text |
| Secondary Text | Grey | #888 | Company, dates, proficiency |
| Accent | Light Grey | #ccc | Border lines, dividers |
| Background | White | #fff | Main content area |

---

## Configuration Files

### `.eslintrc.js`
- **Purpose:** JavaScript linting configuration
- **Scope:** `src/js/`, `tests/`, all JavaScript files
- **Enforces:** 
  - Code quality rules (no unused variables, proper syntax)
  - Best practices (semicolons, naming conventions)
  - Style consistency (indentation, quotes)
- **Run:** `npm run lint`
- **Contents:** ES2021 environment, browser + Node.js + Jest globals

### `.prettierrc.json`
- **Purpose:** Code formatting configuration
- **Scope:** All code files (JavaScript, CSS, JSON, Markdown)
- **Enforces:**
  - Consistent quotes (single quotes)
  - Proper indentation (2 spaces)
  - Line length (100 characters)
  - Spacing and trailing commas
- **Run:** `npx prettier --write src/` (or auto on save if IDE configured)
- **Contents:** printWidth 100, tabWidth 2, single quotes, trailing commas ES5

### `jest.config.js`
- **Purpose:** Test runner configuration
- **Scope:** `tests/` folder, test files only
- **Enforces:**
  - Test environment (jsdom for browser APIs)
  - Code coverage thresholds (50% minimum)
  - Test file patterns (*.test.js)
- **Run:** `npm test`, `npm run test:watch`, `npm run test:coverage`
- **Contents:** Test environment, coverage collection, test match patterns

---

## Component Structure (HTML)

### Main Container
```html
<div class="container">
  <aside class="sidebar">
    <!-- Profile, contact, etc. -->
  </aside>
  <main class="content">
    <!-- Experience, education, skills, achievements -->
  </main>
</div>
```

### Section Template
```html
<section class="experience-section">
  <h2 class="section-title">EXPERIENCE</h2>
  <article class="job">
    <h3 class="job-title">Software Engineer</h3>
    <p class="job-company">Gropyus, Vienna</p>
    <p class="job-dates">Oct 2020 – June 2025</p>
    <ul class="job-description">
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
  </article>
</section>
```

---

## JavaScript Architecture

### Modular IIFE Pattern
```javascript
(function() {
  'use strict';
  
  // Private functions
  function setupPrint() { /* ... */ }
  function setupClipboard() { /* ... */ }
  
  // Public API (optional)
  window.CVPage = {
    toggleDarkMode: toggleDarkMode,
    exportPDF: exportPDF
  };
})();
```

### Current Features
1. **Print handler** — Ctrl+P support
2. **Clipboard utility** — Copy email to clipboard
3. **Year auto-display** — Current year in DOM
4. **Placeholder hooks** — Future feature stubs (dark mode, filtering, etc.)

---

## Print Stylesheet

### Optimization
- `@media print { }` removes unnecessary styling
- Preserves colors for branded output
- Ensures proper page breaks
- Maintains readability in PDF

```css
@media print {
  body { background: #fff; }
  a { color: #000; text-decoration: none; }
  .no-print { display: none; }
}
```

---

## Performance Considerations

### Current State (v1.0)
- Single HTML file (~200 KB)
- Single CSS file (~15 KB)
- Single JS file (~5 KB)
- 2 images (~500 KB combined)
- **Total:** ~720 KB (uncompressed)

### Optimization Opportunities (Future)
- Image compression (WebP format, lazy loading)
- CSS minification
- JavaScript minification
- Gzip compression (server-side)
- Service Worker for offline mode

---

## Browser Compatibility

### Supported (tested)
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Not Supported
- Internet Explorer 11 (ES6+ syntax)
- Mobile browsers < 2020 releases

---

## Security Considerations

### Current
- Static content only (no XSS vectors)
- No user input/forms (no injection risk)
- No backend/API calls (no auth needed)

### Future (if adding features)
- Form submissions: use HTTPS + third-party service (Formspree, etc.)
- API calls: implement CORS + sanitization
- Analytics: privacy-focused (Plausible, Fathom)

---

## Development Workflow

### Local Testing

**Without npm/Node.js:**
```bash
# Option 1: Direct open
double-click src/html/index.html

# Option 2: Python HTTP server
python -m http.server 8000
# Then visit: http://localhost:8000/src/html/index.html
```

**With Node.js installed:**
```bash
# Install dependencies
npm install

# Start development server
npm start
# Auto-opens http://localhost:8000 with live reload

# Watch mode (no auto-reload)
npm run dev
```

### Testing
```bash
# Run all tests
npm test

# Run in watch mode (re-runs on file changes)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Code Quality
```bash
# Lint JavaScript
npm run lint

# Lint & fix CSS
npm run lint:css

# Format all code (Prettier)
npx prettier --write src/
```

### Version Control
```bash
git add .
git commit -m "Description"
git push
```

### Logging
```bash
# Manual
Edit docs/chat-log.md

# Programmatic
npm run log -- "prompt text" "response text"
# or
node util/appendLog.js "prompt" "response"
```

---

## Future Architectural Changes

### Potential Upgrades
1. **Build tool integration** — Webpack, Vite (for optimization)
2. **CSS preprocessor** — SASS/SCSS (for maintainability)
3. **Framework adoption** — React, Vue (if complexity grows)
4. **CMS backend** — Headless CMS (Contentful, Strapi) for content management
5. **Deployment** — Vercel, Netlify (for hosting + CDN)

---

## References & Resources

- [MDN Web Docs](https://developer.mozilla.org) — HTML, CSS, JavaScript specs
- [CSS-Tricks](https://css-tricks.com) — Layout, responsive design patterns
- [Web.dev](https://web.dev) — Performance, accessibility, SEO best practices
- [Futura Font Info](https://en.wikipedia.org/wiki/Futura_(typeface)) — Typography details

---

**Last Updated:** 2026-01-08  
**Maintainer:** MA Elena Corio
