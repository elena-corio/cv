# Features & Roadmap

## Current Features (v1.0)

### ✅ Layout & Structure
- **Refined two-column layout** (27% sidebar, 73% main content)
- **Multi-page architecture** (index.html home, about.html about page, portfolio.html placeholder)
- **Centered profile section** (grayscale image no-crop, name & title centered below)
- **Pinned contact section** (bottom of sidebar using flexbox)
- **Professional spacing** (20px gaps after headers, aligned text, 24px bullet indent)
- **Full-width header bars** (#F0F0F0 background with grey typography)
- **Responsive homepage** (centered welcome message + navigation links on all screen sizes)

### ✅ Navigation
- **Homepage (index.html)** — Entry point with CV & PORTFOLIO links
- **About Page (about.html)** — Full CV with collapsible sections + Home button
- **Portfolio Page (portfolio.html)** — Placeholder + Home button
- **Link styling** — Hover effects (underline), visited state (darker color)
- **Relative URLs** — All links use relative paths for portability

### ✅ Typography & Styling
- **Inter font stack** with weight hierarchy (Bold for headers, Light for body)
- **Improved readability** (base font 13px, line-height 1.7)
- **No italics** globally (modern, clean aesthetic)
- **Proficiency badges** in grey inline text
- **Certification dates** in grey inline spans
- **Careful alignment** (headers aligned with bullet text, centered sidebar content)
- **Mobile-optimized fonts** (adjusts heading sizes for tablet/mobile)

### ✅ Content Sections
- **Experience** (3 roles with descriptions including Research Student)
- **Education** (2 degrees)
- **Skills** (Languages + Technologies)
  - Languages: Italian, English, German
  - Technologies: Parametric & Visual Scripting, Programming, Environmental Analysis, Structural Analysis, Graphic & Communication, Productivity
- **Achievements** (Certificates with dates, Publications, Awards)

### ✅ Interactivity
- **Expandable sections** (Experience, Education, Achievements, Skills with +/- toggle icons)
- **"Expand All" button** — Collapse/expand all sections at once
- **Section persistence** — Smooth animations on expand/collapse
- **Print functionality** — Ctrl+P keyboard support
- **Clipboard copy** — Email copy-to-clipboard utility

### ✅ Visual Polish
- **Greyscale contact icons** with opacity filter
- **Greyscale profile image** with `object-fit: contain` (no cropping)
- **Proficiency levels** in muted grey (#999)
- **Dates/metadata** subtly grey (#888)
- **Link hover effects** — Bottom border underline on hover
- **Visited link styling** — Links appear darker after clicking

### ✅ Responsive Design
- **Tablet breakpoint (768px)** — Adjusted font sizes, consistent header scaling
- **Mobile breakpoint (480px)** — Vertical layout, touch-friendly sizing
- **CONTACT header consistency** — Matches section header sizes on all breakpoints
- **Text alignment** — Left-aligned on mobile for better readability
- **Navigation links** — Stack vertically on mobile

### ✅ Print & Export
- **Print-optimized CSS** (`@media print`)
- **PDF-ready styling** (preserves layout and colors)
- **Keyboard support** for print dialog

### ✅ Accessibility (Foundation)
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Focus-friendly styling

### ✅ Documentation
- `README.md` — Quick start and overview
- `docs/architecture.md` — Technical design with multi-page navigation
- `docs/design.md` — Design specification and rationale
- `docs/log.md` — Detailed development log with all changes
- `docs/features.md` — This file (roadmap)
- `docs/prompt.md` — Initial requirements

---

## Planned Features (v2.0+)

### UI Enhancements
- [ ] **Dark mode toggle** — automatic detection + manual override, localStorage persistence
- [ ] **Smooth scroll animations** — fade-in on section scroll
- [ ] **Hover effects** — subtle animations for interactive elements
- [ ] **Print preview mode** — see how CV looks before printing

### Content & Navigation
- [ ] **Table of contents sidebar** — quick section navigation
- [ ] **Scroll spy** — highlight current section in sidebar
- [ ] **Search/filter** — search skills, certificates by keyword
- [ ] **Skill category toggle** — show/hide skill categories interactively

### Interactivity
- [ ] **Copy all contact info** — bulk copy option
- [ ] **PDF export button** — generate downloadable PDF with branding
- [ ] **Share buttons** — LinkedIn, Twitter, email share links
- [ ] **QR code generator** — link to online CV version

### Technical Enhancements
- [ ] **Service Worker** — offline mode, PWA capabilities
- [ ] **Lazy loading** — optimize images for slow connections
- [x] **Web fonts** — Inter from Google Fonts
- [ ] **Analytics** — track CV views (optional, privacy-conscious)

### Localization
- [ ] **Multi-language support** — EN, IT, DE translations
- [ ] **Language switcher** — toggle between language versions
- [ ] **Dynamic content loading** — language-specific CV variants

### Advanced Features
- [ ] **CMS integration** — edit content without touching code
- [ ] **Comments/feedback form** — collect inquiries from visitors
- [ ] **Version history** — display CV update date, previous versions
- [ ] **Integration with LinkedIn API** — auto-sync profile data (optional)

### Performance & SEO
- [ ] **Meta tags optimization** — improved discoverability
- [ ] **Open Graph tags** — better social media sharing
- [ ] **Sitemap & robots.txt** — SEO best practices
- [ ] **Page speed optimization** — Lighthouse score > 90

---

## Known Limitations

1. **No backend** — static site only; no form submissions without third-party service
2. **Image handling** — no lazy loading yet; optimize manually
3. **Browser support** — modern browsers only (ES6+); IE11 not supported
4. **Accessibility** — foundation laid; deeper WCAG audit pending

---

## Feature Voting & Prioritization

**High Priority** (next release):
1. Dark mode
2. Skill search/filter
3. PDF export button
4. Multi-language support

**Medium Priority** (next 2 releases):
1. Scroll spy / table of contents
2. Print preview mode
3. Share buttons
4. Service Worker (PWA)

**Low Priority** (future):
1. Analytics integration
2. CMS backend
3. LinkedIn sync
4. Comment/feedback form

---

## Feedback & Contributions

To request a feature, update this file and create a GitHub issue or commit with details.

**Last Updated:** 2026-01-10
