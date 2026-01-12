# CV - MA Elena Corio

A refined, responsive HTML/CSS/JavaScript curriculum vitae showcasing computational design expertise with modern typography, thoughtful spacing, and careful alignment.

## Overview

This is a **static website** implementation of a professional CV featuring:
- **Left sidebar (27%):** Centered profile image (grayscale, uncrpped), name & title, professional summary, contact info pinned to bottom
- **Right content area (73%):** Full-width grey header bars with EXPERIENCE, EDUCATION, SKILLS, ACHIEVEMENTS sections

## Design Features

- ✅ **Centered Profile:** Image displayed in full without cropping
- ✅ **Careful Typography:** Heavy fonts for headers/titles, Light for body; no italics
- ✅ **Refined Spacing:** Increased margins between sections, 35px gap after headers
- ✅ **Aligned Headers:** Section titles aligned with bullet-point text (16px left padding)
- ✅ **Greyscale Icons:** Contact icons rendered in muted greyscale
- ✅ **Proficiency Levels:** Skills include inline grey proficiency badges
- ✅ **Print-Friendly:** Optimized for PDF export
- ✅ **Responsive Design** — Adapts to mobile (480px), tablet (768px), and desktop screens

## Project Structure

```
cv/
├── src/                          # Source code
│   ├── html/
│   │   └── index.html           # Main HTML (structure, content)
│   ├── css/
│   │   └── styles.css           # All styling (layout, colors, typography)
│   ├── js/
│   │   └── script.js            # JavaScript utilities
│   └── assets/
│       └── images/
│           ├── picture.jpg      # Profile photo (grayscale)
│           └── web.jpg          # Design reference
├── tests/
│   └── cv.test.js               # Jest unit tests
├── docs/
│   ├── design.md                # Design specification & rationale
│   ├── prompt.md                # Initial design requirements
│   ├── log.md                   # Development log
│   ├── features.md              # Feature list & roadmap
│   └── architecture.md          # Technical architecture
├── util/
│   └── appendLog.js             # Log utility (Node.js)
├── .eslintrc.js                 # ESLint config
├── .prettierrc.json             # Prettier formatting
├── jest.config.js               # Jest testing config
├── package.json                 # Dependencies & npm scripts
├── .gitignore                   # Git ignore rules
├── README.md                    # This file
└── LICENSE                      # MIT License
```

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- **Optional:** Node.js 16+ and npm (for dev tools, testing, linting)

### Running Locally

**Without Node.js (quick preview):**

1. Open in browser:
   - **Option A:** Double-click `src/html/index.html`
   - **Option B:** Right-click `src/html/index.html` → "Open with" → choose browser
   - **Option C:** Run `start src\html\index.html` in PowerShell

**With Node.js installed:**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   This opens http://localhost:8000 automatically.

3. **Available npm scripts:**
   ```bash
   npm start              # Dev server with auto-open
   npm run dev           # Dev server without auto-open
   npm test              # Run Jest tests
   npm run test:watch   # Tests in watch mode
   npm run test:coverage # Coverage report
   npm run lint          # Lint & fix JavaScript
   npm run lint:css     # Lint & fix CSS
   npm run log          # Log prompt/response to file
   ```

## Customization

### Update Content
Edit `index.html` directly to:
- Change contact information
- Update experience and education entries
- Add/remove skills or achievements
- Modify section content

### Adjust Styling
Edit `css/styles.css` to:
- Change colors (e.g., `#E6E6E6` for sidebar, `#000` for text)
- Adjust typography (font sizes, weights, line heights)
- Modify spacing (padding, margins)
- Customize responsive breakpoints

### Add Interactivity
Extend `js/script.js` to add:
- Dark mode toggle
- Skill filtering
- PDF export
- Scroll-based animations
- Form submissions

## Print & PDF

1. **Print to PDF:**
   - Open in browser → **Ctrl+P** (or Cmd+P on Mac)
   - Select "Save as PDF"
   - Print styling is optimized in `styles.css`

2. **Keyboard shortcut:** Ctrl+P automatically triggers print dialog

## Responsive Breakpoints

- **Desktop:** 1024px+ (two-column layout)
- **Tablet:** 768px–1023px (stacked sidebar, adjusted spacing)
- **Mobile:** <768px (full-width layout)
- **Small Mobile:** <480px (compressed typography, minimal padding)

## Color Palette

| Element | Color | Use |
|---------|-------|-----|
| Sidebar Background | `#E6E6E6` | Left column |
| Section Headers | `#F0F0F0` | Section title bars |
| Text (Primary) | `#000` | Body text, job titles |
| Text (Secondary) | `#888` | Company, dates, proficiency levels |
| Links | Black/customizable | Future expansion |

## Typography

- **Font Family:** Inter (from Google Fonts, system fallback: sans-serif)
- **Weights:** 
  - Book (400) — body text, section titles
  - Light (300) — summaries, details
  - Heavy (700) — category headings
- **Sizes:**
  - 24px — Main section headers
  - 20px — Name
  - 14px — Job/degree title
  - 12px — Body text
  - 11px — Proficiency, publication details

## Development Logs

Session logs and conversation history are tracked in `docs/`. See:
- **`docs/log.md`** — Detailed technical development progress
- **`docs/prompt.md`** — Design requirements and key decisions
- **`docs/architecture.md`** — Technical architecture and configuration

## Configuration Files

- **`.eslintrc.js`** — JavaScript linting rules (code quality, syntax, best practices)
- **`.prettierrc.json`** — Code formatting (quotes, indentation, spacing, line length)
- **`jest.config.js`** — Test runner setup (test environment, coverage, paths)

See [`docs/architecture.md`](docs/architecture.md) for detailed configuration documentation.

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Skill category filtering
- [ ] PDF export button
- [ ] Form for inquiries
- [ ] Internationalization (multi-language support)
- [ ] Progressive Web App (PWA) features
- [ ] Search/filter functionality

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2026 MA Elena Corio. All rights reserved.

## Contact

For inquiries, refer to contact details in the sidebar of the CV.

---

**Last Updated:** January 8, 2026  
**Created with:** HTML, CSS, JavaScript
