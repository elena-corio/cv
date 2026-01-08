# Development Log

## Session 1: 2026-01-08

### Phase 1: Project Setup & Design Analysis
- **Analyzed** `web.jpg` CV mockup design
- **Extracted** design specifications: two-column layout, Futura typography, color palette (#E6E6E6, #F0F0F0, #000, #888)
- **Defined** content structure: Experience (2), Education (3), Skills (Languages + Technologies), Achievements
- **Organized** folder structure: css/, js/, assets/images/, docs/, util/

### Phase 2: Core Implementation
- **Built** `index.html` with semantic markup
  - Sidebar: profile image (centered, contained, grayscale), name, title, summary, contact (at bottom), references
  - Main content: experience, education, skills, achievements sections
- **Implemented** `css/styles.css`
  - Flexbox two-column layout (27/73 split) with sidebar pinned to bottom for contact
  - Futura font stack (Heavy for headers/titles, Light for body text)
  - Responsive breakpoints: 768px (tablet), 480px (mobile)
  - Print stylesheet for PDF export
- **Created** `js/script.js`
  - Print functionality (Ctrl+P support)
  - Clipboard copy for email
  - Current year auto-update
  - Placeholders for future features

### Phase 3: Organization & Documentation
- **Renamed** `functions.js` → `script.js`
- **Reorganized** files into `src/` structure
- **Updated** all file paths in index.html
- **Created** docs/ folder with architecture, design spec, features, and logs

### Phase 4: Refined Design Implementation
- **Typography Updates:**
  - Removed all italics globally (`font-style: normal !important`)
  - Name: 28px Heavy (centered)
  - Title: 18px Light (centered)
  - Section headers: 24px Heavy in grey bars (#F0F0F0)
  - Sub-headers (job, degree, achievement titles): Heavy, Title Case (not uppercase)
  - Bullet points: Light with generous spacing (10px margin, 1.6 line-height)
  - Proficiency levels: 11px Light in grey (#999)

- **Layout & Alignment:**
  - Profile image: centered, contained (no cropping), grayscale filter
  - Contact section: moved to bottom of sidebar using flexbox `justify-content: space-between`
  - Contact header (CONTACT): 24px Heavy, matches main headers
  - Icons: greyscale with opacity (0.6) and brightness filter
  - Header bars: full width, no left margin
  - Section spacing: 35px margin-bottom for breathing room
  - Text alignment: skill category headers aligned with bullet points (16px left padding)

- **Skills Section Restructure:**
  - Languages: Italian, English, German (with proficiency levels)
  - Technologies: 6 categories (Visual Coding, Programming, Environmental Analysis, Structural Analysis, 3D Modeling, Other)
  - Each skill includes proficiency level in parentheses and grey text

- **Achievements Enhancement:**
  - Certifications: dates now in grey inline spans (2021), (2019), (2020)
  - Publications & Awards: dates remain grey and subtle

---

## Current Status
✅ **Complete:** Refined static HTML/CSS/JS CV with polished design, proper typography hierarchy, improved alignment, and optimized spacing.

## Next Steps (Future)
- [ ] Test locally with `npm install && npm start`
- [ ] Refine graphics (compress images, WebP format)
- [ ] Optional: Self-host Futura font or use web-safe alternatives
- [ ] Run tests: `npm test`
- [ ] Add dark mode toggle
- [ ] Implement skill filtering/search functionality
- [ ] Create PDF export button
- [ ] Accessibility audit (WCAG compliance)
- [ ] Performance optimization (image compression, lazy loading)
- [ ] Deploy to Netlify/Vercel

---

## Tools & Technologies Used
- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **Testing:** Jest (configured, ready to use)
- **Linting:** ESLint, Stylelint
- **Formatting:** Prettier
- **Version Control:** Git
- **Logging:** Markdown, Node.js (appendLog.js)
- **Package Management:** npm

---

## Phase 4 (Latest): Project Structure Reorganization
- **Renamed** `scripts/` → `util/` (cleaner naming)
- **Created** `src/` folder with semantic subfolders:
  - `src/html/` — index.html
  - `src/css/` — styles.css
  - `src/js/` — script.js
  - `src/assets/images/` — picture.jpg, web.jpg
- **Moved** all files into `src/` structure
- **Updated** index.html paths (relative links: ../css/, ../js/, ../assets/)
- **Created** `.gitignore` with Node/npm entries
- **Created** `package.json` with npm scripts:
  - `npm start` — Dev server on port 8000
  - `npm test` — Run Jest tests
  - `npm run lint` — Lint JavaScript
  - `npm run lint:css` — Lint CSS
- **Set up testing framework:**
  - `jest.config.js` — Jest configuration
  - `tests/cv.test.js` — Example test file
- **Added linting & formatting configs:**
  - `.eslintrc.js` — ESLint rules
  - `.prettierrc.json` — Prettier formatting
- **Updated documentation:**
  - `docs/architecture.md` — New folder structure, updated workflow
  - `docs/log.md` — This file, added Phase 4 notes
