# Features & Roadmap

## Current Features (v1.0)

### ✅ Static Content
- **Two-column responsive layout** (30% sidebar, 70% main content)
- **Profile section** (image, name, title, professional summary)
- **Contact information** (location, phone, email, messaging)
- **Experience section** (2 roles with descriptions)
- **Education section** (3 degrees/training entries)
- **Skills section** (7 categories with proficiency levels)
- **Achievements section** (certifications, publications, awards)

### ✅ Responsive Design
- Desktop layout (1024px+)
- Tablet layout (768px–1023px) — stacked sidebar
- Mobile layout (<768px) — full-width, compressed typography
- Small mobile (< 480px) — minimal spacing, readability optimized

### ✅ Print & Export
- Print-optimized CSS (`@media print`)
- Ctrl+P keyboard shortcut for print dialog
- PDF-ready styling (preserves colors, maintains layout)

### ✅ Interactivity (Basic)
- Clipboard copy for email address
- Current year auto-display
- Print button support (if added to HTML)

### ✅ Accessibility (Foundation)
- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<article>`)
- Proper heading hierarchy (h1, h2, h3, h4)
- Alt text for images
- Focus-friendly styling

### ✅ Documentation
- Comprehensive README.md
- Technical documentation (docs/architecture.md)
- Feature roadmap (this file)
- Design requirements (docs/prompt.md)
- Development log (docs/log.md)

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
- [ ] **Search/filter** — search skills, certifications by keyword
- [ ] **Skill category toggle** — show/hide skill categories interactively

### Interactivity
- [ ] **Copy all contact info** — bulk copy option
- [ ] **PDF export button** — generate downloadable PDF with branding
- [ ] **Share buttons** — LinkedIn, Twitter, email share links
- [ ] **QR code generator** — link to online CV version

### Technical Enhancements
- [ ] **Service Worker** — offline mode, PWA capabilities
- [ ] **Lazy loading** — optimize images for slow connections
- [ ] **Web fonts** — self-hosted Futura (or fallback subset)
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

**Last Updated:** 2026-01-08
