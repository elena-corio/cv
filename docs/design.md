# Design Specification — CV Layout & Styling

**Saved:** 2026-01-08

## 1. Global Layout & Styling
- Structure: Two-column flex or grid layout.
- Sidebar (Left): Roughly 30% width, light grey background (#E6E6E6).
- Main Content (Right): Roughly 70% width, white background.
- Typography: Futura.
- Headers: All-caps in the right column with a light grey (#E6E6E6) horizontal bar behind them for section separation. Font: Futura Bk BT, Book, 24 pt.
- Body Text: Mixed weights; bold for titles, regular for descriptions, and italicized for smaller details.
- Color Palette: White and light grey for background, black and light grey for text.

## 2. Sidebar Elements (Left Column)
- Profile Image: A square grayscale headshot at the top (`picture.jpg`).
- Name & Title:
  - `MA Elena Corio` — Futura Bk BT, Book, 20 pt.
  - `Computational Designer` — Futura Lt BT, Light Italic, 14 pt.
- Professional Summary: A justified block of italicized text describing her background in architectural design and digital workflows. Futura Lt BT, Light Italic, 12 pt.
- Contact Section: Located at the bottom left.
  - Icons (Home, Phone, Email, Skype) followed by contact details. Futura Lt BT, Light, 12 pt.
- A "References Available Upon Request" note at the very bottom. Futura Lt BT, Light Italic, 12 pt.

## 3. Main Content Elements (Right Column)
### Experience Section
- Structure: Title (Futura Hv BT, Heavy, 12 pt., black) → Company/Location (Futura Hv BT, Book, 12 pt., grey) → Dates (in grey) (Futura Hv BT, Book, 12 pt., grey) → Bullet points (Futura Lt BT, Light, 12 pt., black).
- Role 1: Software Engineer at Gropyus, Vienna (Oct 2020 – June 2025). Focus: Rule-based design logic and backend components.
- Role 2: Structural and Computational Engineer at B+G Ingenieure, Stuttgart (May 2017 – Aug 2020). Focus: FEA modeling, modular systems and large-scale structures (NFL Stadium roof).

### Education Section
- Structure: same as above
- Item 1: Master of Computational Design (MaCAD) at IAAC (2025 – present). Focus: Computational design, BIM and Smart Construction, AI in Architecture.
- Item 2: Master’s Degree in Architectural Engineering at University of Pisa (Dec 2016). Includes Grade (110/110 with honours) and core subjects.
- Item 3: Research Student at CNR (May 2016 – Dec 2016). Focus: Timber gridshell structures and prototyping.

### Skills Section
- Structure: only title and bullet point. Proficiency level in parenthesis and light grey font.
- Languages: Listed with proficiency levels (Italian: Mother tongue, English: C1, German: B2).
- Technologies: Grouped by category (Visual scripting, Programming, Environmental Analysis, Structural analysis, Graphic, Office).

### Achievements Section
- Structure: only title and bullet point. Proficiency level in parenthesis and light grey font.
- Certifications: Includes Chartered Engineer (2021) and Rhino/Grasshopper certs.
- Publications: Details a specific 2016 publication in the International Journal of Computational Methods.
- Awards: "Best Thesis in Computer Graphics - Eurographics Italy" (2017).

## 4. Technical Suggestions for the AI
- CSS Recommendation: Use `display: flex` for the main container and padding to create the breathing room seen in the margins.
- Section Headers: Use an `h2` with `background-color: #F0F0F0` and `width: 100%` to mimic the grey bars.
- Responsiveness: On mobile, the sidebar should stack on top of the main content.

---

*This file is the canonical design spec for implementing the CV UI. Update `docs/design.md` if the visual details change.*