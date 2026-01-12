# Architecture & Technical Design

## Overview

This is a **static website** (no build tools, no server-side logic). All rendering happens in the browser using vanilla HTML, CSS, and JavaScript. CSS is organized into modular files that are imported via `main.css`.

```
Client Browser
    ↓
index.html (markup structure)
    ↓
assets/css/main.css (imports modular stylesheets)
    ├── global.css
    ├── layout.css
    ├── sidebar.css
    ├── components.css
    ├── sections.css
    ├── responsive.css
    └── print.css
    ↓
assets/js/script.js (DOM manipulation, interactivity)
```

---

## Technology Stack

| Layer | Tech | Purpose |
|-------|------|---------|
| **Markup** | HTML5 | Semantic structure, accessibility |
| **Styling** | CSS3 (modular) | Layout (flexbox), typography, responsive design, print |
| **Scripting** | JavaScript (ES6+) | Expandable sections, sidebar loading, interactivity |
| **Version Control** | Git | Track changes, history |
| **Documentation** | Markdown | Specs, logs, guides |

---

## Modular CSS Architecture

**main.css** (Master stylesheet):
```css
@import url('global.css');      /* Reset, base styles, typography */
@import url('layout.css');      /* Container, sidebar, content flex layout */
@import url('sidebar.css');     /* Profile image, name, title, contact */
@import url('components.css');  /* Buttons, navigation, expandable sections */
@import url('sections.css');    /* Experience, Education, Skills, Achievements */
@import url('responsive.css');  /* Media queries for 768px, 480px breakpoints */
@import url('print.css');       /* Print styles for PDF export */
```

**Rationale:**
- **Separation of concerns**: Each file handles one aspect of styling
- **Maintainability**: Easier to find and modify specific styles
- **Scalability**: Simple to add new modules as project grows
- **No build step required**: @import works natively in modern browsers

---

## File Structure & Responsibilities

```
cv/
├── index.html              # Homepage (entry point - web standard)
├── about.html              # About page (experience, education, achievements, skills)
├── work.html               # Work page (placeholder for future portfolio content)
├── components/
│   ├── header.html         # Shared navigation header component (loaded via JavaScript)
│   └── sidebar.html        # Shared sidebar component (loaded via JavaScript)
├── assets/
│   ├── css/
│   │   ├── main.css       # Main stylesheet (imports all modular CSS files)
│   │   ├── global.css     # Reset, typography, and global styles
│   │   ├── layout.css     # Two-column flexbox layout
│   │   ├── sidebar.css    # Sidebar styling (profile, contact, summary)
│   │   ├── components.css # Reusable components (buttons, navigation, expandable sections)
│   │   ├── sections.css   # Content sections (experience, education, skills, achievements)
│   │   ├── responsive.css # Media queries for tablets and mobile
│   │   └── print.css      # Print stylesheet for PDF export
│   ├── js/
│   │   └── script.js      # Interactivity (sidebar loading, expandable sections)
│   └── images/
│       ├── picture.jpg    # Profile photo
│       └── web.jpg        # Design reference mockup
├── tests/
│   └── cv.test.js         # Jest unit tests
├── docs/
│   ├── prompt.md          # Design requirements & decisions
│   ├── log.md             # Development log
│   ├── features.md        # Feature list & roadmap
│   ├── design.md          # Design specifications
│   └── architecture.md    # This file (technical design)
├── util/
│   └── appendLog.js       # Utility for logging
├── .gitignore             # Git ignore rules
├── .eslintrc.js           # ESLint config
├── .prettierrc.json       # Prettier formatting config
├── jest.config.js         # Jest testing config
├── package.json           # Project metadata & npm scripts
├── package-lock.json      # Locked dependency versions
├── README.md              # Project overview & getting started
└── LICENSE                # MIT License
```

### Page Structure

- **index.html** (Home - Root)
  - Sidebar: loaded dynamically from /cv/components/sidebar.html via JavaScript
  - Content: welcome message + CV/PORTFOLIO navigation links
  - Purpose: Entry point, navigation hub
  - Navigation paths: `/cv/about.html` and `/cv/work.html`

- **about.html** (About Page - Root)
  - Sidebar: loaded dynamically from /cv/components/sidebar.html via JavaScript
  - Content: expandable sections (Experience, Education, Achievements, Skills)
  - Navigation: Home button back to `/cv/index.html`
  - Purpose: Display full CV with collapsible sections

- **work.html** (Work Page - Root)
  - Sidebar: loaded dynamically from /cv/components/sidebar.html via JavaScript
  - Content: placeholder for portfolio projects
  - Navigation: Home button back to `/cv/index.html`
  - Purpose: Dedicated work/portfolio showcase page

- **components/sidebar.html** (Shared Component)
  - Reusable sidebar markup (profile, summary, contact)
  - Loaded dynamically into all pages using JavaScript fetch() from /cv/components/sidebar.html
  - Avoids code duplication across all HTML pages
  - Maintains single source of truth for sidebar content
  - Images reference `assets/` folder (relative to root)

---

## JavaScript Architecture

