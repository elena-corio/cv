# Design Specification — CV Layout & Styling

**Updated:** 2026-01-12 (Inter typography system, 350px fixed sidebar)

---

## Current Design System

### Typography
- **Font Family:** Inter (Google Fonts, wght: 300-700)
- **System:** Modern, clean, highly readable sans-serif
- **Weights Used:**
  - 300 (Light) - Secondary details, subtle text
  - 400 (Regular) - Body text, descriptions
  - 500 (Medium) - Metadata, uppercase labels
  - 600 (Semi-bold) - Emphasis, highlights
  - 700 (Bold) - Headers, titles, primary focus

### Color Palette
- **Sidebar Background:** #E6E6E6 (light grey)
- **Section Headers:** #F0F0F0 (lighter grey background)
- **Primary Text:** #000 (black) for all body and heading content
- **Secondary Text:** #888-#999 (grey) for dates, proficiency, metadata
- **Content Area:** #fff (white background)

### Sidebar Layout
- **Width:** Fixed 350px (desktop), responsive overlay (mobile ≤768px)
- **Structure:** Flex column with `justify-content: space-between`
  - `.sidebar-top`: Profile image, name, title, summary
  - `.sidebar-bottom`: Contact section pinned to bottom via `margin-top: auto;`
- **Profile Image:** Centered, max-height 220px, grayscale filter, `object-fit: contain`
- **Name:** 30px Bold, centered, no uppercase transform
- **Title:** 12px Regular, centered
- **Summary:** 12px Regular, line-height 1.6, justified alignment
- **Contact Icons:** Grayscale with opacity 0.6 and brightness filter

### Typography Hierarchy

**Desktop:**
- Homepage Title: 52px Bold
- Section Headers: 24px Semi-bold (#F0F0F0 background, full-width)
- Sidebar Name: 30px Bold
- Job/Degree/Skill Titles: 13px Bold
- Body Text (bullets): 13px Regular
- Metadata (dates, proficiency): 12px Medium, uppercase, grey

**Mobile (≤768px):**
- Homepage Title: 36px Bold
- Section Headers: 20px Semi-bold
- Sidebar Name: 26px Bold
- Job/Degree/Skill Titles: 12px Bold
- Body Text: 12px Regular
- Metadata: 10px Medium, uppercase, grey

### Spacing & Layout
- **Section Spacing:** 35px margin-bottom between major sections
- **Header Margin:** 0px left margin (full-width bars)
- **List Item Padding:** 24px left padding (bullets)
- **Text Alignment:** Left-aligned on mobile, justified on desktop (summary only)
- **Mobile Sidebar:** Fixed 100vh height, flex-based positioning
- **Contact Anchoring:** `margin-top: auto;` on `.sidebar-bottom`

---

## Implementation Status

✅ **Font System:** Inter (Google Fonts) - Modern, professional, highly legible
✅ **Sidebar:** Fixed 350px width on desktop, responsive on mobile
✅ **Typography:** Complete 6-level hierarchy (52px → 10px)
✅ **Color:** Professional grey palette (#E6E6E6, #F0F0F0, #888, #999)
✅ **Spacing:** Balanced whitespace throughout
✅ **Mobile First:** Responsive design optimized for all screen sizes
✅ **Accessibility:** Semantic HTML, proper contrast ratios, readable text sizes

---

## Original Design Specifications (Reference)

### Initial Design Goals
- Structure: Two-column flex layout
- Sidebar: 30% width, #E6E6E6 background, profile + contact
- Main Content: 70% width, white background
- Typography: Professional san-serif with clear hierarchy
- Responsiveness: Mobile-first approach with breakpoints at 768px and 480px
- Greyscale icons (opacity + brightness filter)
- Profile image centered, contained, grayscale
- Skill/header alignment (16px left padding)
- Certification dates greyscale inline
- Section spacing (35px margin-bottom)

---

## Original Design Specification (Reference)

### 1. Global Layout & Styling
- Structure: Two-column flex or grid layout.
- Sidebar (Left): Roughly 27% width, light grey background (#E6E6E6).
- Main Content (Right): Roughly 73% width, white background.
- Typography: Futura (Heavy for headers/titles, Light for body).
- Headers: All-caps in the right column with a light grey (#F0F0F0) horizontal bar behind them for section separation.
- Body Text: Heavy for titles, Light for descriptions (no italics).
- Color Palette: White and light grey for background, black and light grey for text.

### 2. Sidebar Elements (Left Column)
- Profile Image: A grayscale headshot at the top (`picture.jpg`), centered, uncrapped.
- Name & Title (centered):
  - `Ma Elena Corio` — 28px Futura Heavy.
  - `Computational Designer` — 18px Futura Light.
- Professional Summary: Justified block of text (no italics) describing background in architectural design and digital workflows. 12px Futura Light.
- Contact Section: Located at the bottom (pinned via flexbox).
  - Icons (greyscale) followed by contact details. 12px Futura Light.
- "References Available Upon Request" note at the very bottom. 12px Futura Light.

### 3. Main Content Elements (Right Column)
#### Experience Section
- Structure: Title (12px Futura Heavy) → Company/Location (12px Futura Book, grey) → Dates (grey) → Bullet points (12px Futura Light).
- Role 1: Software Engineer at Gropyus, Vienna (Oct 2020 – June 2025).
- Role 2: Structural and Computational Engineer at B+G Ingenieure, Stuttgart (May 2017 – Aug 2020).

#### Education Section
- Item 1: Master of Computational Design (MaCAD) at IAAC (2025 – Present).
- Item 2: Master's Degree in Architectural Engineering at University of Pisa (Dec 2016, 110/110 with Honours).
- Item 3: Research Student at CNR (May 2016 – Dec 2016).

#### Skills Section
- Languages: Italian, English, German (with proficiency levels).
- Technologies: 6 categories (Visual Coding, Programming, Environmental Analysis, Structural Analysis, 3D Modeling, Other).
- Proficiency levels displayed inline in grey parentheses.

#### Achievements Section
- Certificates: With dates in grey inline spans.
- Publications: Details of 2016 publication in International Journal of Computational Methods.
- Awards: "Best Thesis in Computer Graphics - Eurographics Italy" (2017).

### 4. Technical Implementation
- CSS Recommendation: Use `display: flex` for main container and sidebar with `justify-content: space-between` to pin contact to bottom.
- Section Headers: Use `h2` with `background-color: #F0F0F0`, `width: 100%`, and `margin: 0 0 35px 0`.
- Global Italic Removal: `font-style: normal !important` on all elements.
- Responsiveness: On mobile (768px), sidebar stacks on top of main content.

---

*Design spec updated 2026-01-08 with implementation details and additional changes.*
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
- Certificates: Includes Chartered Engineer (2021) and Rhino/Grasshopper certs.
- Publications: Details a specific 2016 publication in the International Journal of Computational Methods.
- Awards: "Best Thesis in Computer Graphics - Eurographics Italy" (2017).

## 4. Technical Suggestions for the AI
- CSS Recommendation: Use `display: flex` for the main container and padding to create the breathing room seen in the margins.
- Section Headers: Use an `h2` with `background-color: #F0F0F0` and `width: 100%` to mimic the grey bars.
- Responsiveness: On mobile, the sidebar should stack on top of the main content.

---

*This file is the canonical design spec for implementing the CV UI. Update `docs/design.md` if the visual details change.*