### Sidebar Loading
```javascript
// script.js loads sidebar.html dynamically
async function loadSidebar() {
  const sidebarContainer = document.getElementById('sidebar-container');
  
  // Detect if we're in src/ folder
  const isInSrc = window.location.pathname.includes('/src/');
  const sidebarPath = isInSrc ? 'sidebar.html' : 'src/sidebar.html';
  
  const response = await fetch(sidebarPath);
  sidebarContainer.innerHTML = await response.text();
}
```

**Why this approach?**
- DRY principle: Single sidebar.html file instead of repeating in 3 HTML files
- Easier maintenance: Update sidebar once, changes appear everywhere
- No build tools needed: Pure vanilla JavaScript with fetch() API
- Path detection: Automatically resolves correct path from root or src/ folder
- Graceful fallback: Shows error message if fetch fails

**Requires HTTP server:**
- Fetch API doesn't work with `file://` protocol
- Run `npm start` or `npx http-server . -p 8000` to serve locally

---

## Navigation Flow

```
User lands on site
    ↓
index.html (Home)
    ├→ Click "WORK" → work.html
    │  └→ Click "← Home" → index.html
    │
    └→ Click "ABOUT" → about.html
       └→ Click "← Home" → index.html
```

All links use relative paths (no absolute URLs), making the site portable.

---

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

- **Name:** 30px Inter Bold (700), centered, no uppercase transform
- **Title:** 12px Inter Regular (400), centered
- **Main Section Headers:** 24px Inter Semi-bold (600) (EXPERIENCE, EDUCATION, SKILLS, ACHIEVEMENTS)
- **Sidebar Contact Header:** 13px Inter Bold (700) (CONTACT, matches section style)
- **Sub-headers (Job, Degree, Achievement titles):** 13px Inter Bold (700), Title Case (not uppercase)
- **Body text (bullets):** 13px Inter Regular (400)
- **Proficiency/Detail text:** 12px Inter Medium (500), grey (#888)
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
---

## Typography System

### Font Stack (Updated 2026-01-12)
```css
font-family: 'Inter', sans-serif;
/* Google Fonts: wght: 300, 400, 500, 600, 700 */
```

**Rationale:** Inter replaces Futura for superior digital readability, modern aesthetic, and better mobile performance. Variable weights provide precise typographic control.

### Font Weights & Styles (Inter System)

| Use | Weight | Style | Size | Example |
|-----|--------|-------|------|---------|
| Headings (section) | 600 (Semi-bold) | normal | 24px (desktop), 20px (mobile) | EXPERIENCE, EDUCATION |
| Job/degree/skill title | 700 (Bold) | normal | 13px (desktop), 12px (mobile) | Software Engineer |
| Body text & bullets | 400 (Regular) | normal | 13px (desktop), 12px (mobile) | Descriptions, bullets |
| Metadata & labels | 500 (Medium) | normal | 12px (desktop), 10px (mobile) | Company, dates, proficiency |
| Secondary details | 300 (Light) | normal | 12px | Summary, supporting text |

### Hierarchy Levels
1. **Level 1** (52px Bold on desktop, 36px on mobile) - Homepage title
2. **Level 2** (30px Bold on desktop, 26px on mobile) - Sidebar name  
3. **Level 3** (24px Semi-bold) - Section headers (EXPERIENCE, EDUCATION, SKILLS, ACHIEVEMENTS)
4. **Level 4** (13px Bold desktop / 12px Bold mobile) - Job/degree/skill titles
5. **Level 5** (13px Regular desktop / 12px Regular mobile) - Body text and bullet descriptions
6. **Level 6** (12px Medium desktop / 10px Medium mobile) - Dates, proficiency, metadata

---

## Color Palette

| Element | Color | Hex | Use Case |
|---------|-------|-----|----------|
| Sidebar BG | Light Grey | #E6E6E6 | Left column background |
| Section Headers BG | Lighter Grey | #F0F0F0 | Section title bar background |
| Primary Text | Black | #000 | Job titles, body text, headings |
| Secondary Text | Grey | #888–#999 | Company, dates, proficiency levels |
| Accent | Light Grey | #ccc | Subtle borders, dividers |
| Background | White | #fff | Main content area |

---

## Configuration Files

### `.eslintrc.js`
- **Purpose:** JavaScript linting configuration
- **Scope:** `assets/js/`, `tests/`, all JavaScript files
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
- **Run:** `npx prettier --write .` (or auto on save if IDE configured)
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
    <!-- Profile, contact, etc. - loaded dynamically -->
  </aside>
  <main class="content">
    <!-- Experience, education, skills, achievements -->
  </main>
</div>
```

### Section Template
```html
<section class="experience-section">
  <div class="expandable-header" data-section="experience">
    <h2 class="section-title">
      <span class="toggle-icon">+</span>
      EXPERIENCE
    </h2>
  </div>
  <div class="expandable-content" id="experience">
    <article class="job">
      <h3 class="job-title">Software Engineer</h3>
      <p class="job-company">Gropyus, Vienna</p>
      <p class="job-dates">Oct 2020 – June 2025</p>
      <ul class="job-description">
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
      </ul>
    </article>
  </div>
</section>
```

---## JavaScript Architecture

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
- [Inter Font Info](https://rsms.me/inter/) — Modern sans-serif typography

---

**Last Updated:** 2026-01-08  
**Maintainer:** MA Elena Corio
